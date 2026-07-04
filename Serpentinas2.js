// Serpentinas Atras

window.oncontextmenu = function () {
  return false;
};

window.addEventListener("resize", () => {
  ancho6 = canvasSerpentinas2.width = window.innerWidth;
  alto6 = canvasSerpentinas2.height = document.body.scrollHeight;
});

const canvasSerpentinas2 = document.getElementById("canvas6");
const ctxSerpentinas2 = canvasSerpentinas2.getContext("2d");

let ancho6 = (canvasSerpentinas2.width = window.innerWidth);
let alto6 = (canvasSerpentinas2.height = document.body.scrollHeight);

let serpentinas2 = [];

const coloresSerpentinas2 = [
  "rgba(255, 179, 71, 1)",
  "rgba(240, 140, 60, 1)",
  "rgba(200, 230, 180, 1)",
  "rgba(150, 200, 130, 1)",
  "rgba(255, 210, 140, 1)",
  "rgba(220, 245, 210, 1)",
  "rgba(255, 255, 255, 1)",
];

function crearSerpentinas2() {
  const cantidad = 60;
  for (let i = 0; i < cantidad; i++) {
    serpentinas2.push({
      x: Math.random() * ancho6,
      y: Math.random() * -alto6,
      ancho: Math.random() * 6 + 3,
      largo: Math.random() * 15 + 10,
      color: coloresSerpentinas2[Math.floor(Math.random() * coloresSerpentinas2.length)],
      velocidadY: Math.random() * 2 + 1,
      velocidadX: (Math.random() - 0.5) * 1.5,
      rotacion: Math.random() * Math.PI * 2,
      velocidadRotacion: (Math.random() - 0.5) * 0.15,
    });
  }
}

function animarSerpentinas2() {
  ctxSerpentinas2.clearRect(0, 0, ancho6, alto6);

  for (let i = 0; i < serpentinas2.length; i++) {
    let s = serpentinas2[i];

    ctxSerpentinas2.save();
    ctxSerpentinas2.translate(s.x, s.y);
    ctxSerpentinas2.rotate(s.rotacion);
    ctxSerpentinas2.fillStyle = s.color;
    ctxSerpentinas2.fillRect(-s.ancho / 2, -s.largo / 2, s.ancho, s.largo);
    ctxSerpentinas2.restore();

    s.y += s.velocidadY;
    s.x += s.velocidadX;
    s.rotacion += s.velocidadRotacion;

    if (s.y > alto6) {
      s.y = -s.largo;
      s.x = Math.random() * ancho6;
    }
  }

  requestAnimationFrame(animarSerpentinas2);
}

crearSerpentinas2();
setTimeout(() => {
  animarSerpentinas2();
}, 1500);