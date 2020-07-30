//Function for placing image of ship and allowing it to move left and right
function Ship() {
  this.x = windowWidth / 2;
  this.scl = 80;
  this.y = windowHeight - this.scl;

  this.v = 0;

  this.show = function() {
    image(spaceship, this.x, this.y, this.scl, this.scl);
    //If ship goes off screen will come out on the other side
    if (this.x < 0 - (this.scl + 10)) {
      this.x = windowWidth;
    }
    if (this.x > windowWidth) {
      this.x = 0 - this.scl;
    }
    this.x += this.v;
  };
}
