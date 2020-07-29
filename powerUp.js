class PowerUp {
  constructor(){
    this.x = random(-3000, 0);
    this.y = random(200, windowHeight - 50);
    this.vx = random(2, 3);
    this.vy = random(0, 0.1);
    this.scl = 50;
  }
  show(){
    
    image(puImage, this.x, this.y, this.scl, this.scl);
    
    this.x += this.vx;
    this.y -= this.vy;
  }
}