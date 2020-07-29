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
    if(this.health <= 0){
      score++; 
    }
  };
  this.explode = function() {
   image(explosion, this.x + 20, this.y + 20, 50, 50);
 this.dead = function(){
   image(dyingAlien, this.x, this.y, this.scl, this.scl);
   
   }   
    
  }
}