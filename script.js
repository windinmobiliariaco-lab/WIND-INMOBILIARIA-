(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('#mobile-menu');

  if (menuButton && mobileMenu) {
    const closeMenu = () => {
      mobileMenu.hidden = true;
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Abrir menú');
    };

    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      mobileMenu.hidden = isOpen;
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Abrir menú' : 'Cerrar menú');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 800) closeMenu();
    });
  }

  // Servicios: revela cada panel al entrar en pantalla y sincroniza el índice lateral.
  const servicePanels = Array.from(document.querySelectorAll('.service-panel'));
  const serviceLinks = Array.from(document.querySelectorAll('.services-index a'));
  if (servicePanels.length && 'IntersectionObserver' in window) {
    const serviceObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        const activeLink = serviceLinks.find(link => link.hash === `#${entry.target.id}`);
        serviceLinks.forEach(link => link.setAttribute('aria-current', String(link === activeLink)));
      });
    }, { threshold: 0.42 });
    servicePanels.forEach(panel => serviceObserver.observe(panel));
  } else {
    servicePanels.forEach(panel => panel.classList.add('is-visible'));
  }

  // Parallax discreto: se desactiva cuando el usuario prefiere movimiento reducido.
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  // Hero slideshow automático: cambia la fotografía cada 6 segundos.
  const heroSlides = Array.from(document.querySelectorAll('.hero-image .hero-slide'));
  const imageCurrent = document.querySelector('.image-current');

  if (heroSlides.length > 1 && !reduceMotion.matches) {
    let activeSlide = 0;
    window.setInterval(() => {
      heroSlides[activeSlide].classList.remove('is-active');
      activeSlide = (activeSlide + 1) % heroSlides.length;
      heroSlides[activeSlide].classList.add('is-active');
      if (imageCurrent) imageCurrent.textContent = String(activeSlide + 1).padStart(2, '0');
    }, 6000);
  }


  // Contadores animados: empiezan al entrar la sección de logros en pantalla.
  const achievementNumbers = document.querySelectorAll('.achievement-number[data-count]');

  if (achievementNumbers.length) {
    const formatNumber = value => Math.floor(value).toLocaleString('es-CO');
    const showFinalValues = () => {
      achievementNumbers.forEach(number => {
        const prefix = number.dataset.prefix || '';
        number.textContent = `${prefix}${formatNumber(Number(number.dataset.count))}`;
      });
    };

    if (reduceMotion.matches || !('IntersectionObserver' in window)) {
      showFinalValues();
    } else {
      let hasAnimated = false;
      const achievementsSection = document.querySelector('.achievements');

      const animateCounters = () => {
        if (hasAnimated) return;
        hasAnimated = true;

        const duration = 950;
        const startTime = performance.now();

        const tick = now => {
          const progress = Math.min((now - startTime) / duration, 1);
          // Ease-out: arranca con energía y termina suavemente.
          const eased = 1 - Math.pow(1 - progress, 3);

          achievementNumbers.forEach(number => {
            const target = Number(number.dataset.count);
            const current = Math.round(target * eased);
            const prefix = number.dataset.prefix || '';
            number.textContent = `${prefix}${formatNumber(current)}`;
          });

          if (progress < 1) {
            window.requestAnimationFrame(tick);
          } else {
            showFinalValues();
          }
        };

        window.requestAnimationFrame(tick);
      };

      if (achievementsSection) {
        const counterObserver = new IntersectionObserver(entries => {
          if (entries.some(entry => entry.isIntersecting)) {
            animateCounters();
            counterObserver.disconnect();
          }
        }, { threshold: 0.22 });

        counterObserver.observe(achievementsSection);
      } else {
        showFinalValues();
      }
    }
  }

  const heroImage = document.querySelector('.hero-image img');

  if (heroImage && !reduceMotion.matches) {
    let ticking = false;
    const updateParallax = () => {
      const hero = document.querySelector('.hero');
      if (!hero) return;
      const bounds = hero.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, -bounds.top / Math.max(bounds.height, 1)));
      heroImage.style.setProperty('--scroll-shift', `${progress * 5}%`);
      heroImage.style.transform = `translate3d(0, ${progress * 5}%, 0) scale(1.02)`;
      ticking = false;
    };

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }, { passive: true });
  }



  // FAQ: acordeón accesible; mantiene una sola respuesta abierta.
  const faqItems = [...document.querySelectorAll('.faq-item')];
  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    trigger?.addEventListener('click', () => {
      const shouldOpen = trigger.getAttribute('aria-expanded') !== 'true';
      faqItems.forEach(other => {
        const button = other.querySelector('.faq-question');
        const panel = other.querySelector('.faq-answer');
        const isCurrent = other === item;
        button?.setAttribute('aria-expanded', String(isCurrent && shouldOpen));
        other.classList.toggle('is-open', isCurrent && shouldOpen);
        if (panel) panel.hidden = !(isCurrent && shouldOpen);
      });
    });
  });

  // Soporte: interacción visual y validación local del formulario.
  // La recepción real del ticket requiere conectar un servicio/backend.
  const supportForm = document.querySelector('#support-form');
  const supportSuccess = document.querySelector('#support-success');
  const supportReset = document.querySelector('#support-reset');
  if (supportForm && supportSuccess) {
    supportForm.addEventListener('submit', event => {
      event.preventDefault();
      if (!supportForm.reportValidity()) return;
      const selectedCategory = supportForm.querySelector('input[name="support-category"]:checked');
      if (!selectedCategory) {
        supportForm.querySelector('input[name="support-category"]').focus();
        return;
      }
      supportForm.hidden = true;
      supportSuccess.hidden = false;
      supportSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
    supportReset?.addEventListener('click', () => {
      supportForm.reset();
      supportSuccess.hidden = true;
      supportForm.hidden = false;
    });
  }

})();


(() => {

  // Ficha de demostración del catálogo: no representa una conexión activa a CRM RED.
  const catalogModal = document.querySelector('#catalog-modal');
  const catalogOpen = document.querySelector('#catalog-open-detail');
  const catalogCloseItems = document.querySelectorAll('[data-close-catalog]');
  const catalogSearchButton = document.querySelector('#catalog-search-button');

  const closeCatalogModal = () => {
    if (!catalogModal) return;
    catalogModal.hidden = true;
    document.body.classList.remove('modal-open');
  };
  if (catalogOpen && catalogModal) {
    catalogOpen.addEventListener('click', () => {
      catalogModal.hidden = false;
      document.body.classList.add('modal-open');
      const closeButton = catalogModal.querySelector('.catalog-modal-close');
      if (closeButton) closeButton.focus();
    });
    catalogCloseItems.forEach(item => item.addEventListener('click', closeCatalogModal));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && !catalogModal.hidden) closeCatalogModal();
    });
  }
  if (catalogSearchButton) {
    catalogSearchButton.addEventListener('click', () => {
      const note = document.querySelector('.catalog-results-note');
      if (note) note.textContent = 'Filtros de demostración · la búsqueda real se conectará al inventario CRM RED.';
      document.querySelector('.catalog-results-head')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }


  // Carrusel continuo: loop sin saltos, como un carrusel giratorio.
  const propertyTrack = document.querySelector('#catalog-property-track');
  const autoplayButton = document.querySelector('#catalog-autoplay');
  const propertyPrev = document.querySelector('#catalog-prev');
  const propertyNext = document.querySelector('#catalog-next');
  const reduceMotionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');

  if (propertyTrack && !reduceMotionPreference.matches && !propertyTrack.dataset.loopReady) {
    const originalCards = Array.from(propertyTrack.children);
    originalCards.forEach(card => {
      const clone = card.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      clone.querySelectorAll('button,a,input,select,textarea').forEach(control => control.setAttribute('tabindex', '-1'));
      propertyTrack.appendChild(clone);
    });
    propertyTrack.dataset.loopReady = 'true';
  }

  const setCarouselPaused = paused => {
    if (!propertyTrack) return;
    propertyTrack.classList.toggle('is-paused', paused);
    if (autoplayButton) {
      autoplayButton.textContent = paused ? 'Reanudar movimiento' : 'Pausar movimiento';
      autoplayButton.setAttribute('aria-pressed', String(paused));
    }
  };
  autoplayButton?.addEventListener('click', () => {
    setCarouselPaused(!propertyTrack.classList.contains('is-paused'));
  });
  propertyPrev?.addEventListener('click', () => {
    propertyTrack?.classList.add('is-paused');
    propertyTrack?.classList.toggle('is-reverse');
    setCarouselPaused(false);
  });
  propertyNext?.addEventListener('click', () => {
    propertyTrack?.classList.remove('is-reverse');
    setCarouselPaused(false);
  });
  propertyTrack?.addEventListener('focusin', () => setCarouselPaused(true));
  propertyTrack?.addEventListener('focusout', () => setCarouselPaused(false));
  if (reduceMotionPreference.matches) setCarouselPaused(true);

  const propertyModal = document.querySelector('#catalog-modal');
  if (propertyModal) {
    document.querySelectorAll('[data-open-catalog]').forEach(button => button.addEventListener('click', () => {
      propertyModal.hidden = false;
      document.body.classList.add('modal-open');
      propertyModal.querySelector('.catalog-modal-close')?.focus();
    }));
    propertyModal.querySelectorAll('[data-close-catalog]').forEach(button => button.addEventListener('click', () => {
      propertyModal.hidden = true;
      document.body.classList.remove('modal-open');
    }));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && !propertyModal.hidden) {
        propertyModal.hidden = true;
        document.body.classList.remove('modal-open');
      }
    });
  }


  // Cada paso muestra exclusivamente su imagen correspondiente dentro del teléfono.
  const paymentScreen = document.querySelector('#payment-device-content');
  const paymentSteps = [...document.querySelectorAll('[data-payment-step]')];
  const paymentProgress = [...document.querySelectorAll('.payment-progress span')];
  const paymentImages = [
    { src: 'assets/imagenpago1.jpg', alt: 'Paso 1: acceso a la plataforma de pago' },
    { src: 'assets/imagenpago2.jpg', alt: 'Paso 2: identificación del pago con el código mensual' },
    { src: 'assets/imagenpago3.jpg', alt: 'Paso 3: continuación del proceso de pago' }
  ];
  let activePaymentStep = -1;
  const showPaymentStep = index => {
    if (index < 0 || index > 2 || index === activePaymentStep) return;
    activePaymentStep = index;
    if (paymentScreen) {
      const image = document.createElement('img');
      image.className = 'payment-step-image';
      image.src = paymentImages[index].src;
      image.alt = paymentImages[index].alt;
      image.decoding = 'async';
      paymentScreen.replaceChildren(image);
      paymentScreen.style.animation = 'none';
      void paymentScreen.offsetWidth;
      paymentScreen.style.animation = '';
    }
    paymentSteps.forEach(step => step.classList.toggle('is-active', Number(step.dataset.paymentStep) === index));
    paymentProgress.forEach((bar, i) => bar.classList.toggle('is-active', i === index));
  };
  if (paymentSteps.length) {
    // Determina el paso por el centro de la ventana: evita que dos observaciones
    // parcialmente visibles provoquen que se mezclen las imágenes.
    let ticking = false;
    const updatePaymentStep = () => {
      const targetY = window.innerHeight * 0.48;
      const nearest = paymentSteps.map(step => {
        const rect = step.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        return { step, distance: Math.abs(center - targetY), visible: rect.bottom > 0 && rect.top < window.innerHeight };
      }).filter(item => item.visible).sort((a, b) => a.distance - b.distance)[0];
      if (nearest) showPaymentStep(Number(nearest.step.dataset.paymentStep));
      ticking = false;
    };
    const requestUpdate = () => {
      if (!ticking) { ticking = true; window.requestAnimationFrame(updatePaymentStep); }
    };
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    requestUpdate();
  }


  // Soporte: interacción visual y validación local del formulario.
  // La recepción real del ticket requiere conectar un servicio/backend.
  const supportForm = document.querySelector('#support-form');
  const supportSuccess = document.querySelector('#support-success');
  const supportReset = document.querySelector('#support-reset');
  if (supportForm && supportSuccess) {
    supportForm.addEventListener('submit', event => {
      event.preventDefault();
      if (!supportForm.reportValidity()) return;
      const selectedCategory = supportForm.querySelector('input[name="support-category"]:checked');
      if (!selectedCategory) {
        supportForm.querySelector('input[name="support-category"]').focus();
        return;
      }
      supportForm.hidden = true;
      supportSuccess.hidden = false;
      supportSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
    supportReset?.addEventListener('click', () => {
      supportForm.reset();
      supportSuccess.hidden = true;
      supportForm.hidden = false;
    });
  }

})();
