var map = [
    [0, 0, 0, 0, 0, 0, 200, 200, "red", 0.5] //x, y, z, rx, ry, rz, width, height, color, opacity
];

var world = document.getElementById("world");

function update(){ // mūsu 3D pasaules izmaiņas

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
        world.append(jaunaSiena);
    }
}

createWorld();
timerGame = setInterval(update, 10); //atjaunināšanas ātrums ir 10, to var iestatīt citu...