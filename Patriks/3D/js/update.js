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

    let drx = -mouseY / 4;
    let dry = mouseX / 4;

    mouseX = mouseY = 0;

    collision(spelesElementi[level][0], pawn);

    // collision(spelesElementi[level][0], pirmaLode, "lode")

    pawn.x += dx;
    pawn.y += dy;
    pawn.z += dz;

    if (lock) {
        pawn.rx += drx;
        pawn.ry += dry;
        if (pawn.rx > 57) pawn.rx = 57;   // augšā
        if (pawn.rx < -57) pawn.rx = -57; // lejā
    }

    // lode.style.transform = `translate3d(${600 + lode_x - 20 / 2}px, ${400 + lode_y - 20 / 2}px, ${lode_z}px) rotateX(${lode_rx}deg) rotateY(${lode_ry}deg) rotateZ(${0}deg)`;

    //te bija ieprieks
    // lode.style.transform = `translate3d(${600 + pirmaLode.x - 20 / 2}px, ${400 + pirmaLode.y - 20 / 2}px, ${pirmaLode.z}px) rotateX(${pirmaLode.rx}deg) rotateY(${pirmaLode.ry}deg) rotateZ(${0}deg)`;

    // lode_dx = -lode_atrums_x * Math.cos(lode_ry * deg) + (lode_atrums_y) * Math.sin(lode_ry * deg);
    lode_dx = -pirmaLode.vx * Math.cos(pirmaLode.ry * deg) + (pirmaLode.vy) * Math.sin(pirmaLode.ry * deg);
    // lode_dz = -(lode_atrums_x) * Math.sin(lode_ry * deg) - (lode_atrums_y) * Math.cos(lode_ry * deg);
    lode_dz = -(pirmaLode.vx) * Math.sin(pirmaLode.ry * deg) - (pirmaLode.vy) * Math.cos(pirmaLode.ry * deg);
    // console.log(`dx = ${dx}, dz = ${dz}, lode_ry = ${lode_ry}, dry = ${dry}`);

    // lode_x += lode_dx;
    // lode_z += lode_dz;
    pirmaLode.x += lode_dx;
    pirmaLode.z += lode_dz;

    // lode = manaLode;

    // lode = document.getElementById(`lode1`);
    lode.style.transform = `translate3d(${600 + pirmaLode.x - 20 / 2}px, ${400 + pirmaLode.y - 20 / 2}px, ${pirmaLode.z}px) rotateX(${pirmaLode.rx}deg) rotateY(${pirmaLode.ry}deg) rotateZ(${0}deg)`;
    lode_move -= 1;
    if (lode_move < 0) {
        lode.style.display = "none";
        lode.remove();
        zimetLodi();
    }

    //manaLode
    for (let sk = 0; sk < manaLode.length; sk++) {
        ldx = -pirmaLode.vx * Math.cos(pirmaLode.ry * deg) + (pirmaLode.vy) * Math.sin(pirmaLode.ry * deg);

        ldz = -(pirmaLode.vx) * Math.sin(pirmaLode.ry * deg) - (pirmaLode.vy) * Math.cos(pirmaLode.ry * deg);

        manaLodeData[sk].x += ldx;
        manaLodeData[sk].z += ldz;

        manaLode[sk].style.transform = `translate3d(${600 + manaLodeData[sk].x - 20 / 2}px, ${400 + manaLodeData[sk].y - 20 / 2}px, ${manaLodeData[sk].z}px) rotateX(${manaLodeData[sk].rx}deg) rotateY(${manaLodeData[sk].ry}deg) rotateZ(${0}deg)`;
    }

    // lode_move -= 1;
    // if (lode_move < 0) {

    // }
    // ----------------------- manaLode

    world.style.transform = `translateZ(${600 - 0}px) rotateX(${pawn.rx}deg) rotateY(${pawn.ry}deg) translate3d(${-pawn.x}px, ${-pawn.y}px, ${-pawn.z}px)`;

    rotate(izvObj, 0.5);
    interact(izvObj);
    interactLode(izvObj);
    interactTeleport(spelesElementi[level][2], izvObj);
    // move(objekti[0], 0.1, -0.1, 0.1);
}