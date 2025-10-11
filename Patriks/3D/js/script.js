var map = [
    [0, 0, 0, 0, 0, 0, 200, 200, "red", 0.5], //x, y, z, rx, ry, rz, width, height, color, opacity
    [0, 0, -200, 0, 0, 0, 200, 200, "black", 0.5],
    [-100, 0, -100, 0, 90, 0, 200, 200, "orange", 0.5],
    [100, 0, -100, 0, 90, 0, 200, 200, "yellow", 0.5],
    [0, 100, -100, 90, 0, 0, 200, 200, "blue", 0.5],
    [0, -100, -100, 90, 0, 0, 200, 200, "violet", 0.5]
];

var atrums = 5;
var pressForward = 0;
var pressBack = 0;
var zCoord = 0;

document.addEventListener("keydown", (event) => {
    if(event.key == "w") pressForward = atrums;
    if(event.key == "s") pressBack = atrums;
})

document.addEventListener("keyup", (event) => {
    if(event.key == "w") pressForward = 0;
    if(event.key == "s") pressBack = 0;
})

var world = document.getElementById("world");

function update(){ // mūsu 3D pasaules izmaiņas
    let dz = pressForward - pressBack;
    zCoord += dz;
    world.style.transform = `translate3d(0px, 0px, ${zCoord}px)`;
    // world.style.transform = `translateZ(600 - 0) rotateX(0deg) rotateY(0deg) rotateZ(0deg) translate3d(0px, 0px, 0px)`;
}

function createWorld() { // 3D pasaules izveide
    for(let i = 0; i < map.length; i++){
        let jaunaSiena = document.createElement("div");
        jaunaSiena.className = "square";
        jaunaSiena.id = `square${i}`;
        jaunaSiena.style.width = `${map[i][6]}px`;
        jaunaSiena.style.height = `${map[i][7]}px`;
        jaunaSiena.style.backgroundColor = map[i][8];
        jaunaSiena.style.opacity = map[i][9];
        jaunaSiena.style.transform = `translate3d(${600 + map[i][0] - map[i][6]/2}px, ${400 + map[i][1] - map[i][7]/2}px, ${map[i][2]}px) rotateX(${map[i][3]}deg) rotateY(${map[i][4]}deg) rotateZ(${map[i][5]}deg)`;
        world.append(jaunaSiena);
    }
}

createWorld();
timerGame = setInterval(update, 10); //atjaunināšanas ātrums ir 10, to var iestatīt citu...