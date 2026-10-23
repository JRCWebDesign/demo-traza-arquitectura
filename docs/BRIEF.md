# Brief visual y de interacción

## Idea central

Navegar la web debe sentirse como recorrer un plano: descubrir ambientes, detenerse en las obras y llegar a una conversación con el arquitecto. La precisión técnica se combina con la calidez de espacios habitables.

## Público y resultado

Demo destinada a presentar la propuesta a arquitectos independientes. Para quien visita la web del arquitecto, el objetivo es conocer sus obras y su enfoque y poder consultar por un proyecto.

## Referencia principal

Ver ../referencias/mockup-traza.png. Nombre conceptual: TRAZA / arquitectura. Mantener el carácter visual del mockup y adaptar su composición a cada tamaño de pantalla.

## Sistema visual

- Base grafito casi negro; marfil para texto y dibujo; terracota para el recorrido y los acentos. Ajustar los colores finales verificando contraste.
- Fotografías arquitectónicas cálidas: hormigón, ladrillo, madera, patios y vegetación. Escala residencial cercana al contexto uruguayo.
- Tipografía sans de gran presencia en la apertura, serif editorial en títulos secundarios y anotaciones técnicas discretas. Elegir un sistema contenido y coherente.
- Líneas de muros, aperturas de puertas, cotas y números de ambientes con jerarquía: nunca deben competir con el texto.
- Fotografías rectangulares integradas a los ambientes del plano; composición asimétrica y espacios generosos.
- Sin indicadores comerciales falsos, exceso de tarjetas ni adornos ajenos a la arquitectura.

## Estructura de la página

1. Cabecera: marca TRAZA / arquitectura y enlaces Obras, Mirada, Contacto.
2. Apertura: “Espacios para habitar.”; “Arquitectura que empieza por escucharte.”; acción “Recorrer proyectos”. Fotografía protagonista conectada al plano. Primera estación: “01 — EL UMBRAL”.
3. Obras: “Cada proyecto, una forma de vivir.” Dos o tres proyectos conceptuales. Casa Patio y Reforma Sur como contenido inicial. Cada obra muestra fotografía, descripción breve y ubicación conceptual; galería accesible si se implementa su apertura.
4. Mirada: “Una mirada cercana. Una arquitectura propia.” Texto breve sobre escuchar, contexto, luz y materiales. Presentación personal sin credenciales inventadas.
5. Contacto: “Conversemos sobre tu proyecto”. Enlace o formulario únicamente cuando haya un destino real configurado; mientras tanto identificar claramente el estado de demo.
6. Pie: “Estudio conceptual · Proyectos e imágenes de demostración”.

## Coreografía de animación

### Entrada

En aproximadamente 0,8 a 1,2 segundos se revelan algunas líneas principales del plano y aparece suavemente la fotografía. El título y la acción deben estar disponibles de inmediato. Sin loader obligatorio.

### Recorrido al bajar

Una línea terracota continua se dibuja en función del avance real del scroll. Sigue los pasillos y conecta estaciones numeradas. La línea no debe atravesar textos ni tapar fotografías importantes. Cada estación acompaña la aparición suave del proyecto correspondiente.

### Obras

Al entrar en pantalla: transición discreta de opacidad y desplazamiento de unos pocos píxeles. Al pasar el cursor: destacar el contorno y acercar apenas la imagen, sin modificar el layout. Ofrecer un estado equivalente al foco de teclado. En pantallas táctiles no depender del hover.

### Cierre

La línea llega a la última estación junto al contacto. Sin pulsos constantes ni animaciones que distraigan de la acción.

### Límites técnicos

Mantener scroll nativo, sin secuestro de rueda ni cámara que obligue a recorrer la página. Preferir transform y opacity para transiciones. El dibujo del plano y su recorrido pueden implementarse como SVG vectorial a partir de geometría coherente. Evitar librerías pesadas si CSS y APIs del navegador alcanzan.

## Responsive y accesibilidad

En móvil usar una columna con un recorrido simplificado por un lateral, fotografías amplias y anotaciones reducidas. No encoger todo el plano de escritorio. Respetar prefers-reduced-motion: mostrar el recorrido estático y retirar desplazamientos y zoom. Contraste suficiente, texto seleccionable, etiquetas y alternativas para imágenes, foco visible y navegación por teclado.

## Criterio de éxito

La relación entre plano, fotografías y recorrido debe reconocerse desde la primera pantalla. Las obras deben entenderse sin animación. El contacto debe encontrarse fácilmente. El resultado debe sentirse propio de un arquitecto y mantener la fuerza visual del mockup.
