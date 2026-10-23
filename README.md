# TRAZA / arquitectura

Demo de portfolio para un arquitecto independiente, basada en el mockup de referencia.
Una sola página con composición editorial, plano vectorial y recorrido terracota ligado al scroll.

## Punto de partida

- [Brief de diseño y animación](docs/BRIEF.md)
- [Plan de trabajo](docs/PLAN.md)
- [Mockup aprobado](referencias/mockup-traza.png)
- [Instrucciones para agentes](AGENTS.md)

## Ejecutar localmente

Requiere Node.js 22 o posterior y npm.

```sh
npm install
npm run dev
```

Vite muestra la dirección local. Para utilizar el puerto de la revisión:

```sh
npm run dev -- --host 127.0.0.1 --port 4173 --strictPort
```

## Comandos

```sh
npm run build         # Genera dist/client y prepara el adaptador opcional de Sites
npm run preview       # Sirve la compilación localmente
npm run format        # Aplica formato e indentación de dos espacios
npm run format:check  # Comprueba el formato
npm run test:sites    # Verifica el adaptador de archivos estáticos
```

La preparación del adaptador no registra ni publica un sitio. Esta entrega es local.

## GitHub Pages

El workflow `.github/workflows/pages.yml` compila y publica al subir cambios a `main`.
El repositorio previsto es `jessicacasella/demo-traza-arquitectura`. En GitHub, configurar
Settings → Pages → Source → GitHub Actions antes del primer despliegue.

```sh
npm run build:pages
```

La compilación usa `/demo-traza-arquitectura/` como ruta base, incluidas las imágenes de
los diálogos. Se publica exclusivamente `dist/client`, sin originales ni documentación.
Si cambia el nombre del repositorio, actualizar la ruta base de `build:pages`.
La publicación remota requiere autorizar la cuenta de GitHub correspondiente.

## Estructura y decisiones

- `index.html`: contenido semántico completo, enlaces por anclas y detalles nativos.
- `src/styles.css`: colores, tipografía, composición y adaptación responsive.
- `src/mobile.css`: composición específica hasta 860 px, separada del escritorio.
- `src/main.js`: recorrido progresivo, diálogos de proyecto y contacto de demo.
- `public/assets/plano.svg`: planta esquemática original y editable; cotas decorativas.
- `public/assets/`: fotografías WebP y respaldos JPEG, sin solicitudes externas.
- `referencias/generadas/`: originales PNG, fuera del paquete público.
- `.editorconfig` y `.prettierrc.json`: UTF-8, dos espacios, finales LF y formato consistente.
- `design-qa.md`: comparación visual, verificaciones y límites de la revisión.

Se usa HTML, CSS y JavaScript nativos. Vite se utiliza únicamente para desarrollo y
compilación. Arial y Georgia evitan descargas de fuentes y mantienen la jerarquía sans/serif
de la referencia. No hay framework de interfaz, CMS, backend ni autenticación.

En escritorio se conserva la composición asimétrica. Hasta 860 px se reorganiza en una
columna editorial: título, fotografía de apertura con acción integrada y obras con su
nombre antes de cada fotografía. El plano se concentra en la apertura y un recorrido
lateral estático conecta las secciones. El scroll es nativo. El movimiento reducido
retira transiciones y zoom y muestra el recorrido completo. Texto y fotografías están
disponibles sin esperar a una animación.

Los proyectos abren un diálogo nativo con Escape, foco inicial, contención de foco y
devolución al enlace de origen. Sin JavaScript se utilizan anclas y elementos `details`.
El contacto explica el estado de demo, sin simular un envío.

## Recursos visuales

Las tres fotografías se generaron con ImageGen integrado usando el mockup como dirección
visual. Son conceptuales y no documentan obras construidas. Sus prompts y procedencia
están en [docs/ASSETS.md](docs/ASSETS.md).

## Datos pendientes

- Nombre, presentación y marca definitiva del profesional.
- Obras reales, textos, ubicaciones y fotografías autorizadas.
- Correo o destino real para consultas.
- Dominio y destino de publicación cuando se solicite.

TRAZA es una identidad ficticia. Los proyectos y las imágenes son conceptuales y deben identificarse como demostración.
