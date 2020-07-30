//Function for placing image of ship and allowing it to move left and right
function Ship() {
  this.x = 1000 / 2;
  this.scl = 50;
  this.y = 1000 - this.scl;

  this.v = 0;

  this.show = function() {
    image(spaceship, this.x, this.y, this.scl, this.scl);
    //If ship goes off screen will come out on the other side
    if (this.x < 0 - (this.scl + 10)) {
      this.x = 1000;
    }
    if (this.x > 1000) {
      this.x = 0 - this.scl;
    }
    this.x += this.v;
  };
}
