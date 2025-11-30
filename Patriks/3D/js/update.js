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
    // lode_dx = -pirmaLode.vx * Math.cos(pirmaLode.ry * deg) + (pirmaLode.vy) * Math.sin(pirmaLode.ry * deg);
    // // lode_dz = -(lode_atrums_x) * Math.sin(lode_ry * deg) - (lode_atrums_y) * Math.cos(lode_ry * deg);
    // lode_dz = -(pirmaLode.vx) * Math.sin(pirmaLode.ry * deg) - (pirmaLode.vy) * Math.cos(pirmaLode.ry * deg);
    // // console.log(`dx = ${dx}, dz = ${dz}, lode_ry = ${lode_ry}, dry = ${dry}`);

    // // lode_x += lode_dx;
    // // lode_z += lode_dz;
    // pirmaLode.x += lode_dx;
    // pirmaLode.z += lode_dz;

    // lode = manaLode;

    // lode = document.getElementById(`lode1`);
    // lode.style.transform = `translate3d(${600 + pirmaLode.x - 20 / 2}px, ${400 + pirmaLode.y - 20 / 2}px, ${pirmaLode.z}px) rotateX(${pirmaLode.rx}deg) rotateY(${pirmaLode.ry}deg) rotateZ(${0}deg)`;
    // lode_move -= 1;
    // if (lode_move < 0) {
    //     lode.style.display = "none";
    //     lode.remove();
    //     zimetLodi();
    // }

    document.onclick = function () {
        // lode.style.display = "block";
        //lode_x = pawn.x;
        // pirmaLode.x = pawn.x;
        // //lode_y = pawn.y;
        // pirmaLode.y = pawn.y;
        // //lode_z = pawn.z;
        // pirmaLode.z = pawn.z;
        // //lode_rx = pawn.rx;
        // pirmaLode.rx = pawn.rx;
        // //lode_ry = pawn.ry + 45;
        // pirmaLode.ry = pawn.ry + 45;
        // //lode_rz = pawn.rz;
        // pirmaLode.rz = pawn.rz;
        // // lode_move = 100;
        // //lode_atrums_x = lode_atrums_y = 5;
        // pirmaLode.vx = pirmaLode.vy = 5;

        //manaLode - START - 
        if (lock) {
            console.log(lode_skaits);
            //manaLode[lode_skaits] = zimetManuLodi(lode_skaits);
            manaLode.push(zimetManuLodi(lode_skaits));
            manaLodeData.push(new player(pawn.x, pawn.y, pawn.z, pawn.rx, pawn.ry + 45, pawn.rz, 5, 5));
            // manaLodeData[lode_skaits] = new player();
            // manaLodeData[lode_skaits].x = pawn.x;
            // manaLodeData[lode_skaits].y = pawn.y;
            // manaLodeData[lode_skaits].z = pawn.z;
            // manaLodeData[lode_skaits].rx = pawn.rx;
            // manaLodeData[lode_skaits].ry = pawn.ry + 45;
            // manaLodeData[lode_skaits].rz = pawn.rz;
            // manaLodeData[lode_skaits].vx = 5;
            // manaLodeData[lode_skaits].vy = 5;
            lode_skaits++;
            console.log(manaLode, manaLodeData, manaLode.length, manaLodeData.length, lode_skaits);
        }

    }

    //manaLode
    for (let sk = 0; sk < manaLode.length; sk++) {
        // if
        ldx = -manaLodeData[sk].vx * Math.cos(manaLodeData[sk].ry * deg) + (manaLodeData[sk].vy) * Math.sin(manaLodeData[sk].ry * deg);

        ldz = -(manaLodeData[sk].vx) * Math.sin(manaLodeData[sk].ry * deg) - (manaLodeData[sk].vy) * Math.cos(manaLodeData[sk].ry * deg);

        manaLodeData[sk].x += ldx;
        manaLodeData[sk].z += ldz;

        manaLode[sk].style.transform = `translate3d(${600 + manaLodeData[sk].x - Number(window.getComputedStyle(manaLode[sk]).getPropertyValue(`width`).slice(0, -2)) / 2}px, ${400 + manaLodeData[sk].y - Number(window.getComputedStyle(manaLode[sk]).getPropertyValue(`height`).slice(0, -2)) / 2}px, ${manaLodeData[sk].z}px) rotateX(${manaLodeData[sk].rx}deg) rotateY(${manaLodeData[sk].ry}deg) rotateZ(${0}deg)`;

        interactLode(izvObj, manaLodeData[sk], manaLode[sk], sk);

        // console.log(manaLode, manaLodeData, manaLode.length, manaLodeData.length, lode_skaits, manaLodeData[sk].vx);

        manaLodeData[sk].timer--;
        if (manaLodeData[sk].timer < 0) {
            manaLode[sk].remove();
            // console.log(manaLode, manaLodeData, manaLode.length);
            // console.log(sk);
            manaLode.splice(sk, 1);
            manaLodeData.splice(sk, 1);

            // manaLode.push(zimetManuLodi(lode_skaits));
            // manaLodeData.push(new player());
            // lode_skaits++;

            // console.log(manaLode, manaLodeData, manaLodeData.length);
        } else if (manaLodeData[sk].timer < 5) {
            manaLode[sk].style.width = `200px`;
            manaLode[sk].style.height = `200px`;
        }
    }

    // lode_move -= 1;
    // if (lode_move < 0) {

    // }
    // ----------------------- manaLode

    world.style.transform = `translateZ(${600 - 0}px) rotateX(${pawn.rx}deg) rotateY(${pawn.ry}deg) translate3d(${-pawn.x}px, ${-pawn.y}px, ${-pawn.z}px)`;

    rotate(izvObj, 0.5);
    interact(izvObj);
    // interactLode(izvObj);
    interactTeleport(spelesElementi[level][2], izvObj);
    // move(objekti[0], 0.1, -0.1, 0.1);
}