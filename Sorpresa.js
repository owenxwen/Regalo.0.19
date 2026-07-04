// Carta
const regalo = document.querySelector(".regalo");
const regalos = document.querySelector(".regalos");
const modalCarta = document.getElementById("modalCarta");

regalo.addEventListener("click", () => {
  modalCarta.classList.add("activo");
});

regalos.addEventListener("click", () => {
  modalCarta.classList.add("activo");
});

modalCarta.addEventListener("click", () => {
  modalCarta.classList.remove("activo");
});

// Todo Oscuro + Soplido + Canción
const overlay = document.querySelector(".overlay");
const soplido = document.getElementById("soplido");
const cancion = document.getElementById("cancion");
const llama = document.querySelector(".llama");
const velaOverlay = document.querySelector(".vela-overlay");

llama.addEventListener("click", () => {
  soplido.currentTime = 0;
  soplido.play();

  llama.style.animation = "apagar 0.5s forwards"; // forwards -> Ultimo frame (to)
  velaOverlay.style.animation = "apagar 0.0s forwards";

  setTimeout(() => {
    cancion.currentTime = 0;
    cancion.play();
    overlay.classList.add("hidden");
    document.documentElement.style.overflowY = "auto";
    document.documentElement.style.maxHeight = "3000px";
  }, 1000);
});

const matasuegras = document.querySelector(".matasuegras");
const matasuegrasCanvas = document.querySelector(".matasuegras-canvas");
const ctxMata = matasuegrasCanvas.getContext("2d");

let extendido = false;
let progreso = 0;
let animandoMata = false;

const coloresMata = ["#ffb347", "#a8d5a2", "#ff9d3d", "#ffdd00", "#ff6b6b"];

function dibujarMatasuegras() {
  ctxMata.clearRect(0, 0, 160, 40);

  const maxLengua = 110;
  const largoLengua = progreso * maxLengua;
  const radioRollo = 18 - progreso * 10;
  const cx = 160 - radioRollo - 2;
  const cy = 20;

  // Dibujar lengua
  if (largoLengua > 0) {
    for (let i = 0; i < largoLengua; i += 8) {
      ctxMata.fillStyle = coloresMata[Math.floor(i / 8) % coloresMata.length];
      ctxMata.fillRect(i, cy - 5, 8, 10);
    }
    // Punta
    ctxMata.beginPath();
    ctxMata.moveTo(largoLengua, cy - 7);
    ctxMata.lineTo(largoLengua, cy + 7);
    ctxMata.lineTo(largoLengua + 12, cy);
    ctxMata.fillStyle = coloresMata[0];
    ctxMata.fill();
  }

  // Dibujar rollo
  for (let i = 3; i >= 0; i--) {
    const r = radioRollo - i * 3;
    if (r <= 0) continue;
    ctxMata.beginPath();
    ctxMata.arc(cx, cy, r, 0, Math.PI * 2);
    ctxMata.fillStyle = coloresMata[i % coloresMata.length];
    ctxMata.fill();
  }

  // Puntitos decorativos en el rollo
  if (radioRollo > 6) {
    ctxMata.beginPath();
    ctxMata.arc(cx - 4, cy - 4, 2, 0, Math.PI * 2);
    ctxMata.fillStyle = "#fff";
    ctxMata.fill();
    ctxMata.beginPath();
    ctxMata.arc(cx + 3, cy + 3, 2, 0, Math.PI * 2);
    ctxMata.fillStyle = "#ffdd00";
    ctxMata.fill();
  }
}

function animarMata(objetivo) {
  if (animandoMata) return;
  animandoMata = true;

  const velocidad = 0.05;

  function paso() {
    if (objetivo && progreso < 1) {
      progreso = Math.min(1, progreso + velocidad);
      dibujarMatasuegras();
      requestAnimationFrame(paso);
    } else if (!objetivo && progreso > 0) {
      progreso = Math.max(0, progreso - velocidad);
      dibujarMatasuegras();
      requestAnimationFrame(paso);
    } else {
      animandoMata = false;
    }
  }

  paso();
}

dibujarMatasuegras();

matasuegras.addEventListener("click", () => {
  extendido = !extendido;
  animarMata(extendido);
});