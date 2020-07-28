class PowerUp {
  constructor(){
    this.x = 0;
    this.y = random(0, windowHeight - 50);
    this.v = 3;
    this.scl = 50;
  }
  show(){
    noStroke();
    fill(255, 100, 100);
    ellipse(this.x, this.y, this.scl, this.scl);
    
    this.x += this.v;
  }
}