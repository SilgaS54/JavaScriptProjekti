var map = [
  [0, 100, 0, 90, 0, 0, 2000, 2000, "url(textures/grass.jpg)", 1], //grīda
  //[0]x, [1]y, [2]z, [3]rx, [4]ry, [5]rz, [6]width, [7]height, [8]color, [9]opacity, [10]tekstūras mērogošana
  [0, 0, -1000, 0, 0, 0, 2000, 200, "url(textures/wall00.jpg)", 1, 15], // siena priekšā
  [0, 0, 1000, 0, 0, 0, 2000, 200, "url(textures/wall01.jpg)", 1], // siena aizmugurē
  [1000, 0, 0, 0, 90, 0, 2000, 200, "url(textures/wall02.jpg)", 1, 20], // siena labā pusē
  [-1000, 0, 0, 0, 90, 0, 2000, 200, "url(textures/wall03.jpg)", 1, 10], // siena kreisā pusē

  //siena 1
  [500, 0, 710, 0, 0, 0, 1000, 200, "url(textures/ieks_siena_1.jpg)", 1, 25],
  [500, 0, 690, 0, 0, 0, 1000, 200, "url(textures/ieks_siena_1.jpg)", 1, 25],
  [0, 0, 700, 0, 90, 0, 20, 200, "url(textures/ieks_siena_1.jpg)", 1, 100],

  //siena 2
  [-650, 0, 710, 0, 0, 0, 700, 200, "url(textures/ieks_siena_1.jpg)", 1, 25],
  [-650, 0, 690, 0, 0, 0, 700, 200, "url(textures/ieks_siena_1.jpg)", 1, 25],
  [-300, 0, 700, 0, 90, 0, 20, 200, "url(textures/ieks_siena_1.jpg)", 1, 100],

  // [300, 80, 0, 90, 0, 0, 100, 100, "url(textures/ieks_siena_1.jpg)", 1], //kāpnes
  // [300, 40, -100, 90, 0, 0, 100, 100, "url(textures/ieks_siena_1.jpg)", 1],
];

//Silgas pasaule
var mapSilga = [
  [0, 100, 0, 90, 0, 0, 2000, 2000, "url(textures/meness.jpg)", 1], //grīda
  //x, y, z, rx, ry, rz, width, height, color, opacity
  [0, 0, -1000, 0, 0, 0, 2000, 200, "url(textures/wall01s.jpg)", 1], // siena priekšā
  [0, 0, 1000, 0, 0, 0, 2000, 200, "url(textures/wall01s.jpg)", 1], // siena aizmugurē
  [1000, 0, 0, 0, 90, 0, 2000, 200, "url(textures/wall01s.jpg)", 1], // siena labā pusē
  [-1000, 0, 0, 0, 90, 0, 2000, 200, "url(textures/wall01s.jpg)", 1], // siena kreisā pusē

  //siena 2
  [500, 0, 710, 0, 0, 0, 1000, 200, "url(textures/ieks_siena_1.jpg)", 1],
  [500, 0, 690, 0, 0, 0, 1000, 200, "url(textures/ieks_siena_1.jpg)", 1],
  [0, 0, 700, 0, 90, 0, 20, 200, "url(textures/ieks_siena_1.jpg)", 1],

  //siena 3
  [-700, 0, 710, 0, 0, 0, 600, 200, "url(textures/ieks_siena_1.jpg)", 1],
  [-700, 0, 690, 0, 0, 0, 600, 200, "url(textures/ieks_siena_1.jpg)", 1],
  [-400, 0, 700, 0, 90, 0, 20, 200, "url(textures/ieks_siena_1.jpg)", 1],

  //siena 4
  [0, 0, 80, 0, 0, 0, 1000, 200, "url(textures/ieks_siena_1.jpg)", 1],
  [0, 0, 100, 0, 0, 0, 1000, 200, "url(textures/ieks_siena_1.jpg)", 1],
  [-500, 0, 90, 0, 90, 0, 20, 200, "url(textures/ieks_siena_1.jpg)", 1],
  [500, 0, 90, 0, 90, 0, 20, 200, "url(textures/ieks_siena_1.jpg)", 1],

  //siena 5
  [-750, 0, -100, 0, 0, 0, 500, 200, "url(textures/ieks_siena_1.jpg)", 1],
  [-750, 0, -120, 0, 0, 0, 500, 200, "url(textures/ieks_siena_1.jpg)", 1],
  [-500, 0, -110, 0, 90, 0, 20, 200, "url(textures/ieks_siena_1.jpg)", 1],

  //siena 6
  [-760, 0, -650, 0, 90, 0, 700, 200, "url(textures/ieks_siena_1.jpg)", 1],
  [-740, 0, -650, 0, 90, 0, 700, 200, "url(textures/ieks_siena_1.jpg)", 1],
  [-750, 0, -300, 0, 0, 0, 20, 200, "url(textures/ieks_siena_1.jpg)", 1],

  //siena 7
  [-100, 0, -320, 0, 90, 0, 800, 200, "url(textures/ieks_siena_1.jpg)", 1],
  [-80, 0, -320, 0, 90, 0, 800, 200, "url(textures/ieks_siena_1.jpg)", 1],
  [-90, 0, -720, 0, 0, 0, 20, 200, "url(textures/ieks_siena_1.jpg)", 1],

  //siena 8
  [600, 0, -320, 0, 0, 0, 800, 200, "url(textures/ieks_siena_1.jpg)", 1],
  [600, 0, -340, 0, 0, 0, 800, 200, "url(textures/ieks_siena_1.jpg)", 1],
  [200, 0, -330, 0, 90, 0, 20, 200, "url(textures/ieks_siena_1.jpg)", 1],

  //siena 9
  [350, 0, -565, 0, 90, 0, 450, 200, "url(textures/ieks_siena_1.jpg)", 1],
  [330, 0, -565, 0, 90, 0, 450, 200, "url(textures/ieks_siena_1.jpg)", 1],

  //siena 10
  [530, 0, -790, 0, 0, 0, 400, 200, "url(textures/ieks_siena_1.jpg)", 1],
  [530, 0, -770, 0, 0, 0, 400, 200, "url(textures/ieks_siena_1.jpg)", 1],

  //siena 11
  [730, 0, -640, 0, 90, 0, 300, 200, "url(textures/ieks_siena_1.jpg)", 1],
  [710, 0, -640, 0, 90, 0, 300, 200, "url(textures/ieks_siena_1.jpg)", 1],
  [720, 0, -490, 0, 0, 0, 20, 200, "url(textures/ieks_siena_1.jpg)", 1],
];
//----
//Kristera pasaule
var mapKristers = [
  [0, 100, 0, 90, 0, 0, 2000, 2000, "url(textures/grass.jpg)", 1], //grīda
  //x, y, z, rx, ry, rz, width, height, color, opacity
  [0, 0, -1000, 0, 0, 0, 2000, 200, "url(textures/walls.jpg)", 1, 10], // siena priekšā
  [0, 0, 1000, 0, 0, 0, 2000, 200, "url(textures/walls.jpg)", 1, 10], // siena aizmugurē
  [1000, 0, 0, 0, 90, 0, 2000, 200, "url(textures/walls.jpg)", 1, 10], // siena labā pusē
  [-1000, 0, 0, 0, 90, 0, 2000, 200, "url(textures/walls.jpg)", 1, 10], // siena kreisā pusē

  //siena 1
  [500, 0, 710, 0, 0, 0, 1000, 200, "url(textures/ieks_siena_1.jpg)", 1, 10],
  [500, 0, 690, 0, 0, 0, 1000, 200, "url(textures/ieks_siena_1.jpg)", 1, 10],
  [0, 0, 700, 0, 90, 0, 20, 200, "url(textures/ieks_siena_1.jpg)", 1, 100],

  //siena 2
  [-650, 0, 710, 0, 0, 0, 700, 200, "url(textures/ieks_siena_1.jpg)", 1, 10],
  [-650, 0, 690, 0, 0, 0, 700, 200, "url(textures/ieks_siena_1.jpg)", 1, 10],
  [-300, 0, 700, 0, 90, 0, 20, 200, "url(textures/ieks_siena_1.jpg)", 1, 100],

  //siena 3
  [0, 0, 350, 0, 0, 0, 1000, 200, "url(textures/ieks_siena_1.jpg)", 1, 10],
  [0, 0, 330, 0, 0, 0, 1000, 200, "url(textures/ieks_siena_1.jpg)", 1, 10],
  [-500, 0, 340, 0, 90, 0, 20, 200, "url(textures/ieks_siena_1.jpg)", 1, 10],
  [500, 0, 340, 0, 90, 0, 20, 200, "url(textures/ieks_siena_1.jpg)", 1, 100],

  //siena 4
  [0, 0, -350, 0, 0, 0, 1000, 200, "url(textures/ieks_siena_1.jpg)", 1, 10],
  [0, 0, -330, 0, 0, 0, 1000, 200, "url(textures/ieks_siena_1.jpg)", 1, 10],
  [-500, 0, -340, 0, 90, 0, 20, 200, "url(textures/ieks_siena_1.jpg)", 1, 100],
  [500, 0, -340, 0, 90, 0, 20, 200, "url(textures/ieks_siena_1.jpg)", 1, 100],

  //siena 5
  [500, 0, -710, 0, 0, 0, 1000, 200, "url(textures/ieks_siena_1.jpg)", 1, 10],
  [500, 0, -690, 0, 0, 0, 1000, 200, "url(textures/ieks_siena_1.jpg)", 1, 10],
  [0, 0, -700, 0, 90, 0, 20, 200, "url(textures/ieks_siena_1.jpg)", 1, 100],

  //siena 5
  [-650, 0, -710, 0, 0, 0, 700, 200, "url(textures/ieks_siena_1.jpg)", 1, 10],
  [-650, 0, -690, 0, 0, 0, 700, 200, "url(textures/ieks_siena_1.jpg)", 1, 10],
  [-300, 0, -700, 0, 90, 0, 20, 200, "url(textures/ieks_siena_1.jpg)", 1, 100],

  //siena 6
  [500, 0, 10, 0, 0, 0, 1000, 200, "url(textures/ieks_siena_1.jpg)", 1, 10],
  [500, 0, -10, 0, 0, 0, 1000, 200, "url(textures/ieks_siena_1.jpg)", 1, 10],
  [0, 0, 0, 0, 90, 0, 20, 200, "url(textures/ieks_siena_1.jpg)", 1, 100],

  //siena 7
  [-650, 0, 10, 0, 0, 0, 700, 200, "url(textures/ieks_siena_1.jpg)", 1, 10],
  [-650, 0, -10, 0, 0, 0, 700, 200, "url(textures/ieks_siena_1.jpg)", 1, 10],
  [-300, 0, 0, 0, 90, 0, 20, 200, "url(textures/ieks_siena_1.jpg)", 1, 100],

  //siena 8
  [0, -100, 0, 90, 0, 0, 2000, 2000, "url(textures/griesti.jpg)", 1, 10], //Griesti
];
//----
//Extra pasaule
var mapExtra = [
  [0, 100, 0, 90, 0, 0, 2000, 2000, "url(textures/floor.jpg)", 1], //grīda
  //x, y, z, rx, ry, rz, width, height, color, opacity
  [0, 0, -1000, 0, 0, 0, 2000, 200, "url(textures/ieks_siena_3.jpg)", 1, 10], // siena priekšā
  [0, 0, 1000, 0, 0, 0, 2000, 200, "url(textures/ieks_siena_3.jpg)", 1, 10], // siena aizmugurē
  [1000, 0, 0, 0, 90, 0, 2000, 200, "url(textures/ieks_siena_3.jpg)", 1, 10], // siena labā pusē
  [-1000, 0, 0, 0, 90, 0, 2000, 200, "url(textures/ieks_siena_3.jpg)", 1, 10], // siena kreisā pusē

  //siena 1
  [500, 0, 710, 0, 0, 0, 1000, 200, "url(textures/ieks_siena_2.jpg)", 1, 10],
  [500, 0, 690, 0, 0, 0, 1000, 200, "url(textures/ieks_siena_2.jpg)", 1, 10],
  [0, 0, 700, 0, 90, 0, 20, 200, "url(textures/ieks_siena_2.jpg)", 1, 100],

  //siena 2
  [-650, 0, 710, 0, 0, 0, 700, 200, "url(textures/ieks_siena_2.jpg)", 1, 10],
  [-650, 0, 690, 0, 0, 0, 700, 200, "url(textures/ieks_siena_2.jpg)", 1, 10],
  [-300, 0, 700, 0, 90, 0, 20, 200, "url(textures/ieks_siena_2.jpg)", 1, 100],

  //siena 3
  [0, 0, 350, 0, 0, 0, 1000, 200, "url(textures/ieks_siena_2.jpg)", 1, 10],
  [0, 0, 330, 0, 0, 0, 1000, 200, "url(textures/ieks_siena_2.jpg)", 1, 10],
  [-500, 0, 340, 0, 90, 0, 20, 200, "url(textures/ieks_siena_2.jpg)", 1, 10],
  [500, 0, 340, 0, 90, 0, 20, 200, "url(textures/ieks_siena_2.jpg)", 1, 100],

  //siena 4
  [0, 0, -350, 0, 0, 0, 1000, 200, "url(textures/ieks_siena_4.jpg)", 1, 10],
  [0, 0, -330, 0, 0, 0, 1000, 200, "url(textures/ieks_siena_4.jpg)", 1, 10],
  [-500, 0, -340, 0, 90, 0, 20, 200, "url(textures/ieks_siena_4.jpg)", 1, 100],
  [500, 0, -340, 0, 90, 0, 20, 200, "url(textures/ieks_siena_4.jpg)", 1, 100],

  //siena 5
  [500, 0, -710, 0, 0, 0, 1000, 200, "url(textures/ieks_siena_4.jpg)", 1, 10],
  [500, 0, -690, 0, 0, 0, 1000, 200, "url(textures/ieks_siena_4.jpg)", 1, 10],
  [0, 0, -700, 0, 90, 0, 20, 200, "url(textures/ieks_siena_4.jpg)", 1, 100],

  //siena 5
  [-650, 0, -710, 0, 0, 0, 700, 200, "url(textures/ieks_siena_4.jpg)", 1, 10],
  [-650, 0, -690, 0, 0, 0, 700, 200, "url(textures/ieks_siena_4.jpg)", 1, 10],
  [-300, 0, -700, 0, 90, 0, 20, 200, "url(textures/ieks_siena_4.jpg)", 1, 100],

  //siena 6
  [500, 0, 10, 0, 0, 0, 1000, 200, "url(textures/ieks_siena_4.jpg)", 1, 10],
  [500, 0, -10, 0, 0, 0, 1000, 200, "url(textures/ieks_siena_4.jpg)", 1, 10],
  [0, 0, 0, 0, 90, 0, 20, 200, "url(textures/ieks_siena_4.jpg)", 1, 100],

  //siena 7
  [-650, 0, 10, 0, 0, 0, 700, 200, "url(textures/ieks_siena_4.jpg)", 1, 10],
  [-650, 0, -10, 0, 0, 0, 700, 200, "url(textures/ieks_siena_4.jpg)", 1, 10],
  [-300, 0, 0, 0, 90, 0, 20, 200, "url(textures/ieks_siena_4.jpg)", 1, 100],

  //siena 8
  [0, -100, 0, 90, 0, 0, 2000, 2000, "url(textures/griesti.jpg)", 1, 10], //Griesti
];
