const root = document.documentElement;
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const route = document.querySelector(".journey__progress");
let framePending = false;

// Content is visible by default. JavaScript only enhances the drawing and dialogs.
function updateRoute() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 1;
  const length = route.getTotalLength();

  route.style.strokeDasharray = String(length);
  route.style.strokeDashoffset = reducedMotion.matches ? "0" : String(length * (1 - progress));
  framePending = false;
}

function requestRouteUpdate() {
  if (!framePending) {
    window.requestAnimationFrame(updateRoute);
    framePending = true;
  }
}

function syncMotionPreference() {
  root.classList.toggle("has-motion", !reducedMotion.matches);
  requestRouteUpdate();
}

window.addEventListener("scroll", requestRouteUpdate, { passive: true });
window.addEventListener("resize", requestRouteUpdate);
reducedMotion.addEventListener("change", syncMotionPreference);
syncMotionPreference();

const dialog = document.querySelector(".project-dialog");
const dialogImage = dialog.querySelector(".project-dialog__image");
let lastTrigger = null;

const projects = {
  patio: {
    title: "Casa Patio",
    location: "01 / CANELONES, URUGUAY",
    image: "/assets/casa-patio-obra.webp",
    description: document.querySelector("#detalle-patio p").textContent,
    alt: "Patio conceptual con árbol central, hormigón, madera, grandes ventanales y jardín de gramíneas.",
  },
  sur: {
    title: "Reforma Sur",
    location: "02 / MALDONADO, URUGUAY",
    image: "/assets/reforma-sur.webp",
    description: document.querySelector("#detalle-sur p").textContent,
    alt: "Fachada conceptual de hormigón y vidrio abierta a un jardín de gramíneas al atardecer.",
  },
};

if (typeof dialog.showModal === "function") {
  root.classList.add("has-dialog");

  document.querySelectorAll("[data-project]").forEach((link) => {
    link.addEventListener("click", (event) => {
      // Preserve the browser's open-in-new-tab and modifier-key behavior.
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;

      event.preventDefault();
      const project = projects[link.dataset.project];
      lastTrigger = link;
      dialogImage.src = project.image;
      dialogImage.alt = project.alt;
      document.querySelector("#dialog-title").textContent = project.title;
      document.querySelector("#dialog-location").textContent = project.location;
      document.querySelector("#dialog-description").textContent = project.description;
      dialog.showModal();
    });
  });

  dialog.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    const bounds = dialog.getBoundingClientRect();
    const outside =
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom;
    if (event.target === dialog && outside) dialog.close();
  });
  dialog.addEventListener("close", () => lastTrigger?.focus({ preventScroll: true }));
}

// Native anchor navigation also exposes this explanation without JavaScript.
document.querySelector("[data-contact]").addEventListener("click", () => {
  const note = document.querySelector("#contacto-demo");
  note.classList.add("is-visible");
  note.focus({ preventScroll: true });
  requestRouteUpdate();
});

// Support direct links to project details while keeping the initial layout clean.
function revealLinkedProject() {
  const projectId = window.location.hash.slice(1);
  if (projectId === "detalle-patio" || projectId === "detalle-sur") {
    const details = document.getElementById(projectId);
    details.parentElement.style.display = "block";
    details.open = true;
    details.scrollIntoView();
  }
}

window.addEventListener("hashchange", revealLinkedProject);
revealLinkedProject();
