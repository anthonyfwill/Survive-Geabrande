/*global createCanvas, colorMode, HSB, width, height, random, background, fill, 
          color, random,  LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, UP_ARROW, rect, ellipse, stroke, image, loadImage, keyCode,
          collideCircleCircle, text, textSize, mouseX, mouseY, strokeWeight, line, random,
          mouseIsPressed, translate, point, rotate, createVector, windowWidth, windowHeight, noStroke, sqrt, keyIsDown, soundFormats, 
          loadSound, Alien, Ship, Laser loaded, PowerUp, fasterBullets, moreBullets, increasedPower, enemyLaser, delay
          EnemyLaser*/

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
  elasers,
  bg,
  p,
  health,
  puImage,
  soundBullet,
  aSpd,
  moreLasers,
  spawn,
  enemies,
  gameOver,
  dyingAlien,
  alienBullet,
  startFight,
    restartButton,
  alienShooting;

function preload() {
  spaceship = loadImage(
    "https://cdn.glitch.com/f110bdf6-83ea-4102-a2d6-396da3461187%2F8-bit-spaceship-png-1.png?v=1595872548652"
  );
  alien = loadImage(
    "https://cdn.glitch.com/f110bdf6-83ea-4102-a2d6-396da3461187%2Fwilliam-robinson-gun-alien-passive-gif.gif?v=1596085298751"
  );
  alien.delay(100);
  bulletPlayer = loadImage(
    "https://cdn.glitch.com/f110bdf6-83ea-4102-a2d6-396da3461187%2Fbullet1done.png?v=1595871297169"
  );
  explosion = loadImage(
    "https://cdn.glitch.com/f110bdf6-83ea-4102-a2d6-396da3461187%2Fexplosion.png?v=1595953681818"
  );
  puImage = loadImage(
    "https://cdn.glitch.com/f110bdf6-83ea-4102-a2d6-396da3461187%2Fpowerupgif.gif?v=1596085504291"
  );
  bg = loadImage(
    "https://cdn.glitch.com/f110bdf6-83ea-4102-a2d6-396da3461187%2F13c6008f2afbd4711d08898e19835a8c.gif?v=1595956002173"
  );
  dyingAlien = loadImage(
    "https://cdn.glitch.com/f110bdf6-83ea-4102-a2d6-396da3461187%2Fezgif-6-57ed89c1c56b.gif?v=1595959293618"
  );
  alienBullet = loadImage(
    "https://cdn.glitch.com/f110bdf6-83ea-4102-a2d6-396da3461187%2Falienbullet1.png?v=1595954121414"
  );
  alienShooting = loadImage(
    "https://cdn.glitch.com/f110bdf6-83ea-4102-a2d6-396da3461187%2Fwilliam-robinson-gun-alien-firing-animation.gif?v=1596044928572"
  );
}

function setup() {
  gameOver = false;
  spawn = true;
  moreLasers = false;
  startFight = false;
  aSpd = 0;
  score = 0;
  timer = 0;
  power = 50;
  health = 100;
  createCanvas(windowWidth, windowHeight);
  enemies = [];
  lasers = [];
  elasers = [];
  p = [];
  for (var x = 0; x < 5; x++) {
    enemies[x] = new Alien(x * 90, 0);
    elasers[x] = new EnemyLaser(enemies[x]);
  }

  p[0] = new increasedPower();
  p[1] = new fasterBullets();
  p[2] = new moreBullets();
  player = new Ship();
  
}

function draw() {
  
  background(0);
  image(bg, 0, 0, width, height);
  stroke(255);
  gameOver = health <= 0 ? true : false;

  text(`timer: ${Math.floor(timer)}`, 10, 100);
  text(`power: ${power}`, 10, 150);
  text(`health: ${health}`, 10, 125);
  text(`score: ${score}`, 10, 75);
  text(`bullet speed: ${aSpd + 5}`, 10, 175);
  text(`gameover: ${gameOver}`, 10, 200);
  //Spawns more Aliens when you kill them
  if (!gameOver) {
    timer += 0.015;
    if (score % 2 == 1 && spawn == true) {
      if (timer <= 10) {
        enemies.push(new Alien(random(0, windowWidth - 50), random(0, 200)));
        elasers[enemies.length - 1] = new EnemyLaser(
          enemies[enemies.length - 1]
        );
      } else {
        enemies.push(new Alien(random(0, windowWidth - 50), random(0, 200)));
        elasers[enemies.length - 1] = new EnemyLaser(
          enemies[enemies.length - 1]
        );

        enemies.push(new Alien(random(0, windowWidth - 50), random(0, 200)));
        elasers[enemies.length - 1] = new EnemyLaser(
          enemies[enemies.length - 1]
        );
      }
      spawn = false;
    } else if (score % 2 == 0) {
      spawn = true;
    }

    //Displays the powerups
    for (var k = p.length - 1; k >= 0; k--) {
      p[k].show();
    }

    //Displays Player (Spaceship)
    player.show();

    //Displays Alien lasers
    for (var j = enemies.length - 1; j >= 0; j--) {
      if (enemies[j].health <= 0) {
        enemies[j].dead();
        test = j;
        setTimeout(removeIt, 1000);
      } else {
        enemies[j].show();
        enemies[j].movement();
        if (timer > 3) {
          elasers[j].show();
          elasers[j].update();
        }
        if (
          elasers[j].x > player.x &&
          elasers[j].x < player.x + player.scl &&
          elasers[j].y > player.y
        ) {
          health -= 10;
        }
      }
    }
    //Lasers for the spaceship
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
  else{
    
      
    }
  
}

//pushes a new laser whenever space is pressed
function keyPressed() {
  if (keyCode === 32) {
    //soundBullet.play();
    lasers.push(new Laser(player.x));
    startFight = true;
    if (moreLasers) {
      lasers.push(new Laser(player.x, 2));
      lasers.push(new Laser(player.x, 0, -2));
    }
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

function removeIt() {
  enemies.splice(test, 1);

  test = 100;
}
