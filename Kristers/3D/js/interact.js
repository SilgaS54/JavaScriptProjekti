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
    if (i == 0) {
      // console.log(`${obj[i]}`);
      var mobj = document.getElementById("objekts0");
      var rect = mobj.getBoundingClientRect();
      //console.log(`${rect.x} ${rect.y} ${rect.z} ${rect.width} ${rect.height}`);
      // console.log(`${coorReTransform(obj[i][0], obj[i][1], obj[i][2], pawn.rx, pawn.ry, pawn.rz)}`);
      // console.log(`${coorTransform(obj[i][0], obj[i][1], obj[i][2], pawn.rx, pawn.ry, pawn.rz)}`);
    }
  }
}
