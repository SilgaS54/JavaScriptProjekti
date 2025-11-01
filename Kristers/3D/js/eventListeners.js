var pressForward = 0;
var pressBack = 0;
var pressLeft = 0;
var pressRight = 0;
var pressUp = 0;
var mouseX = 0;
var mouseY = 0;

document.addEventListener("keydown", (event) => { //reģistrējam taustiņu nospiešanu
    if(event.key == "w") pressForward = pawn.vz;
    if(event.key == "s") pressBack = pawn.vz;
    if(event.key == "a") pressLeft = pawn.vx;
    if(event.key == "d") pressRight = pawn.vx;
    if(event.keyCode == 32) pressUp = pawn.vy;
    soluSkana.play();
})

document.addEventListener("keyup", (event) => { //reģistrējam taustiņu atspiešanu
    if(event.key == "w") pressForward = 0;
    if(event.key == "s") pressBack = 0;
    if(event.key == "a") pressLeft = 0;
    if(event.key == "d") pressRight = 0;
    if(event.keyCode == 32) pressUp = 0;
    soluSkana.pause();
})

//pēles kustības apstrāde

document.addEventListener("mousemove", (event) => {
    mouseX = event.movementX;
    mouseY = event.movementY;
})