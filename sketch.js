/*global createCanvas, colorMode, HSB, width, height, random, background, fill, 
          color, random,  LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, UP_ARROW, rect, ellipse, stroke, image, loadImage, keyCode,
          collideCircleCircle, text, textSize, mouseX, mouseY, strokeWeight, line, 
          mouseIsPressed, translate, point, rotate, createVector, windowWidth, windowHeight, noStroke, sqrt, keyIsDown */

let spaceship,
  alien,
  player,
  enemy,
  bulletPlayer,
  bulletalien1,
  bulletalien2,
  hit,
  score,
  playerHealth,
  timer,
    explosion,
  power,
  lasers;

var enemies = [];
function preload() {
  spaceship = loadImage(
    "https://cdn.glitch.com/f110bdf6-83ea-4102-a2d6-396da3461187%2F8-bit-spaceship-png-1.png?v=1595872548652"
  );
  alien = loadImage(
    "https://cdnb.artstation.com/p/assets/images/images/006/503/665/original/william-robinson-gun-alien-passive-gif.gif?1499108527"
  );
  bulletPlayer = loadImage(
    "https://cdn.glitch.com/f110bdf6-83ea-4102-a2d6-396da3461187%2Fbullet1done.png?v=1595871297169"
  );
  explosion = loadImage()
}

function setup() {
  timer = 0;
  power = 50;
  createCanvas(windowWidth, windowHeight);
  lasers = [];

  for (var x = 0; x < 5; x++) {
    enemies[x] = new Alien(x * 90, 0);
  }
  player = new Ship();
}

function draw() {
  
  timer++;
  background(0);
  stroke(255);
  text(`timer: ${timer}`, 200, 200);
  player.show();
  for (var j = enemies.length - 1; j >= 0; j--) {
    enemies[j].show();
    if (enemies[j].health <= 0) {
      enemies.splice(j, 1);
    }
  }
  for (var i = lasers.length - 1; i >= 0; i--) {
    lasers[i].show();
    lasers[i].update();
    if (contact(lasers[i].x, lasers[i].y) >= 0) {
      enemies[contact(lasers[i].x, lasers[i].y)].hurt(power);
    }

    if (lasers[i].y <= 0 || contact(lasers[i].x, lasers[i].y) >= 0) {
      lasers.splice(i, 1);
    }
  }
  if(keyIsDown(LEFT_ARROW)){
       player.v = -5;
     } else if(keyIsDown(RIGHT_ARROW)){
       player.v = 5;
     }
  else{
    player.v = 0;
  }
}


//
function keyPressed(){
  if(keyCode === 32){
    lasers.push(new Laser(player.x));
  }
}
function contact(x, y) {
  for (var j = 0; j < enemies.length; j++) {
    if (
      x < enemies[j].x + enemies[j].scl &&
      x > enemies[j].x &&
      y < enemies[j].y + 0.7 * enemies[j].scl
    ) {
      return j;
    }
  }
  return -1;
}

//Function for placing image of ship and allowing it to move left and right
function Ship() {
  this.x = windowWidth / 2;
  this.scl = 50;
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

function Laser(xpos) {
  this.x = xpos + 25;
  this.y = windowHeight - player.scl;
  this.v = -5;
  this.update = function() {
    this.y += this.v;
  };
  this.show = function() {
    image(bulletPlayer, this.x, this.y, 20, 20);
  };
}

function Alien(x, y) {
  this.x = x;
  this.y = y;
  this.scl = 70;
  this.health = 100;
  this.show = function() {
    image(alien, this.x, this.y, this.scl, this.scl);
  };
  this.hurt = function() {
    this.health -= power;
  };
}
