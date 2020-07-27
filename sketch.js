/*global createCanvas, colorMode, HSB, width, height, random, background, fill, 
          color, random, rect, ellipse, stroke, image, loadImage, keyCode,
          collideCircleCircle, text, textSize, mouseX, mouseY, strokeWeight, line, 
          mouseIsPressed, translate, createVector, windowWidth, windowHeight, noStroke, UP_ARROW sqrt */
let spaceship, alien;
function setup() {
  colorMode(HSB, 360, 360);
  createCanvas(400,400);
  background(0);
  spaceship = loadImage('');
}

function draw() {
  
}

function ship (){
  this.pos = createVector(width/2, height/2);
  this.scl = 20;
  
  this.create = function(){
    translate(this.pos.x, this.pos.y);
    rect()
    //image(spaceship, 0, 0, this.scl, this.scl);
  }
}
