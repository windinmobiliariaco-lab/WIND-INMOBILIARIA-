# WIND Inmobiliaria — Website

Proyecto frontend preparado para la entrega universitaria y para posteriores ediciones.

## Estructura

- `index.html` — estructura completa de las 14 secciones.
- `css/styles.css` — diseño, responsive, variables de marca y animaciones.
- `js/script.js` — navegación, menú móvil, animaciones, filtros, formularios demo y chat.
- `assets/images/` — carpeta para colocar las imágenes reales.

## Cómo abrirlo

1. Descarga/descomprime la carpeta.
2. Abre `index.html` en el navegador.
3. Para trabajar cómodamente, abre la carpeta completa en Visual Studio Code.
4. Si usas VS Code, puedes instalar "Live Server" y abrir `index.html` con Live Server.

## Dónde editar

Cada sección del `index.html` está marcada como:

SECCIÓN 01 — PORTADA / HERO
SECCIÓN 02 — LOGROS
...
SECCIÓN 14 — FINAL / CIERRE

Esto permite pedir cambios por número de sección sin confundirnos.

## Imágenes

Las imágenes son placeholders. Sustituye los archivos o cambia las rutas indicadas en los comentarios:

- `assets/images/hero.jpg`
- `assets/images/property-01.jpg`
- `assets/images/property-02.jpg`
- `assets/images/property-03.jpg`
- `assets/images/payment.jpg`
- `assets/images/investment.jpg`
- `assets/images/caja-honor.jpg`
- `assets/images/abroad.jpg`
- `assets/images/about.jpg`
- `assets/images/isabella.jpg`
- `assets/images/dani.jpg`
- `assets/images/maria-nancy.jpg`
- `assets/images/final.jpg`

## Colores de marca

Variables en `css/styles.css`:

- Navy: `#030339`
- Rojo: `#BA0000`
- Blanco: `#FFFFFF`
- Negro: `#000000`

El rojo está reservado principalmente para acentos, etiquetas, indicadores y llamadas a la acción para evitar que domine visualmente la página.

## Nota importante sobre funcionalidad

Los formularios actualmente muestran la confirmación en frontend, pero no envían datos a un servidor. Para una web real habría que conectar el formulario con un backend, servicio de formularios, CRM, correo o WhatsApp.

El botón de Aval Pay tiene un `href="#"` provisional: reemplázalo por el enlace real de Aval Pay.

El catálogo incluye tres propiedades placeholder para demostrar que los filtros funcionan. Puedes sustituirlas por las propiedades reales o conectar el catálogo a una API/base de datos.
