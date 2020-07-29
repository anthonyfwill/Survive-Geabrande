function EnemyLaser(alien) {
  this.x = alien.x + 25;
  this.y = alien.y + alien.scl;
  this.v = 5;
  this.keepspawn = false;

  this.update = function() {
    this.y += this.v;
  };
  this.show = function() {
    //if(this.keepspawn === true){
      image(alienBullet, this.x, this.y, 20, 20);
      this.keepspawn = true;
      if(this.y >= windowHeight || hit){
        this.y = alien.y + alien.scl;
      }
  // }
  };
}
