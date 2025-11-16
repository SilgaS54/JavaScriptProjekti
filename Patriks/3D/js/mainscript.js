var spelesElementi = [
  //0. - karte, 1. - objekti, 3. - teleporti
  [map, objekti, teleports],
  [mapSilga, objektiSilga, teleportsSilga],
  [mapKristers, objektiKristers, teleportsKristers]
];

var punkti = 0;
var pawn = new player(90, 0, 90, 0, 0);

buttonStart.onclick = function(){
  menuStart.style.display = "none";
  canlock = true;
  world.innerHTML = "";
  createWorld(spelesElementi[level][0]);
  zimetObjektus(spelesElementi[level][1], `objekts`);
  zimetObjektus(spelesElementi[level][2], `teleports`);
  zimetLodi(pawn);
  timerGame = setInterval(update, 10);
}

buttonLimenis.onclick = function(){
  menuStart.style.display = "none";
  canlock = true;
  level = 1;
  world.innerHTML = "";
  createWorld(spelesElementi[level][0]);
  zimetObjektus(spelesElementi[level][1], `objekts`);
  zimetObjektus(spelesElementi[level][2], `teleports`);
  zimetLodi(pawn);
  timerGame = setInterval(update, 10);
}