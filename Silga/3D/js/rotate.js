function rotate(objekti, wy) {
  for (let i = 0; i < objekti.length; i++) {
    objekti[i][4] += wy;
    document.getElementById(`objekts${i}`).style.transform = `translate3d(${600 + objekti[i][0] - objekti[i][6] / 2}px, ${400 + objekti[i][1] - objekti[i][7] / 2}px, ${objekti[i][2]}px) rotateX(${objekti[i][3]}deg) rotateY(${objekti[i][4]}deg) rotateZ(${objekti[i][5]}deg)`;
  }
}
