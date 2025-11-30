function zimetManuLodi(num) {
    let manaLode = document.createElement("div");
    manaLode.id = `manalode${num}`;
    manaLode.style.display = "block";
    manaLode.style.position = "absolute";
    manaLode.style.width = `20px`;
    manaLode.style.height = `20px`;
    manaLode.style.borderRadius = `50%`;
    manaLode.style.backgroundColor = `red`;
    world.appendChild(manaLode);

    return manaLode;
}