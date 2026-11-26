# WIND Inmobiliaria — Hero (HTML / CSS / JavaScript)

Primera entrega estática de la portada de WIND.

## Abrir en Visual Studio Code

1. Descomprime la carpeta `wind-hero-html`.
2. Abre esa carpeta desde Visual Studio Code.
3. Abre `index.html` en el navegador.

Recomendado: instalar la extensión **Live Server** en VS Code, hacer clic derecho sobre `index.html` y elegir **Open with Live Server**.

No requiere Node.js, React, Next.js ni instalación de dependencias.

## Archivos

- `index.html`: estructura y contenido.
- `styles.css`: identidad visual, responsive y animaciones CSS.
- `script.js`: menú móvil y parallax ligero.

## Notas

- La fotografía es provisional y se carga desde Unsplash; debe sustituirse por fotografía autorizada de WIND antes de publicar.
- Las fuentes Manrope y Newsreader se cargan desde Google Fonts.
- Los enlaces apuntan a anclas de secciones que se desarrollarán en próximas entregas.
- No se ha integrado el CRM ni el catálogo; se abordará en su fase correspondiente.
- Incluye soporte para `prefers-reduced-motion`.


## Cómo colocar el logo oficial de WIND

1. Abre la carpeta del proyecto en Visual Studio Code.
2. Dentro de la carpeta `assets`, coloca tu archivo PNG.
3. Renómbralo exactamente como `logo-wind.png`.
4. Guarda y recarga la página.

La imagen se mostrará automáticamente en el encabezado. Si todavía no has añadido el PNG, aparecerá temporalmente el logotipo tipográfico de texto.

## Ajustes de esta revisión

- Aumenté ligeramente la legibilidad de la navegación, etiquetas inferiores, texto descriptivo y enlaces pequeños.
- Di más presencia al rojo de marca en el botón principal y en el contorno de “Hablemos”, manteniendo el conjunto sobrio.
- Preparé un espacio directo para reemplazar el logotipo tipográfico por el PNG oficial.


## Revisión 03 — degradado de identidad

- El fondo ahora incorpora un degradado difuminado inspirado en la referencia: navy profundo con halos rojos suaves, sin bloques de color duros.
- Se eliminó el logotipo tipográfico provisional. El encabezado queda reservado exclusivamente para el PNG oficial `assets/logo-wind.png`.


## Revisión 04 — color en el panel izquierdo

La fotografía permanece intacta con su tratamiento original. El degradado rojo/azul se aplica únicamente al panel navy izquierdo, como una luz ambiental suave que aporta personalidad sin teñir la imagen arquitectónica.


## Revisión 05 — ajustes de Hero y navegación

- Eliminé los efectos rojos difuminados del fondo.
- El titular queda en una sola familia tipográfica; “de principio a fin” tiene más aire entre letras y palabras.
- Aumenté la legibilidad de navegación, etiquetas, enlaces y textos pequeños.
- Reorganicé el menú: Servicios, Paga tu arriendo, Propiedades, Invertir, Nosotros y Contacto.
- Cambié el CTA superior a “Habla con un asesor”.
- Añadí un acceso fijo inferior derecho “¿Tienes alguna pregunta?” con espacio para el PNG `assets/whatsapp.png`.
- El botón de WhatsApp apunta provisionalmente a la sección de contacto (`#contacto`); cuando WIND comparta su enlace oficial de WhatsApp, se reemplazará el destino.


## Revisión 06 — refinamiento de composición

- Subí el bloque del titular para equilibrar mejor el hero.
- Recuperé la tipografía Newsreader itálica de “de principio a fin” y aumenté su espaciado entre letras sin cambiar su estilo.
- Reubiqué “Desliza para descubrir” para que no se cruce con el botón flotante.
- Ajusté la flecha de “Habla con un asesor”: menos separación y mayor tamaño.
- Eliminé el enlace secundario “Hablar con un asesor” del bloque principal; queda únicamente “Explorar propiedades”.


## Revisión 07 — tipografía del titular

“De principio a fin” vuelve a la tipografía sans-serif inicial del titular (Manrope), igualando el tratamiento tipográfico que se buscaba en la primera propuesta. Se mantiene un espaciado ligeramente mayor entre letras.


## Revisión 08 — cursiva y unión de imagen

- “De principio a fin” vuelve a Newsreader en cursiva, con un poco más de espacio entre letras.
- Suavicé la transición entre el panel navy izquierdo y la fotografía con un degradado más amplio y un borde difuminado. La imagen arquitectónica conserva su aspecto original; se elimina el efecto de corte rectangular.


## Revisión 09 — cursiva aplicada directamente al texto

Corrección puntual: el texto “de principio a fin” ahora está marcado explícitamente con la tipografía Newsreader cursiva en el HTML, no solo con una regla CSS que no encontraba un elemento cursivo. Así se diferencia visualmente de “Tu inmobiliaria integral”.


## FASE 02 — Logros (primera propuesta)

Se añadió una sección editorial de logros después del Hero. Las cifras y ciudades se han tomado del documento “WIND INMOBILIARIA Copy 26! (1).pdf”: +10 años de experiencia, +200 propiedades gestionadas, 3 asesores integrales, 3 ciudades (Cali, Medellín y Yumbo) y +200 asesores aliados en el país. La cifra de aliados se presenta como una nota secundaria para distinguirla de los indicadores principales.


## Revisión 02 — mejoras de Logros y testimonios

- La cifra de asesores aliados se actualizó a +220 y ahora ocupa una tarjeta del mismo nivel visual que los otros indicadores.
- Se añadió un diseño de fondo minimalista sobre ivory: trama de puntos muy sutil, halos suaves y círculos lineales decorativos.
- Se incorporaron dos bloques de testimonios con los textos proporcionados y espacios para fotografías. Añade las imágenes `assets/testimonio-1.jpg` y `assets/testimonio-2.jpg` para sustituir los espacios provisionales.


## Revisión 03 — orden y subtítulos de indicadores

- Orden: +10 años, +200 propiedades, +220 asesores aliados, 3 especialistas en gestión inmobiliaria y 3 ciudades.
- El +220 ahora usa navy en lugar de rojo.
- Cada indicador cuenta con un subtítulo descriptivo.
- “3 Asesores integrales” se actualizó a “3 Especialistas en gestión inmobiliaria”.


## Revisión 04 — contadores animados

Los cinco indicadores numéricos cuentan desde cero hasta su valor final en aproximadamente 0,95 segundos cuando la sección de logros entra en pantalla. La animación se ejecuta una sola vez, utiliza una desaceleración suave al terminar y respeta la preferencia del sistema por movimiento reducido.


## HERO — fotografías automáticas

El Hero alterna automáticamente entre tres fotografías cada 6 segundos mediante una transición crossfade de 1,25 segundos. El texto, navegación y botones permanecen fijos. La rotación se desactiva si el visitante tiene activada la preferencia de movimiento reducido.

## FASE 03 — Servicios

Se incorporó la sección de servicios con cuatro áreas basadas en el documento oficial de contenidos: compra y venta de propiedades, arriendo profesional, asesoría jurídica y patrimonial, y asesoría financiera e inversión. La experiencia usa paneles fotográficos amplios, índice lateral navegable, revelado al entrar en pantalla y zoom sutil al pasar el cursor. En móvil el índice se adapta a dos columnas. Las llamadas a la acción apuntan a `#contacto`, sección que se desarrollará en una fase posterior.

Las fotografías de esta sección son referencias provisionales de Unsplash y deberán reemplazarse por imágenes autorizadas de WIND antes de publicar.


## FASE 04 — Catálogo inmobiliario (propuesta visual)

Se añadió una propuesta editorial para el catálogo WIND con filtros visuales, panel destacado y una vista previa de ficha. La propiedad usada es el ejemplo compartido por el usuario; no se han completado datos no verificados. La imagen está identificada como referencia y no corresponde a la fotografía real del inmueble.

**Importante:** esta entrega NO está conectada a CRM RED. Los filtros y la ficha son una demostración de interfaz. Antes de activar inventario real se debe confirmar con CRM RED el método soportado para consumir propiedades desde una web externa (API, feed, widget o integración autorizada), junto con campos, autenticación, límites y condiciones del plan RED PARTNER.


## FASE 04 — Catálogo, revisión 04

Ajustes solicitados:
- Se elimina el subtítulo duplicado; queda un solo encabezado de propiedades.
- Fondo más dinámico con halos de color, anillos y formas suaves en navy y rojo sobre ivory.
- El carrusel pasa a un desplazamiento continuo y lineal, en bucle sin saltos: las tarjetas entran por un lado mientras salen por el otro.
- El movimiento se pausa al pasar el cursor o al enfocar tarjetas; hay control para pausar/reanudar y flechas para invertir o restablecer la dirección.
- Se respeta `prefers-reduced-motion`.
Las tarjetas e imágenes siguen siendo ejemplos visuales; la integración CRM RED no está activa.


## FASE 04 — Catálogo, revisión 05

Ajuste de alineación de las flechas del carrusel con flexbox (centrado horizontal y vertical, sin padding interno) y refinamiento del fondo con un poco más de presencia roja/navy, conservando la base ivory y el carácter discreto.


## FASE 04 — Catálogo, revisión 05

Ajuste visual final:
- Flechas del carrusel centradas horizontal y verticalmente en sus botones circulares mediante flexbox, padding cero y altura de línea normalizada.
- Fondo con un incremento sutil de saturación ambiental en rojo y navy, manteniendo la base ivory y el contraste sobrio.


## Fase 05 — Plataforma de pago (Aval Pay)

Se añadió una sección de storytelling con un iPhone CSS y tres pantallas conceptuales que cambian al avanzar por los pasos. El recorrido explica únicamente lo respaldado por el copy: acceso a Aval Pay, uso del código mensual enviado por WIND y continuación del proceso en Aval Pay. Las pantallas son ilustrativas y no simulan una transacción real ni una confirmación de pago.

**Pendiente antes de publicar:** sustituir las maquetas por capturas oficiales si WIND las facilita y añadir la URL oficial de Aval Pay al botón «Paga tu arriendo». El botón queda visualmente presente pero deshabilitado hasta contar con ese enlace; no se ha inventado una URL.


## FASE 05 — cierre editorial de la experiencia de pago (revisión 08)

- Se añadió, después del recorrido de los tres pasos, un bloque de cierre titulado “Tu tranquilidad, también es parte del servicio”.
- Incluye una nota sobre el acceso a Aval Pay como plataforma externa y una invitación a contactar con el equipo WIND si se necesita orientación.
- Se conservan el recorrido sticky, las imágenes JPG, el notch, los subtítulos de los pasos y el botón superior.

### Revisión 10 — cierre que ocupa el espacio real
- El bloque de tranquilidad permanece estático debajo de los pasos, dentro de la columna izquierda.
- Se elimina el espaciador vacío que prolongaba artificialmente el scroll.
- El bloque tiene una altura contenida para ocupar ese espacio visual sin convertirse en otra sección ni aumentar innecesariamente la página.
- Se elimina el padding inferior extra de la sección; el teléfono conserva su comportamiento sticky hasta el final del contenido de la columna.


## Fase 06 — Soporte / crear ticket

Se añadió la sección de soporte con categorías seleccionables (Mantenimiento, Pago, Contrato y Otro), descripción, contacto, validación HTML y estado visual de confirmación.

**Integración pendiente:** actualmente el formulario valida los campos en el navegador y muestra el estado de confirmación como demostración de interfaz. No transmite ni almacena solicitudes. Para recibir tickets reales, conectar el `submit` de `#support-form` con el CRM, correo o endpoint autorizado por WIND; solo después debe mostrarse la confirmación definitiva al usuario.


## Revisión 03 — soporte
- La tarjeta editorial de soporte utiliza `assets/support-assistance.svg` como imagen de fondo original.
- El mensaje se actualizó a «Estamos aquí para ayudarte».


### Imagen personalizable de la Fase 06 — Soporte

La imagen anterior se eliminó. Para añadir tu propia fotografía, guárdala en `assets/soporte.jpg`. La tarjeta editorial de soporte la utilizará automáticamente como fondo. Si todavía no colocas la imagen, se verá el fondo navy de WIND. Consulta `assets/LEEME-IMAGEN-SOPORTE.txt`.


## Fase 7 · Preguntas frecuentes (revisión 01)
Se añadió la sección editorial de preguntas frecuentes después de Soporte, con las seis preguntas y respuestas del copy oficial. El acordeón permite mantener una sola respuesta abierta, incluye controles accesibles y respeta `prefers-reduced-motion`. La invitación de contacto enlaza al ancla `#contacto`; verifica el destino cuando se integre la sección de contacto.


### Fase 8 — Modelo 3D interactivo
La casa de la sección de inversión se renderiza en el navegador con Three.js (cargado desde jsDelivr). Puedes arrastrar con ratón o dedo para girarla; las flechas izquierda/derecha también la rotan cuando el visor tiene el foco. En reposo gira muy lentamente. Se conserva una imagen de respaldo si WebGL o la conexión CDN no están disponibles. El modelo es geométrico/procedural, no un archivo de arquitectura GLB externo.


## Fase 09 — Caja de Honor
La sección incluye una imagen local reemplazable: `assets/caja-honor-familia.jpg`. Para usar una fotografía propia, reemplaza ese archivo conservando exactamente el mismo nombre y extensión. El bloque está ubicado después de la Fase 08 (Inversión) y antes de la siguiente sección.

## Fase 10 — Colombianos en el exterior

Se incorporó la sección después de Caja de Honor y antes de Nuestra esencia, respetando el orden del documento de contenidos. La bandera colombiana está construida como SVG dentro del HTML y tiene una animación CSS de ondeo; no depende de una imagen externa. La sección incluye el copy y los cuatro puntos de acompañamiento del documento oficial. El CTA apunta al formulario de contacto existente.

La casa 3D de la Fase 8 conserva su animación automática y ya no incluye interacción de arrastre o giro manual.
