function Alien(x, y) {
  this.x = x;
  this.y = y;
  this.scl = 100;
  this.health = 100;
  this.keepspawn = false;

  this.show = function() {
    if(this.keepspawn === false){
      image(alien, this.x, this.y, this.scl, this.scl);
    }else {
      image(alienShooting, this.x, this.y, this.scl, this.scl);
      
    }
  };
  this.hurt = function() {
    this.health -= power;
    if(this.health <= 0){
      score++; 
    }
  };
  
  //function for explosion when bullet hits enemy
  this.explode = function() {
   image(explosion, this.x + 20, this.y + 20, 50, 50);
  }
  
  //Function for when the alien dies displays animation
  this.dead = function(){
   image(dyingAlien, this.x, this.y, this.scl, this.scl);
   }   
  
  //Function to have the alien move randomly left or right
  this.movement = function(){
    if(Math.floor(Math.random() * 10 + 1) <= 5){
      this.x += Math.floor(Math.random() * 3 + 1)
    }else {
      this.x += (Math.floor(Math.random() * 3 + 1)) *-1;
    }    
  };
}