# Organigrama interactivo — GoodApps SAS

Mapa organizacional **interactivo, editable y autónomo**. Funciona como un único `index.html` + un archivo de
datos de **texto plano** (`org-data.js`). Sin backend, sin build y **sin base de datos relacional**: se publica
tal cual en GitHub Pages.

![vista](project-preview) <!-- opcional: reemplazá por un screenshot propio -->

## Qué hace

- **Mapa mental jerárquico** (izquierda → derecha) con conectores curvos, **zoom**, **paneo** y **expandir/colapsar** ramas.
- **Nodos clickeables**: abren una ficha lateral con misión, responsabilidades, KPIs, línea de reporte, líneas
  punteadas (matricial), plan de sucesión, fechas, ubicación y modalidad.
- **Buscador** + **filtros** (área, sede, estado, seniority) y **5 vistas**: Jerárquica · Por función · Por sede ·
  Vacantes · Críticos.
- **Métricas de salud** (headcount, roles, capas, span, managers, % vacantes), **leyenda** de estados y **alertas
  visuales** (span alto, rol crítico sin sucesor, revisión vencida).
- **Diagnóstico organizacional** ("honestidad brutal") con hallazgos por severidad, riesgo y recomendación.
- **Modo edición** 👇 para administrar todo desde el navegador.
- **Imprimir / PDF** (botón ⎙), responsive (desktop y celular, con paneo táctil y pinch-zoom).

## Modo edición (agregar/quitar roles y colaboradores, modificar textos)

Tocá **✎ Editar** en la barra superior. Con el modo edición activo:

- **➕ Agregar rol**: botón flotante abajo a la derecha. Elegís el superior (Reporta a), el área y todos los campos.
- **Editar un rol**: clic en cualquier nodo → la ficha se abre en modo formulario. Editás **todos los textos**
  (título, colaborador, misión, responsabilidades, KPIs, fechas, etc.).
- **Asignar / quitar colaborador**: cambiá el campo *Colaborador (nombre)*; el botón **○ Marcar vacante** deja el
  puesto como `Vacante`.
- **Eliminar rol**: 🗑 en la ficha. Sus reportes directos pasan a depender del superior del rol eliminado.
- **⚙ Organización**: editás el nombre de la empresa, el subtítulo, las **áreas** (alta/baja/color) y las **sedes**
  (agregar/eliminar; **renombrar una sede actualiza todos los roles** que la usan), y ves el **historial de cambios**.

### Cómo se guardan los cambios

1. Mientras editás, **todo se autoguarda en este navegador** (`localStorage`). Si recargás, tus cambios siguen ahí
   y aparece el aviso *"Cambios locales sin exportar"*.
2. Para **publicarlos**, tocá **⬇ Exportar `org-data.js`** (en la barra superior o en ⚙ Organización). Se descarga el
   archivo de datos actualizado.
3. **Reemplazá `org-data.js`** de este repo por el archivo descargado y hacé **commit + push**. GitHub Pages mostrará
   los cambios para todos.

> No hay servidor: la web por sí sola no puede escribir en el repo (GitHub Pages es estático). El flujo es
> **editar → exportar → commitear**. Es el modelo más simple, sin tokens ni secretos.

También podés **⬆ Importar** un `org-data.js`/`.json` para retomar el trabajo, **⧉ Copiar** el contenido, o
**↩ Descartar cambios locales** para volver al archivo del repo.

## Editar a mano (sin la web)

`org-data.js` es texto plano y se edita directo en GitHub. Reemplazá los nombres `"(a completar)"` por los reales y
ajustá el `status` de cada puesto. No hace falta tocar código.

`status` admitidos: `Ocupado` · `Vacante` · `En búsqueda` · `Onboarding` · `Licencia` · `Interino`.

Las **sedes** disponibles se listan en `sedes: [...]`; el `location` de cada rol debería coincidir con una de ellas
(si escribís una sede nueva desde la web, se agrega sola a la lista).

Cada nodo (rol) tiene esta forma:

```js
{
  id: "tec-cto",                 // identificador único (no repetir)
  title: "CTO",                  // puesto
  name: "(a completar)",         // colaborador
  area: "tecnologia",            // clave de un área definida en "areas"
  reportsTo: "dir-ceo",          // id del jefe directo (null si es la raíz)
  dotted: ["sec-ciso"],          // ids de reportes matriciales (líneas punteadas)
  seniority: "C-Level", band: "E1",
  critical: true, successor: "tec-arch",
  status: "Ocupado",
  location: "Buenos Aires", modality: "Híbrido", contract: "Full-time",
  ingreso: "—", lastReview: "2026-01-20", nextReview: "2026-07-20", headcount: 1,
  mission: "…",
  responsibilities: ["…", "…"],
  kpis: ["…"],
  authority: "Alta", careerNext: "VP Engineering", skillsGap: "—"
}
```

## Correr en local

Abrí `index.html` con doble clic — funciona sin servidor (los datos se cargan vía `<script src="org-data.js">`).
Si tu navegador bloqueara algo, podés servirlo: `python -m http.server` y entrar a `http://localhost:8000`.

## Publicar en GitHub Pages

1. Creá un repo nuevo en GitHub y subí estos archivos (`index.html`, `org-data.js`, `.nojekyll`, `README.md`):
   ```bash
   git remote add origin https://github.com/<usuario>/<repo>.git
   git push -u origin main
   ```
2. En GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, rama `main`, carpeta
   `/ (root)`. Guardá.
3. En 1–2 minutos queda publicado en `https://<usuario>.github.io/<repo>/`.

El archivo `.nojekyll` evita que GitHub procese el sitio con Jekyll (lo sirve tal cual).

## Estructura

```
organigrama-goodapps/
├─ index.html      # la app (HTML + CSS + JS, sin dependencias ni build)
├─ org-data.js     # base de datos en texto plano (editable / commiteable)
├─ .nojekyll       # publicar tal cual en GitHub Pages
└─ README.md
```

## Notas de diseño

Reimplementación fiel del prototipo de Claude Design (proyecto *GoodApps mapa mental organizacional*). Marca
`#0F3E57` + `#65EAA4`; tipografías Space Grotesk / IBM Plex Sans / IBM Plex Mono. Toda la lógica clínica/organizacional
(layout, métricas, diagnóstico) corre en el cliente.
