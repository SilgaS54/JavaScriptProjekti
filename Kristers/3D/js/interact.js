function interact(obj) {
  for (let i = 0; i < obj.length; i++) {
    let r =
      (pawn.x - obj[i][0]) ** 2 +
      (pawn.y - obj[i][1]) ** 2 +
      (pawn.z - obj[i][2]) ** 2;
    if (r < obj[i][6] ** 2 + obj[i][7] ** 2) {
      panemsanasSkana.play();
      punkti++;
      myH1.textContent = `Punkti: ${punkti} no ${obj.length}`;
      if (punkti == obj.length) {
        var myH2 = document.createElement("h1");
        myH2.textContent = "Punkti sakrāti, var doties uz teleportu!";
        mansTeksts.appendChild(myH2);
      }
      mansTeksts.appendChild(myH1);
      obj[i][0] = 100000;
      obj[i][1] = 100000;
      obj[i][2] = 100000;
    }
  }

  document.onclick = function () {
    // lode.style.display = "block";
    //lode_x = pawn.x;
    pirmaLode.x = pawn.x;
    //lode_y = pawn.y;
    pirmaLode.y = pawn.y;
    //lode_z = pawn.z;
    pirmaLode.z = pawn.z;
    //lode_rx = pawn.rx;
    pirmaLode.rx = pawn.rx;
    //lode_ry = pawn.ry + 45;
    pirmaLode.ry = pawn.ry + 45;
    //lode_rz = pawn.rz;
    pirmaLode.rz = pawn.rz;
    lode_move = 100;
    //lode_atrums_x = lode_atrums_y = 5;
    pirmaLode.vx = pirmaLode.vy = 5;

    //manaLode - START -
    console.log(lode_skaits);
    manaLode[lode_skaits] = zimetManuLodi(lode_skaits);
    manaLodeData[lode_skaits] = new player();
    manaLodeData[lode_skaits].x = pawn.x;
    manaLodeData[lode_skaits].y = pawn.y;
    manaLodeData[lode_skaits].z = pawn.z;
    manaLodeData[lode_skaits].rx = pawn.rx;
    manaLodeData[lode_skaits].ry = pawn.ry + 45;
    manaLodeData[lode_skaits].rz = pawn.rz;
    manaLodeData[lode_skaits].vx = pirmaLode.vy = 5;
    lode_skaits++;
    //manaLode - END -

    // var manaLode = zimetManuLodi(2);

    // let lode1 = document.createElement("div");
    // lode1.id = `lode${lode_daudzums}`;
    // for(let i = 0; i < 500; i++){
    //   lode1.style.transform = `translate3d(${600 + player.x - 20 / 2}px, ${400 + player.y - 20 / 2}px, ${player.z - i}px)`;
    //    console.log("LODE1");
    // }
    // world.appendChild(lode1);
    // lode_daudzums++;

    // move(lode, 105);

    // Šaušanas iespēja pēc koordinātēm
    // for (let j = 0; j < obj.length; j++) {
    //   var mobj = document.getElementById(`objekts${j}`);
    //   var rect = mobj.getBoundingClientRect();
    //   if (Math.abs((Math.sqrt((600 - rect.x) ** 2 + (400 - rect.y) ** 2)) - (Math.sqrt(rect.width ** 2 / 4 + rect.height ** 2 / 4))) < 20) {
    //     panemsanasSkana.play();
    //     punkti++;
    //     myH1.textContent = `Punkti: ${punkti} no ${obj.length}`;
    //     if (punkti == obj.length) {
    //       var myH2 = document.createElement("h1");
    //       myH2.textContent = "Punkti sakrāti, var doties uz teleportu!"
    //       mansTeksts.appendChild(myH2);
    //     }
    //     mansTeksts.appendChild(myH1);
    //     console.log("object HIT!");
    //     obj[j][0] = 100000;
    //     obj[j][1] = 100000;
    //     obj[j][2] = 100000;
    //   }
    // } -------------------BEIGAS
  };
}
