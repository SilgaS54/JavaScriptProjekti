var dx = dy = dz = 0;

function update(){ // mūsu 3D pasaules izmaiņas
    //let dx = pressLeft - pressRight;
    dx = -(pressLeft - pressRight)*Math.cos(pawn.ry*deg) + (pressForward - pressBack)*Math.sin(pawn.ry*deg);
    //let dz = pressForward - pressBack;
    dz = -(pressLeft - pressRight)*Math.sin(pawn.ry*deg) - (pressForward - pressBack)*Math.cos(pawn.ry*deg);
    dy += g;
    if (onGround) {
        dy = 0;
        if(pressUp){
            dy = -pressUp;
            onGround = false;
        }
    }

    let drx = -mouseY;
    let dry = mouseX;

    mouseX = mouseY = 0;

    collision(spelesElementi[level][0]);

    pawn.x += dx;
    pawn.y += dy;
    pawn.z += dz;

    if(lock) {
        pawn.rx += drx;
        pawn.ry += dry;
        if(pawn.rx > 57) pawn.rx = 57;   // augšā
        if(pawn.rx < -57) pawn.rx = -57; // lejā
    }
    
    world.style.transform = `translateZ(${600 - 0}px) rotateX(${pawn.rx}deg) rotateY(${pawn.ry}deg) translate3d(${-pawn.x}px, ${-pawn.y}px, ${-pawn.z}px)`;
 
    rotate(spelesElementi[level][1], 0.5);
    interact(spelesElementi[level][1]);
    interactTeleport(spelesElementi[level][2], spelesElementi[level][1]);
}