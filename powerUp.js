class PowerUp {
  constructor(){
    this.x = 0;
    this.y = random(0, windowHeight - 50);
    this.vx = random(1, 3);
    this.vy = random(0, 3);
    this.scl = 50;
  }
  show(){
    
    image(puImage, this.x, this.y, this.scl, this.scl);
    
    this.x += this.vx;
    this.y -= this.vy;
  }
}