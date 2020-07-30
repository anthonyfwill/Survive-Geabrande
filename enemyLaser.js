function EnemyLaser(alien) {
  this.x = alien.x + 25;
  this.y = alien.y + alien.scl;
  this.v = 5;

  this.update = function() {
    this.y += this.v;
  };
  this.show = function() {
    //if(this.keepspawn === true){
      image(alienBullet, this.x, this.y, 40, 40);
      alien.keepspawn = true;
      if(this.y >= 1000 || this.x > player.x && this.x < player.x + player.scl && this.y > player.y){
        this.y = alien.y + alien.scl;
        alien.keepspawn = false;
      }
  // }
  };
}
