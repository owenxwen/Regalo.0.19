// Serpentinas

window.oncontextmenu = function () {
  return false;
};

window.addEventListener("resize", () => {
  ancho5 = canvasSerpentinas.width = window.innerWidth;
  alto5 = canvasSerpentinas.height = document.body.scrollHeight;
});

const canvasSerpentinas = document.getElementById("canvas5");
const ctxSerpentinas = canvasSerpentinas.getContext("2d");

let ancho5 = (canvasSerpentinas.width = window.innerWidth);
let alto5 = (canvasSerpentinas.height = document.body.scrollHeight);

let serpentinas = [];

const coloresSerpentinas = [
  "rgba(255, 179, 71, 1)",
  "rgba(240, 140, 60, 1)",
  "rgba(200, 230, 180, 1)",
  "rgba(150, 200, 130, 1)",
  "rgba(255, 210, 140, 1)",
  "rgba(220, 245, 210, 1)",
  "rgba(255, 255, 255, 1)",
];

function crearSerpentinas() {
  const cantidad = 60;
  for (let i = 0; i < cantidad; i++) {
    serpentinas.push({
      x: Math.random() * ancho5,
      y: Math.random() * -alto5,
      ancho: Math.random() * 6 + 3,
      largo: Math.random() * 15 + 10,
      color: coloresSerpentinas[Math.floor(Math.random() * coloresSerpentinas.length)],
      velocidadY: Math.random() * 2 + 1,
      velocidadX: (Math.random() - 0.5) * 1.5,
      rotacion: Math.random() * Math.PI * 2,
      velocidadRotacion: (Math.random() - 0.5) * 0.15,
    });
  }
}

function animarSerpentinas() {
  ctxSerpentinas.clearRect(0, 0, ancho5, alto5);

  for (let i = 0; i < serpentinas.length; i++) {
    let s = serpentinas[i];

    ctxSerpentinas.save();
    ctxSerpentinas.translate(s.x, s.y);
    ctxSerpentinas.rotate(s.rotacion);
    ctxSerpentinas.fillStyle = s.color;
    ctxSerpentinas.fillRect(-s.ancho / 2, -s.largo / 2, s.ancho, s.largo);
    ctxSerpentinas.restore();

    s.y += s.velocidadY;
    s.x += s.velocidadX;
    s.rotacion += s.velocidadRotacion;

    if (s.y > alto5) {
      s.y = -s.largo;
      s.x = Math.random() * ancho5;
    }
  }

  requestAnimationFrame(animarSerpentinas);
}

crearSerpentinas();
setTimeout(() => {
  animarSerpentinas();
}, 1500);