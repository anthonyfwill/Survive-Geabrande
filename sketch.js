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
  hit,
  score,
  playerHealth,
  timer,
  lasers;
var enemies = [];
function preload() {
  spaceship = loadImage(
    "https://cdn.glitch.com/f110bdf6-83ea-4102-a2d6-396da3461187%2F8-bit-spaceship-png-1.png?v=1595872548652"
  );
  alien = loadImage(
    "https://cdnb.artstation.com/p/assets/images/images/006/503/665/original/william-robinson-gun-alien-passive-gif.gif?1499108527"
  );
}

function setup() {
  timer = 0;
  createCanvas(windowWidth, windowHeight);
  lasers = [];

  for(var x = 0; x < 5; x++){
    enemies[x] = new Alien(x*90, 0);
  }
  player = new Ship();
}

function draw() {
  timer++;
  background(0);
  stroke(255);
  text(`timer: ${timer}`, 200, 200);

  player.show();
  for (var j = 0; j < enemies.length; j++) {
    enemies[j].show();
  }
  for (var i = lasers.length - 1; i > 0; i--) {
    lasers[i].show();
    lasers[i].update();

    if (lasers[i].y <= 0 || contact(lasers[i].x, lasers[i].y)) {
      lasers.splice(i, 1);
    }
  }
}
function contact(x, y){
   for (var j = 0; j < enemies.length; j++){
     if(x < enemies[i].x + enemies[i].scl && x > enemies[i].x && y < enemies[i].y)
  
   }
}
function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    player.v = 3;
  }
  if (keyCode === LEFT_ARROW) {
    player.v = -3;
  }
  if (keyCode === 32) {
    lasers.push(new Laser(player.x));
  }
}

function Ship() {
  this.x = windowWidth / 2;
  this.scl = 50;
  this.y = windowHeight - this.scl;

  this.v = 0;

  this.show = function() {
    image(spaceship, this.x, this.y, this.scl, this.scl);

    if (this.x < 0 - (this.scl + 10)) {
      this.x = windowWidth;
    }
    if (this.x > windowWidth) {
      this.x = 0 - this.scl;
    }
    this.x += this.v;
  };
}

function Laser(xpos) {
  this.x = xpos + 25;
  this.y = windowHeight - player.scl;
  this.v = -5;
  this.update = function() {
    this.y += this.v;
  };
  this.show = function() {
    stroke(255);
    strokeWeight(4);
    point(this.x, this.y);
  };
}

function Alien(x, y) {
  this.x = x
  this.y = y;
  this.scl = 100;
  //this.health = 100;
  this.show = function() {
    image(alien, this.x, this.y, this.scl, this.scl);
  };
  this.update = function() {
    hit = false;
    for (var i = 0; i < lasers.length; i++) {
      if (
        lasers[i].x < this.x + this.scl &&
        lasers[i].x > this.x &&
        lasers[i].y <= this.y + this.scl
      ) {
        hit = true;
      }
    }
  };
}
