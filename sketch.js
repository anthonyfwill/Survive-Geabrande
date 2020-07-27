/*global createCanvas, colorMode, HSB, width, height, random, background, fill, 
          color, random,  LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, UP_ARROW, rect, ellipse, stroke, image, loadImage, keyCode,
          collideCircleCircle, text, textSize, mouseX, mouseY, strokeWeight, line, 
          mouseIsPressed, translate, rotate, createVector, windowWidth, windowHeight, noStroke, sqrt */
let spaceship, alien, player, bulletalien1, bulletalien2, bulletspaceship;

function preload() {
  spaceship = loadImage(
    "https://cdn.glitch.com/f110bdf6-83ea-4102-a2d6-396da3461187%2Fspaceship.gif?v=1595868040731"
  );
  alien = loadImage(
    "https://cdnb.artstation.com/p/assets/images/images/006/503/665/original/william-robinson-gun-alien-passive-gif.gif?1499108527"
  );
}

function setup() {
  colorMode(HSB, 360, 360);
  createCanvas(400, 400);
  background(95);
}

function draw() {
  spaceship = loadImage(
    "https://cdn.glitch.com/f110bdf6-83ea-4102-a2d6-396da3461187%2Fspaceship.gif?v=1595868040731"
  );
  alien = loadImage(
    "https://cdnb.artstation.com/p/assets/images/images/006/503/665/original/william-robinson-gun-alien-passive-gif.gif?1499108527"
  );
  /*player = new ship();
  player.show();
  keyPressed();*/
}
function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    player.move(1);
  } else if (keyCode === LEFT_ARROW) {
    player.move(-1);
  }
  if (keyCode === UP_ARROW) {
  } else if (keyCode === DOWN_ARROW) {
  }
}

function ship() {
  this.x = 200;
  this.y = 200;
  this.scl = 100;
  this.move = function(dir) {
    this.x += 5*dir;
  };
  this.show = function() {
    fill(255);
    
    image(alien, this.x, this.y, this.scl, this.scl);
  };
}
