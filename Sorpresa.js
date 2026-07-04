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
