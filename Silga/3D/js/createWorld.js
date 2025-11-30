function createWorld(limenis) { // 3D pasaules izveide
    for (let i = 0; i < limenis.length; i++) {
        let jaunaSiena = document.createElement("div");
        jaunaSiena.className = "square";
        jaunaSiena.id = `square${i}`;
        jaunaSiena.style.width = `${limenis[i][6]}px`;
        jaunaSiena.style.height = `${limenis[i][7]}px`;
        jaunaSiena.style.backgroundImage = limenis[i][8];
        jaunaSiena.style.opacity = limenis[i][9];
        jaunaSiena.style.transform = `translate3d(${600 + limenis[i][0] - limenis[i][6] / 2}px, ${400 + limenis[i][1] - limenis[i][7] / 2}px, ${limenis[i][2]}px) rotateX(${limenis[i][3]}deg) rotateY(${limenis[i][4]}deg) rotateZ(${limenis[i][5]}deg)`;
        if (limenis[i][10]) jaunaSiena.style.backgroundSize = `${limenis[i][10]}%`;
        world.append(jaunaSiena);
    }
}