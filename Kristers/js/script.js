const canvas = document.getElementById("spele");
const ctx = canvas.getContext("2d");

const sp_laukums = new Image();
sp_laukums.src = "img/ground.png";

const sp_mango = new Image();
sp_mango.src = "img/mango.png";

function zimetSpeli() {
  ctx.drawImage(sp_laukums, 0, 0);
  ctx.drawImage(sp_mango, 203, 203);
}

let spele = setInterval(zimetSpeli, 100);
