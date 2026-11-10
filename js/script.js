document.addEventListener("DOMContentLoaded", () => {
  // =========================================================
  // NAVEGACIÓN Y MENÚ MÓVIL
  // =========================================================
  const header = document.querySelector("#site-header");
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector("#mobile-menu");

  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 40);
  }, { passive: true });

  menuToggle?.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    document.body.classList.toggle("menu-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mobileMenu?.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      document.body.classList.remove("menu-open");
      menuToggle?.setAttribute("aria-expanded", "false");
    });
  });

  // =========================================================
  // ANIMACIONES DE ENTRADA AL HACER SCROLL
  // =========================================================
  const revealElements = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach((el, index) => {
    el.style.transitionDelay = `${Math.min(index % 5, 4) * 70}ms`;
    observer.observe(el);
  });

  // =========================================================
  // CATÁLOGO — FILTROS FUNCIONALES
  // =========================================================
  const filterForm = document.querySelector("#property-filters");
  const cards = [...document.querySelectorAll(".property-card")];
  const emptyState = document.querySelector("#empty-state");

  filterForm?.addEventListener("submit", (event) => {
    event.preventDefault();

    const city = document.querySelector("#city").value;
    const type = document.querySelector("#type").value;
    const status = document.querySelector("#status").value;
    const budget = document.querySelector("#budget").value;

    let visibleCount = 0;

    cards.forEach(card => {
      const matches =
        (!city || card.dataset.city === city) &&
        (!type || card.dataset.type === type) &&
        (!status || card.dataset.status === status) &&
        (!budget || card.dataset.budget === budget);

      card.style.display = matches ? "" : "none";
      if (matches) visibleCount++;
    });

    emptyState.hidden = visibleCount !== 0;
  });

// ======================================================
// SECCIÓN 04 — CARRUSEL AUTOMÁTICO DE INMUEBLES
// ======================================================

// CATÁLOGO — CARRUSEL INFINITO
const carousel = document.querySelector("#property-grid");
const track = document.querySelector("#property-track");

if (carousel && track) {
  // Guardamos las tarjetas originales en su orden actual.
  const originals = [...track.querySelectorAll(":scope > .property-card")];

  if (originals.length > 0) {
    // Agrupamos las tarjetas originales.
    const firstSet = document.createElement("div");
    firstSet.className = "property-track-set";
    firstSet.id = "property-original-set";

    originals.forEach(card => firstSet.appendChild(card));
    track.appendChild(firstSet);

    // Creamos una segunda copia para cerrar el bucle.
    const cloneSet = firstSet.cloneNode(true);
    cloneSet.removeAttribute("id");
    cloneSet.setAttribute("aria-hidden", "true");

    cloneSet.querySelectorAll("a, button, input, select, textarea, [tabindex]")
      .forEach(el => el.setAttribute("tabindex", "-1"));

    track.appendChild(cloneSet);

    // Ajustamos el ancho para que se vean tres tarjetas.
    const resizeCarousel = () => {
      const gap = parseFloat(
        getComputedStyle(track.querySelector(".property-track-set")).gap
      ) || 20;

      const width = (carousel.clientWidth - gap * 2) / 3;
      carousel.style.setProperty("--card-width", `${width}px`);

      // Velocidad constante aproximada: 35 píxeles por segundo.
      const distance = firstSet.getBoundingClientRect().width;
      const duration = Math.max(15, distance / 35);

      track.style.animationDuration = `${duration}s`;
    };

    resizeCarousel();
    window.addEventListener("resize", resizeCarousel);

    // Mantiene las copias sincronizadas con los filtros existentes.
    const syncClones = () => {
      originals.forEach((card, index) => {
        const clone = cloneSet.children[index];
        if (!clone) return;

        clone.style.display = getComputedStyle(card).display;
      });
    };

    const filterForm = document.querySelector(".property-filters");

    filterForm?.addEventListener("change", () => {
      setTimeout(syncClones, 50);
    });

    filterForm?.addEventListener("submit", () => {
      setTimeout(syncClones, 50);
    });
  }
}

  // =========================================================
  // FORMULARIOS — DEMO FRONTEND
  // =========================================================
  const supportForm = document.querySelector("#support-form");
  const supportSuccess = document.querySelector("#support-success");

  supportForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    supportSuccess.hidden = false;
    supportForm.reset();
  });

  const contactForm = document.querySelector("#contact-form");
  const contactSuccess = document.querySelector("#contact-success");

  contactForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    contactSuccess.hidden = false;
    contactForm.reset();
  });

  // =========================================================
  // CHAT WIDGET
  // =========================================================
  const chatTrigger = document.querySelector("#chat-trigger");
  const chatWidget = document.querySelector("#chat-widget");
  const chatClose = document.querySelector("#chat-close");

  chatTrigger?.addEventListener("click", () => {
    chatWidget.hidden = !chatWidget.hidden;
  });

  chatClose?.addEventListener("click", () => {
    chatWidget.hidden = true;
  });

  // =========================================================
  // AÑO DEL FOOTER
  // =========================================================
  document.querySelector("#year").textContent = new Date().getFullYear();
});

