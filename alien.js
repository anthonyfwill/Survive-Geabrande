function Alien(x, y) {
  this.x = x;
  this.y = y;
  this.scl = 70;
  this.health = 100;
  this.show = function() {
    image(alien, this.x, this.y, this.scl, this.scl);
  };
  this.hurt = function() {
    this.health -= power;
  };
  this.explode = function() {
    if(this.health > 0){
      image(explosion, this.x + 20, this.y + 20, 40, 40);
    }
    else{
      image(explosion, this.x + 20, this.y + 20, 100, 10 0);
    }
  }
}