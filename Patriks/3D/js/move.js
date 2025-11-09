function move(objekts, atrums) {
    const rect = objekts.getBoundingClientRect();
    let objektsX = rect.left - atrums;
    objekts.style.left = `${objektsX}px`;
    objekts.style.top = `${3.5 * objektsX - 1700}px`;
}

