function interact(obj) {
  for (let i = 0; i < obj.length; i++) {
    let r = (pawn.x - obj[i][0]) ** 2 + (pawn.y - obj[i][1]) ** 2 + (pawn.z - obj[i][2]) ** 2;
    if (r < (obj[i][6]) ** 2 + (obj[i][7]) ** 2) {
      panemsanasSkana.play();
      punkti++;
      myH1.textContent = `Punkti: ${punkti} no ${obj.length}`;
      if (punkti == obj.length) {
        var myH2 = document.createElement("h1");
        myH2.textContent = "Punkti sakrāti, var doties uz teleportu!"
        mansTeksts.appendChild(myH2);
      }
      mansTeksts.appendChild(myH1);
      obj[i][0] = 100000;
      obj[i][1] = 100000;
      obj[i][2] = 100000;
    }
  }

  document.onclick = function () {
    
    move(lode, 10);
    for (let j = 0; j < obj.length; j++) {
      var mobj = document.getElementById(`objekts${j}`);
      var rect = mobj.getBoundingClientRect();
      if (Math.abs((Math.sqrt((600 - rect.x) ** 2 + (400 - rect.y) ** 2)) - (Math.sqrt(rect.width ** 2 / 4 + rect.height ** 2 / 4))) < 20) {
        panemsanasSkana.play();
        punkti++;
        myH1.textContent = `Punkti: ${punkti} no ${obj.length}`;
        if (punkti == obj.length) {
          var myH2 = document.createElement("h1");
          myH2.textContent = "Punkti sakrāti, var doties uz teleportu!"
          mansTeksts.appendChild(myH2);
        }
        mansTeksts.appendChild(myH1);
        console.log("object HIT!");
        obj[j][0] = 100000;
        obj[j][1] = 100000;
        obj[j][2] = 100000;
      }
    }

  }
}