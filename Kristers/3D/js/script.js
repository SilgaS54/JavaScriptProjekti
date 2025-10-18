//2pi RAD IR 360 DEG
// 1 DEG radiānos ir 2PI/360 jeb PI/180
var deg = Math.PI / 180;

class player {
  constructor(x, y, z, rx, ry) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.rx = rx;
    this.ry = ry;
  }
}

var map = [
  [0, 100, 0, 90, 0, 0, 2000, 2000, "url(textures/grass.jpg)", 1], //grīda
  //x, y, z, rx, ry, rz, width, height, color, opacity
  [0, 0, -1000, 0, 0, 0, 2000, 200, "url(textures/wall00.jpg)", 1], // siena priekšā
  [0, 0, 1000, 0, 0, 0, 2000, 200, "url(textures/wall01.jpg)", 1], // siena aizmugurē
  [1000, 0, 0, 0, 90, 0, 2000, 200, "url(textures/wall02.jpg)", 1], // siena labā pusē
  [-1000, 0, 0, 0, 90, 0, 2000, 200, "url(textures/wall03.jpg)", 1], // siena kreisā pusē

  //siena 2
  [500, 0, 710, 0, 0, 0, 1000, 200, "url(textures/ieks_siena_1.jpg)", 1],
  [500, 0, 690, 0, 0, 0, 1000, 200, "url(textures/ieks_siena_1.jpg)", 1],
  [0, 0, 700, 0, 90, 0, 20, 200, "url(textures/ieks_siena_1.jpg)", 1],
];

var atrums = 5;
var pressForward = 0;
var pressBack = 0;
var pressLeft = 0;
var pressRight = 0;
var mouseX = 0;
var mouseY = 0;

var lock = false;

var container = document.getElementById("container");

document.addEventListener("pointerlockchange", (event) => {
  lock = !lock;
});

container.onclick = function () {
  if (!lock) {
    container.requestPointerLock();
  }
};

document.addEventListener("keydown", (event) => {
  //reģistrējam taustiņu nospiešanu
  if (event.key == "w") pressForward = atrums;
  if (event.key == "s") pressBack = atrums;
  if (event.key == "a") pressLeft = atrums;
  if (event.key == "d") pressRight = atrums;
});

document.addEventListener("keyup", (event) => {
  //reģistrējam taustiņu atspiešanu
  if (event.key == "w") pressForward = 0;
  if (event.key == "s") pressBack = 0;
  if (event.key == "a") pressLeft = 0;
  if (event.key == "d") pressRight = 0;
});

//pēles kustības apstrāde

document.addEventListener("mousemove", (event) => {
  mouseX = event.movementX;
  mouseY = event.movementY;
});

// -------------------------

var pawn = new player(900, 0, 900, 0, 0);

var world = document.getElementById("world");

function update() {
  // mūsu 3D pasaules izmaiņas
  //let dx = pressLeft - pressRight;
  let dx =
    -(pressLeft - pressRight) * Math.cos(pawn.ry * deg) +
    (pressForward - pressBack) * Math.sin(pawn.ry * deg);
  //let dz = pressForward - pressBack;
  let dz =
    -(pressLeft - pressRight) * Math.sin(pawn.ry * deg) -
    (pressForward - pressBack) * Math.cos(pawn.ry * deg);

  let drx = -mouseY;
  let dry = mouseX;

  mouseX = mouseY = 0;

  pawn.x += dx;
  pawn.z += dz;

  if (lock) {
    pawn.rx += drx;
    pawn.ry += dry;
  }

  world.style.transform = `translateZ(${600 - 0}px) rotateX(${
    pawn.rx
  }deg) rotateY(${pawn.ry}deg) translate3d(${-pawn.x}px, 0px, ${-pawn.z}px)`;
}

function createWorld() {
  // 3D pasaules izveide
  for (let i = 0; i < map.length; i++) {
    let jaunaSiena = document.createElement("div");
    jaunaSiena.className = "square";
    jaunaSiena.id = `square${i}`;
    jaunaSiena.style.width = `${map[i][6]}px`;
    jaunaSiena.style.height = `${map[i][7]}px`;
    jaunaSiena.style.backgroundImage = map[i][8];
    jaunaSiena.style.opacity = map[i][9];
    jaunaSiena.style.transform = `translate3d(${
      600 + map[i][0] - map[i][6] / 2
    }px, ${400 + map[i][1] - map[i][7] / 2}px, ${map[i][2]}px) rotateX(${
      map[i][3]
    }deg) rotateY(${map[i][4]}deg) rotateZ(${map[i][5]}deg)`;
    world.append(jaunaSiena);
  }
}

createWorld();
timerGame = setInterval(update, 10); //atjaunināšanas ātrums ir 10, to var iestatīt citu...
