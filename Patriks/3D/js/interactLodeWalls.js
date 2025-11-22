function interactLodeWalls(obj) {
  for (let i = 0; i < obj.length; i++) {
    // let r = (lode_x - obj[i][0]) ** 2 + (lode_y - obj[i][1]) ** 2 + (lode_z - obj[i][2]) ** 2;
    let r = (pirmaLode.x - obj[i][0]) ** 2 + (pirmaLode.y - obj[i][1]) ** 2 + (pirmaLode.z - obj[i][2]) ** 2;
    if (r < (obj[i][6]) ** 2 + (obj[i][7]) ** 2) {
      panemsanasSkana.play();
      lode.remove();
      zimetLodi();
    }
  }
}