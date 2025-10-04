const canvas = document.getElementById("spele");
const ctx = canvas.getContext("2d");

const sp_laukums = new Image();
sp_laukums.src = "img/ground.png";

function zimetSpeli() {
    ctx.drawImage(sp_laukums, 0, 0);
}

let spele = setInterval(zimetSpeli, 100);