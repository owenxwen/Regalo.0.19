// Carta
const regalo = document.querySelector(".regalo");
const regalos = document.querySelector(".regalos");
const modalCarta = document.getElementById("modalCarta");
const sonidoRegalo = new Audio("recursos/regalo.mp3");
const cancion2 = new Audio("recursos/cancion2.mp3");
cancion2.volume = 0.5;
cancion2.loop = true;


regalo.addEventListener("click", () => {
  modalCarta.classList.add("activo");
  const popRegalo = sonidoRegalo.cloneNode();
  popRegalo.play();
});

regalos.addEventListener("click", () => {
  modalCarta.classList.add("activo");
  const popRegalo2 = sonidoRegalo.cloneNode();
  popRegalo2.play();
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
    cancion.volume = 0.2; // 0 es silencio, 1 es volumen máximo
    cancion.play();
    overlay.classList.add("hidden");
    document.documentElement.style.overflowY = "auto";
    document.documentElement.style.maxHeight = "3000px";
  }, 1000);
});

cancion.addEventListener("ended", () => {
  cancion2.play();
});