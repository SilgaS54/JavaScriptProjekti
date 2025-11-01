var lock = false;

document.addEventListener("pointerlockchange", (event) => {
  lock = !lock;
});

container.onclick = function () {
  if (!lock && canlock) {
    container.requestPointerLock();
  }
};
