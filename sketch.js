/*global createCanvas, colorMode, HSB, width, height, random, background, fill, 
          color, random, rect, ellipse, stroke, image, loadImage, keyCode,
          collideCircleCircle, text, textSize, mouseX, mouseY, strokeWeight, line, 
          mouseIsPressed, translate, rotate, createVector, windowWidth, windowHeight, noStroke, UP_ARROW sqrt */
let spaceship, alien, player, bulletalien;

function preload(){
  spaceship = loadImage("https://cdn.glitch.com/f110bdf6-83ea-4102-a2d6-396da3461187%2Fspaceship.gif?v=1595868040731");
  alien = loadImage("https://cdnb.artstation.com/p/assets/images/images/006/503/665/original/william-robinson-gun-alien-passive-gif.gif?1499108527");
}

function setup() {
  colorMode(HSB, 360, 360);
  createCanvas(400, 400);
  background(0);
  
}

function draw() {
  player = new ship();
  player.create();
}

function ship() {
  this.x = 200;
  this.y = 200;
  this.scl = 50;
  
  this.create = function() {
    
    
    image(alien, this.x, this.y, this.scl, this.scl);
  };
}


