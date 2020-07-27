/*global createCanvas, colorMode, HSB, width, height, random, background, fill, 
          color, random,  LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, UP_ARROW, rect, ellipse, stroke, image, loadImage, keyCode,
          collideCircleCircle, text, textSize, mouseX, mouseY, strokeWeight, line, 
          mouseIsPressed, translate, rotate, createVector, windowWidth, windowHeight, noStroke, sqrt */

let spaceship,
  alien,
  player,
  enemy,
  bulletalien1,
  bulletalien2,
  bulletspaceship;

function preload() {}

function setup() {
  createCanvas(windowWidth, windowHeight);

  spaceship = loadImage(
    "https://cdn.glitch.com/f110bdf6-83ea-4102-a2d6-396da3461187%2Fspaceship2.gif?v=1595871992652"
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
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    player.v = 3;
  }
  if (keyCode === LEFT_ARROW) {
    player.v = -3;
  }
}

function Ship() {
  this.x = windowWidth/2;
  this.y = windowHeight - scl;
  this.scl = 100;
  this.v = 0;

  this.show = function() {
    fill(255);
    //image(spaceship, this.x, this.y, this.scl, this.scl);
    rect(this.x, this.y, this.scl ,this.scl);
    this.x += this.v;
  };
}

function Laser(xpos) {
  this.x = xpos;
  this.y = windowHeight - player.scl;
}

function Alien() {
  this.Ax = 200;
  this.Ay = 200;
  this.Ascl = 100;

  this.Ashow = function() {
    image(alien, this.Ax, this.Ay, this.Ascl, this.Ascl);
  };
}
