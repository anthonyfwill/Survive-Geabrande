function EnemyLaser(alien) {
  this.x = alien.x + 25;
  this.y = alien.y + alien.scl;
  this.v = 5;
  this.update = function() {
    this.y += this.v;
  };
  this.show = function() {
    image(bulletPlayer, this.x, this.y, 20, 20);
  };
}
