function zimetObjektus(mansObj, name) {
    myH1.textContent = "Punkti:";
    mansTeksts.appendChild(myH1);

    for (let i = 0; i < mansObj.length; i++) {
        let jaunsObjekts = document.createElement("div");
        jaunsObjekts.className = "objekts";
        jaunsObjekts.id = `${name}${i}`;
        // jaunsObjekts.style.position = "absolute";
        jaunsObjekts.style.width = `${mansObj[i][6]}px`;
        jaunsObjekts.style.height = `${mansObj[i][7]}px`;
        if (mansObj[i][10]) {
            jaunsObjekts.style.backgroundSize = "100% 100%";
            jaunsObjekts.style.backgroundImage = mansObj[i][10];
        } else {
            jaunsObjekts.style.backgroundColor = mansObj[i][8];
        }
        jaunsObjekts.style.opacity = mansObj[i][9];
        jaunsObjekts.style.transform = `translate3d(${600 + mansObj[i][0] - mansObj[i][6] / 2}px, ${400 + mansObj[i][1] - mansObj[i][7] / 2}px, ${mansObj[i][2]}px) rotateX(${mansObj[i][3]}deg) rotateY(${mansObj[i][4]}deg) rotateZ(${mansObj[i][5]}deg)`;
        world.append(jaunsObjekts);
    }

}
