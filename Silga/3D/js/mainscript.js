var spelesElementi = [
  //0. - karte, 1. - objekti, 3. - teleporti
  [map, objekti, teleports],
  [mapSilga, objektiSilga, teleportsSilga],
  [mapKristers, objektiKristers, teleportsKristers]
];

var punkti = 0;

var pawn = new player(90, 0, 90, 0, 0);

createWorld(spelesElementi[level][0]);
zimetObjektus(spelesElementi[level][1]);
zimetObjektus(spelesElementi[level][2]);
timerGame = setInterval(update, 10); //atjaunināšanas ātrums ir 10, to var iestatīt citu...