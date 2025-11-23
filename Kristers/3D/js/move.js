function move(objekts, atrumsX, atrumsY, atrumsZ) {
  objekts[0] += atrumsX;
  objekts[1] += atrumsY;
  objekts[2] += atrumsZ;
  document.getElementById(`${objekts}`).style.transform = `translate3d(${
    600 + objekts[0] - objekts[6] / 2
  }px, ${400 + objekts[1] - objekts[7] / 2}px, ${objekts[2]}px) }deg)`;

  // const rect = objekts.getBoundingClientRect();
  // let objektsX = rect.left;
  // objekts.style.left = `${objektsX - atrums}px`;
  // objekts.style.top = `${3.5 * (objektsX - atrums) - 1700}px`;
  // objekts.style.height = `50px`;
  // objekts.style.width = `50px`;
}
