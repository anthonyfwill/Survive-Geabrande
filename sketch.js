/*global createCanvas, colorMode, HSB, width, height, random, background, fill, 
          color, random,  LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, UP_ARROW, rect, ellipse, stroke, image, loadImage, keyCode,
          collideCircleCircle, text, textSize, mouseX, mouseY, strokeWeight, line, 
          mouseIsPressed, translate, point, rotate, createVector, windowWidth, windowHeight, noStroke, sqrt */

let spaceship,
  alien,
  player,
  enemy,
  bulletalien1,
  bulletalien2,
  bulletspaceship,
    hit,
    exist,
    lasers;

function preload() {}

function setup() {
  createCanvas(windowWidth, windowHeight);
  lasers = [];
  spaceship = loadImage(
    "https://cdn.glitch.com/f110bdf6-83ea-4102-a2d6-396da3461187%2F8-bit-spaceship-png-1.png?v=1595872548652"
  );
  
  alien = loadImage(
    "https://cdnb.artstation.com/p/assets/images/images/006/503/665/original/william-robinson-gun-alien-passive-gif.gif?1499108527"
  );
  enemy = new Alien();
  player = new Ship();
}

function draw() {
  background(0);
  enemy.Ashow();
  player.show();
  for(var i = lasers.length - 1; i > 0; i--){
    if(lasers[i].exist === true){
      lasers[i].show();
      lasers[i].update();
    }
    
    if(lasers[i].y <= 0){
      lasers[i].exist = false;
      lasers[i].splice(i, 1);
    }
  }
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    player.v = 3;
  }
  if (keyCode === LEFT_ARROW) {
    player.v = -3;
  }
  if(keyCode === 32){
    lasers.push(new Laser(player.x));
  }
}

function Ship() {
  this.x = windowWidth/2;
  this.scl = 50;
  this.y = windowHeight - this.scl;
  
  this.v = 0;

  this.show = function() {
    fill(255);
    image(spaceship, this.x, this.y, this.scl, this.scl);
    // rect(this.x, this.y, this.scl ,this.scl);
    
    if(this.x >= -100){
      this.x += this.v;
    }
  };
}

function Laser(xpos) {
  this.exist = true;
  this.x = xpos+25;
  this.y = windowHeight - player.scl;
  this.v = -5;
  this.update = function(){
    this.y += this.v;
    
  };
  this.show = function(){
    stroke(255);
    strokeWeight(4);
    point(this.x, this.y);
  }
}

function Alien() {
  this.Ax = 200;
  this.Ay = 0;
  this.Ascl = 100;
  this.health = 100;
  this.Ashow = function() {
    image(alien, this.Ax, this.Ay, this.Ascl, this.Ascl);
  };
  this.update = function(){
    hit = false;
    for(var i = 0; i< lasers.length; i++){
      if(lasers[i].x < this.Ax+ this.Ascl && lasers[i].x > this.Ax && lasers[i].y <= this.Ay+this.Ascl){
        hit = true;
      }
    }
  }
}
