function Laser(xpos, left = 0, right = 0) {
  this.x = xpos + 15;
  this.y = windowHeight - player.scl;
  this.v = -5 - aSpd;
  this.update = function() {
    this.y += this.v;
    this.x += right;
    this.x += left;
  };
  this.show = function() {
    image(bulletPlayer, this.x, this.y, 50, 50);
  };
} 
