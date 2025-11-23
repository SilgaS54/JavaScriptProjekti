function zimetLodi() {
  var lode = document.createElement("div");
  // lode.id = `lode${lode_daudzums}`;
  lode.id = `lode`;
  lode.style.display = "none";
  lode.style.position = "absolute";
  lode.style.width = `20px`;
  lode.style.height = `20px`;
  lode.style.borderRadius = `50%`;
  lode.style.backgroundColor = `gold`;
  // return lode;
  world.appendChild(lode);
  // lode_daudzums++;
}
