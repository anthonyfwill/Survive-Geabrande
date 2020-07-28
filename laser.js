function Laser(xpos) {
  this.x = xpos + 25;
  this.y = windowHeight - player.scl;
  this.v = -5;
  this.update = function() {
    this.y += this.v;
  };
  this.show = function() {
    image(bulletPlayer, this.x, this.y, 20, 20);
  };
}
