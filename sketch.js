/*global createCanvas, colorMode, HSB, width, height, random, background, fill, 
          color, random,  LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, UP_ARROW, rect, ellipse, stroke, image, loadImage, keyCode,
          collideCircleCircle, text, textSize, mouseX, mouseY, strokeWeight, line, random,
          mouseIsPressed, translate, point, rotate, createVector, windowWidth, windowHeight, noStroke, sqrt, keyIsDown, soundFormats, 
          loadSound, Alien, Ship, Laser loaded, PowerUp, increasedPower, delay*/

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
  lasers,
  bg,
  p,
    health,
  puImage,
  soundBullet,
  dyingAlien;

var enemies = [];
function preload() {
  spaceship = loadImage(
    "https://cdn.glitch.com/f110bdf6-83ea-4102-a2d6-396da3461187%2F8-bit-spaceship-png-1.png?v=1595872548652"
  );
  alien = loadImage(
    "https://cdnb.artstation.com/p/assets/images/images/006/503/665/original/william-robinson-gun-alien-passive-gif.gif?1499108527"
  );
  alien.delay(200);
  bulletPlayer = loadImage(
    "https://cdn.glitch.com/f110bdf6-83ea-4102-a2d6-396da3461187%2Fbullet1done.png?v=1595871297169"
  );
  explosion = loadImage(
    "https://cdn.glitch.com/f110bdf6-83ea-4102-a2d6-396da3461187%2Fexplosion.png?v=1595953681818"
  );
  puImage = loadImage(
    "https://cdn.glitch.com/f110bdf6-83ea-4102-a2d6-396da3461187%2FpowerUp.png?v=1595956551785"
  );
  bg = loadImage(
    "https://cdn.glitch.com/f110bdf6-83ea-4102-a2d6-396da3461187%2F13c6008f2afbd4711d08898e19835a8c.gif?v=1595956002173"
  );
  dyingAlien = loadImage(
    "https://cdn.glitch.com/f110bdf6-83ea-4102-a2d6-396da3461187%2Fezgif-6-57ed89c1c56b.gif?v=1595959293618"
  );
}

function setup() {
  timer = 0;
  power = 50;
  health = 100;
  createCanvas(windowWidth, windowHeight);
  lasers = [];
  p = [];
  for (var x = 0; x < 5; x++) {
    enemies[x] = new Alien(x * 90, 0);
  }
  for (var y = 0; y < 1; y++) {
    p[y] = new increasedPower();
  }
  player = new Ship();
  //soundBullet = loadSound('scifi002.mp3', loaded);
  //soundBullet.setVolume(0.5);

}

function draw() {
  timer += 0.015;
  background(0);
  image(bg, 0, 0, width, height);
  stroke(255);
  
  text(`timer: ${Math.floor(timer)}`, 10, 100);
  text(`power: ${power}`, 10, 150);
  text(`health: ${health}`, 10, 125);
  for (var k = p.length - 1; k >= 0; k--) {
    p[k].show();
    
    
  }
  player.show();
 for (var j = enemies.length - 1; j >= 0; j--) {
    if (enemies[j].health <= 0) {
      enemies[j].dead();
      test = j;
      setTimeout(removeIt,1000);
      
    }else{
       enemies[j].show();
   }
  }
  for (var i = lasers.length - 1; i >= 0; i--) {
    lasers[i].show();
    lasers[i].update();
    if (contact(lasers[i].x, lasers[i].y) >= 0) {
      enemies[contact(lasers[i].x, lasers[i].y)].hurt(power);
      enemies[contact(lasers[i].x, lasers[i].y)].explode();
    }
    if (contact(lasers[i].x, lasers[i].y, p) >= 0) {
      p[contact(lasers[i].x, lasers[i].y, p)].activate();  
      p.splice(contact(lasers[i].x, lasers[i].y, p), 1);
    
    }
  
    if (lasers[i].y <= 0 || contact(lasers[i].x, lasers[i].y) >= 0) {
      lasers.splice(i, 1);
    }
  }
  //player movement
  if (keyIsDown(LEFT_ARROW)) {
    player.v = -5;
  } else if (keyIsDown(RIGHT_ARROW)) {
    player.v = 5;
  } else {
    player.v = 0;
  }
}

//pushes a new laser whenever space is pressed
function keyPressed() {
  if (keyCode === 32) {
    //soundBullet.play();
    lasers.push(new Laser(player.x));
  }
}

//checks if laser has contacted any enemy
function contact(x, y, arr = enemies) {
  for (var j = 0; j < arr.length; j++) {
    if (
      x < arr[j].x + arr[j].scl &&
      x > arr[j].x &&
      y < arr[j].y + 0.7 * arr[j].scl
    ) {
      return j;
    }
  }
  return -1;
}

function removeIt(){
  enemies.splice(test, 1);
}

