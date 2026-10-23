# Revisión visual de TRAZA

Fecha: 23 de octubre de 2026.

## Evidencia y normalización

- Referencia: `referencias/mockup-traza.png`, 1122 × 1402 px.
- Implementación: `output/qa/desktop-final.png`, 1107 × 1421 px.
- Viewport de comparación: 1122 × 1402 CSS px, densidad 1.
- El navegador reserva 15 px para el scroll. Las capturas completas excluyen esa franja.
- `output/qa/comparison-final.jpg`: referencia e implementación juntas, reducidas a un
  ancho de 640 px cada una conservando sus proporciones. No se atribuye la franja de
  scrollbar ni los 19 px de diferencia de altura a un fallo de interfaz.
- `output/qa/comparison-hero.jpg`: recortes de la apertura juntos para revisar título,
  subtítulo y botón; se normalizó cada página a 1122 × 1402 para esta comparación local.
- `output/qa/comparison-route.jpg`: referencia y vista con recorrido completo. Esta vista
  usa una simulación controlada del modo reducido, porque el mockup muestra la línea completa.
- Estado normal: apertura, scroll inicial y diálogos cerrados.
- Móvil: `output/qa/mobile-final.png`, 375 × 2270 px, viewport 390 × 844 CSS px.
- Tablet: `output/qa/tablet-768.png`, viewport 768 × 1024 CSS px.

## Historial de correcciones

1. **P2 — Altura de la foto de Casa Patio.** En `desktop-first.png`, el tamaño intrínseco
   de la imagen desbordaba la fila del proyecto: 297 px de fotografía para 258 px de fila.
   Se agregó `grid-template-rows: minmax(0, 1fr)` y `min-height: 0`. La medición final
   devuelve 258.31 px para ambos elementos; `desktop-final.png` muestra el encaje corregido.
2. **P2 — Repetición del encuadre de apertura en la primera obra.** La comparación
   `comparison-second.jpg` mostraba la misma piscina en ambas posiciones. Se generó una
   segunda vista del mismo patio sin piscina. `comparison-final.jpg` muestra el encuadre
   independiente que recupera el jardín y los asientos de la referencia.
3. **P2 — Navegación sobre cielo claro.** Se agregó una superficie grafito discreta detrás
   de los enlaces de escritorio para mantener contraste sobre la fotografía. La corrección
   aparece en `desktop-final.png`; en móvil la navegación se ubica fuera de la foto.

## Comparación final

- **Tipografía:** Arial para la apertura y Georgia para títulos editoriales, sin fuentes
  remotas. Se conservan jerarquía, dos líneas del título en escritorio y escala secundaria.
  El mockup no proporciona archivos de fuente; el dibujo exacto de letras queda como P3.
- **Espaciado y composición:** apertura asimétrica, foto integrada a la planta, título de
  obras a izquierda, Casa Patio a derecha y Reforma Sur invertida. Las fotos ya respetan
  sus filas. En móvil se reorganiza el contenido sin reducir el plano de escritorio entero.
- **Colores:** grafito `#20211e`, marfil `#f0e3ce`, terracota `#d98b61` y texto secundario
  `#c1bcb1`. No se incorporaron gradientes decorativos, glassmorphism ni tarjetas repetidas.
- **Imágenes:** tres fotografías generadas, con hormigón, ladrillo, madera, vegetación y
  luz cálida. WebP con JPEG de respaldo, dimensiones reservadas y carga diferida debajo
  de la apertura. Los encuadres conservan la dirección visual; no son copias de las fotos
  originales. El plano se reconstruyó en SVG conforme a la instrucción explícita del brief.
- **Contenido:** títulos y textos del brief; ubicaciones conceptuales. Se sustituyeron los
  años del mockup por “Proyecto conceptual” para no sugerir obras construidas. Contacto
  identificado como demo y pie de demostración. Sin credenciales ni testimonios inventados.
- **Recorrido:** línea terracota por pasillos con estaciones. En modo normal responde al
  desplazamiento real; en modo reducido aparece completa. El tramo bajo una fotografía
  queda oculto por ella, como parte de la composición del plano.

## Verificaciones

- Navegador real: in-app Browser de Codex. Sin errores ni advertencias de consola durante
  las pruebas finales; fotografías e íconos cargados correctamente.
- Anchos de 320, 390, 768, 1122 y 1440 CSS px: sin desbordamiento horizontal medido.
- Enlaces de navegación y “Recorrer proyectos”: cambian el ancla y desplazan nativamente.
- Recorrido: el desplazamiento a Obras cambió el dash offset de 1482.95 a 509.71 px.
- Casa Patio y Reforma Sur: apertura desde fotografía y enlace de detalles; cierre con
  botón y Escape. Foco inicial en Cerrar y devolución al enlace de origen comprobados.
- Contacto: el botón muestra y enfoca la explicación de demo. No envía información.
- Sin JavaScript de aplicación: vista `output/qa/no-js.html`, detalles nativos operables,
  contenido visible y contacto por ancla. Vite todavía inyecta su cliente de desarrollo;
  no se afirma que se haya deshabilitado todo JavaScript del navegador.
- Movimiento reducido: simulación aislada en `output/qa/reduced-motion.html`, con la
  consulta de la aplicación y las reglas CSS reducidas activadas. Se verificó ausencia
  de `has-motion`, offset de ruta 0, animación `none`, transición 0 s y scroll `auto`.
  El navegador de pruebas no expone emulación de la preferencia del sistema operativo;
  esa activación nativa queda como límite de la prueba, no como una función implementada aparte.
- Compilación, sintaxis JavaScript, formato e indentación y cuatro pruebas del adaptador.

## Ajustes P3 posibles

- Afinar la fuente exacta cuando exista una selección tipográfica definitiva.
- Aumentar la densidad de vegetación y textura del plano si se busca acercarlo todavía
  más a la ilustración del mockup. Se conserva por ahora una planta vectorial esquemática.
- Revisión adicional en Safari/iOS real y preferencia de movimiento del sistema operativo.

## Checklist de implementación

- [x] Composición estática y responsive.
- [x] Fotografías propias de demostración e imágenes optimizadas.
- [x] Navegación, proyectos, foco y contacto de demo.
- [x] Recorrido de scroll y modo sin animación.
- [x] Comparación general y detalle de la apertura después de las correcciones.
- [x] Documentación de arranque, recursos y datos pendientes.

No quedan hallazgos P0/P1/P2 accionables en esta revisión. La fidelidad se refiere a la
composición y dirección visual; no es una reproducción píxel a píxel de la imagen generada.

## Iteración móvil — composición

Solicitud: mejorar la composición general del móvil conservando el escritorio aprobado.

- Estilos móviles separados en `src/mobile.css`, aplicados únicamente hasta 860 px.
  Se comprobó por comparación de archivos que todo el CSS fuera del antiguo bloque
  móvil permanece idéntico.
- Apertura compacta con fotografía más temprana y botón integrado en su parte inferior.
  Etiqueta del proyecto distribuida en una línea cuando el ancho lo permite.
- Obras organizadas con título antes de la fotografía, descripción y ubicación debajo,
  y acceso de 44 × 44 px para abrir los detalles.
- Plano restringido a la apertura; línea lateral y estaciones discretas conectan las
  secciones. Se retiró el dibujo extendido detrás de los textos de las obras.
- Evidencia comparada: `output/qa/mobile-comparison-v2.jpg`, versión anterior y nueva
  juntas a igual ancho y densidad. La página pasa de 2270 a 1941 px
  a 390 CSS px, manteniendo todo el contenido.
- Capturas: `output/qa/mobile-v2.png` (página completa), `mobile-v2-opening.png`
  (apertura), `tablet-v2.png` y `desktop-after-mobile-v2.png`.
  `desktop-comparison-v2.jpg` reúne nuevamente el mockup y el escritorio actual.
- Anchos comprobados: 320, 390 y 768 CSS px, sin desbordamiento horizontal. Revisión
  visual adicional del escritorio a 1122 × 1402 CSS px.
- Se probaron apertura de Casa Patio, cierre con Escape, devolución del foco y aviso
  de contacto. Sin errores ni advertencias de consola.
- Vista aislada sin JavaScript de aplicación: `output/qa/no-js-mobile-v2.html`;
  contenido visible y detalles nativos operables.
- No se modificaron JavaScript ni las reglas globales de movimiento reducido. Se
  repitió la simulación aislada a ancho móvil: sin `has-motion`, animación `none`,
  transición 0 s y scroll `auto`. Se mantiene el límite anterior de verificación de
  la preferencia nativa del sistema.

La comparación anterior/nueva muestra una jerarquía más clara, fotografías integradas
al recorrido y menor interferencia entre plano y lectura. No quedan hallazgos P0/P1/P2
accionables en esta iteración; la preferencia final de composición queda para revisión
del usuario.

final result: passed
