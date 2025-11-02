//-----------------
// 0. - x koordināte
// 1. - y koordināte
// 2. - z koordināte
// 3. - pagieziena leņķis pa OX asi 
// 4. - pagieziena leņķis pa OY asi 
// 5. - pagieziena leņķis pa OZ asi
// 6. - platums
// 7. - augstums
// 8. - krāsa
// 9. - caursīdīgums [0 .. 1] 
// 10. - tekstūra
//-----------------

var teleports= [
  [-800, 0, -800, 0, 45, 0, 200, 200, "yellow", 1, "url(textures/teleport.gif)"],
  [800, 0, -800, 0, -45, 0, 200, 200, "violet", 0.3],
]; // 1. līmenis

//Silgas kods
var teleportsSilga= [
  [-900, 0, -900, 0, 45, 0, 200, 200, "yellow", 0.3],
];
//2. līmenis

//Kristera teleports
var teleportsKristers= [
  [-800, 0, 800, 0, 45, 0, 200, 200, "yellow", 0.3],
];
//3. līmenis