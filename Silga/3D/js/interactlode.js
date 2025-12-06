function interactLode(obj, lodeData, lodeStyle, sk) {
  for (let i = 0; i < obj.length; i++) {
    let r = (lodeData.x - obj[i][0]) ** 2 + (lodeData.y - obj[i][1]) ** 2 + (lodeData.z - obj[i][2]) ** 2;
    if (r < (obj[i][6]) ** 2 + (obj[i][7]) ** 2) {
      panemsanasSkana.play();
      punkti++;
      myH1.textContent = `Punkti: ${punkti} no ${obj.length}`;
      if (punkti == obj.length) {
        var myH2 = document.createElement("h1");
        myH2.textContent = "Punkti sakrāti, var doties uz teleportu!"
        mansTeksts.appendChild(myH2);
      }

      obj[i][0] = 100000;
      obj[i][1] = 100000;
      obj[i][2] = 100000;

      lodeStyle.style.width = `200px`;
      lodeStyle.style.height = `200px`;
      lodeStyle.remove();
    }
  }
}