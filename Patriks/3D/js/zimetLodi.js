function zimetLodi(player) {
    let lode = document.createElement("div");
    lode.id = "lode";
    lode.style.display = "none";
    lode.style.transform = `translate3d(${600 + player.x - 20/2}px, ${400 + player.y - 20/2}px, ${player.z - 10}px)`;
    world.appendChild(lode);
}