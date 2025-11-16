function interactLode(obj) {
  for (let i = 0; i < obj.length; i++) {
    let r = (lode_x - obj[i][0]) ** 2 + (lode_y - obj[i][1]) ** 2 + (lode_z - obj[i][2]) ** 2;
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
}