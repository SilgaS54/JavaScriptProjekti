const canvas = document.getElementById("spele");
const ctx = canvas.getContext("2d");

const sp_laukums = new Image();
sp_laukums.src = "img/ground.png";

const sp_mango = new Image();
sp_mango.src = "img/mango.png";

let rut_izm = 32; //rūtiņas izmērs spēles laukumā

let punkti = 0;

let ediens = {
    x: Math.floor(Math.random()*17+1)*rut_izm,// x = no 1 līdz 17 ieskaitot
    y: Math.floor(Math.random()*15+3)*rut_izm // y = no 3 līdz 17 ieskaitot
}

let cuska = []; // definējām MASĪVU čūska, kurš ir tukšs
cuska[0] = { // definējām masīva čūska pirmo elementu, kuram kārta numurs ir 0!
    x: 6*rut_izm,
    y: 7*rut_izm
}

document.addEventListener("keydown", virziens);

let virz;

function virziens(event){
    //  A UN B (JavaScript sintakse: A && B)- izpildās gan A, gan B vienlaicīgi
    //  A VAI B (JavaScript sintakse: A || B) - izpildās vismaz viens no A, B nosacījumiem
    if(event.keyCode == 38 && virz != "down") virz = "up"; // != nozīmē NAV VIENĀDS
    if(event.keyCode == 40 && virz != "up") virz = "down";
    if(event.keyCode == 37 && virz != "right") virz = "left";
    if(event.keyCode == 39 && virz != "left") virz = "right";
    if(event.keyCode == 32) virz = "stop";
}


function zimetSpeli() {
    ctx.drawImage(sp_laukums, 0, 0); //spēles laukums
    ctx.drawImage(sp_mango, ediens.x, ediens.y); //ēdiens

    for(let i = 0; i < cuska.length; i++){
        ctx.fillStyle = "red"; //čūskas krāsa
        ctx.fillRect(cuska[i].x, cuska[i].y, rut_izm, rut_izm); //čūska
    }

    ctx.fillStyle = "white";
    ctx.font = "50px Arial";
    ctx.fillText(punkti, 2.5*rut_izm, 1.7*rut_izm);

    //čūskas galvas koordinātes
    let cuskaX = cuska[0].x;
    let cuskaY = cuska[0].y;

    if(cuskaX == ediens.x && cuskaY == ediens.y) {
        punkti++;
        ediens = {
            x: Math.floor(Math.random()*17+1)*rut_izm,// x = no 1 līdz 17 ieskaitot
            y: Math.floor(Math.random()*15+3)*rut_izm // y = no 3 līdz 17 ieskaitot
        };
    }

    cuska.pop();

    if(virz == "right") cuskaX += rut_izm; // tas pats ka cuskaX = cuskaX + rut_izm
    if(virz == "left") cuskaX -= rut_izm;
    if(virz == "up") cuskaY -= rut_izm;
    if(virz == "down") cuskaY += rut_izm;

    let jaunaCuskasGalva = {
        x: cuskaX,
        y: cuskaY
    }
    
    cuska.unshift(jaunaCuskasGalva);
}

let spele = setInterval(zimetSpeli, 100);