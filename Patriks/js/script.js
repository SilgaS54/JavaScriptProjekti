const canvas = document.getElementById("spele");
const ctx = canvas.getContext("2d");

const sp_laukums = new Image();
sp_laukums.src = "img/ground.png";

const sp_mango = new Image();
sp_mango.src = "img/mango.png";

let rut_izm = 32; //rūtiņas izmērs spēles laukumā

let ediens = {
    x: 9*rut_izm,
    y: 10*rut_izm
}

let cuska = {
    x: 6*rut_izm,
    y: 7*rut_izm
}

function zimetSpeli() {
    ctx.drawImage(sp_laukums, 0, 0); //spēles laukums
    ctx.drawImage(sp_mango, ediens.x, ediens.y); //ēdiens

    ctx.fillStyle = "red"; //čūskas krāsa
    ctx.fillRect(cuska.x, cuska.y, rut_izm, rut_izm); //čūska
}

let spele = setInterval(zimetSpeli, 100);