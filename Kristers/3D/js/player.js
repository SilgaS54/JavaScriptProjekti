class player {
  constructor(x, y, z, rx, ry) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.rx = rx;
    this.ry = ry;
    this.rz = 0;
    this.vx = 5; //ātrums x virzienā
    this.vy = 5; //ātrums y (vertikālā virzienā)
    this.vz = 5; //ātrums z virzienā
    this.timer = 100;
  }
}
