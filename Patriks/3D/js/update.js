var dx = dy = dz = 0;

function update() { // mūsu 3D pasaules izmaiņas
    //let dx = pressLeft - pressRight;
    dx = -(pressLeft - pressRight) * Math.cos(pawn.ry * deg) + (pressForward - pressBack) * Math.sin(pawn.ry * deg);
    //let dz = pressForward - pressBack;
    dz = -(pressLeft - pressRight) * Math.sin(pawn.ry * deg) - (pressForward - pressBack) * Math.cos(pawn.ry * deg);
    dy += g;
    if (onGround) {
        dy = 0;
        if (pressUp) {
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

    if (lock) {
        pawn.rx += drx;
        pawn.ry += dry;
        if (pawn.rx > 57) pawn.rx = 57;   // augšā
        if (pawn.rx < -57) pawn.rx = -57; // lejā
    }

    lode.style.transform = `translate3d(${600 + lode_x - 20 / 2}px, ${400 + lode_y - 20 / 2}px, ${lode_z}px) rotateX(${lode_rx}deg) rotateY(${lode_ry}deg) rotateZ(${0}deg)`;

    lode_dx = -lode_atrums_x * Math.cos(lode_ry * deg) + (lode_atrums_y) * Math.sin(lode_ry * deg);
    lode_dz = -(lode_atrums_x) * Math.sin(lode_ry * deg) - (lode_atrums_y) * Math.cos(lode_ry * deg);
    // console.log(`dx = ${dx}, dz = ${dz}, lode_ry = ${lode_ry}, dry = ${dry}`);

    lode_x += lode_dx;
    lode_z += lode_dz;

    lode_move -= 1;
    if (lode_move < 0) {
        lode.style.display = "none";
    }

    world.style.transform = `translateZ(${600 - 0}px) rotateX(${pawn.rx}deg) rotateY(${pawn.ry}deg) translate3d(${-pawn.x}px, ${-pawn.y}px, ${-pawn.z}px)`;
    rotate(spelesElementi[level][1], 0.5);
    interact(spelesElementi[level][1]);
    interactLode(spelesElementi[level][1]);
    interactTeleport(spelesElementi[level][2], spelesElementi[level][1]);
    // move(objekti[0], 0.1, -0.1, 0.1);
}