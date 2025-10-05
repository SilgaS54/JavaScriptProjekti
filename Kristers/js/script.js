const canvas = document.getElementById("spele");
const ctx = canvas.getContext("2d");

const sp_laukums = new Image();
sp_laukums.src = "img/ground.png";

const sp_mango = new Image();
sp_mango.src = "img/mango.png";

let rut_izm = 32; //rūtiņas izmērs spēles laukumā

let ediens = {
  x: 9 * rut_izm,
  y: 10 * rut_izm,
};

let cuska = []; // definējām MASĪVU čūska, kurš ir tukšs
cuska[0] = {
  // definējām masīva čūska pirmo elementu, kuram kārta numurs ir 0!
  x: 6 * rut_izm,
  y: 7 * rut_izm,
};

document.addEventListener("keydown", virziens);

let virz;

function virziens(event) {
  console.log(event.keyCode);
  if (event.keyCode == 38) virz = "up";
  if (event.keyCode == 40) virz = "down";
  if (event.keyCode == 37) virz = "left";
  if (event.keyCode == 39) virz = "right";
  if (event.keyCode == 32) virz = "stop";
}

function zimetSpeli() {
  ctx.drawImage(sp_laukums, 0, 0); //spēles laukums
  ctx.drawImage(sp_mango, ediens.x, ediens.y); //ēdiens

  for (let i = 0; i < cuska.length; i++) {
    ctx.fillStyle = "red"; //čūskas krāsa
    ctx.fillRect(cuska[i].x, cuska[i].y, rut_izm, rut_izm); //čūska
  }

  let cuskaX = cuska[0].x;
  let cuskaY = cuska[0].y;

  cuska.pop();

  if (virz == "right") cuskaX += rut_izm; // tas pats ka cuskaX = cuskaX + rut_izm
  if (virz == "left") cuskaX -= rut_izm;
  if (virz == "up") cuskaY -= rut_izm;
  if (virz == "down") cuskaY += rut_izm;
  if (virz == "space") cuskaY == rut_izm;

  let jaunaCuskasGalva = {
    x: cuskaX,
    y: cuskaY,
  };

  cuska.unshift(jaunaCuskasGalva);
}

let spele = setInterval(zimetSpeli, 100);
