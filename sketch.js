/* global createCanvas background image loadImage */

let dvdImage, imageX, xVelocity, imageY, yVelocity;

function setup(){
  createCanvas(400, 400);
  imageX = 0;
  xVelocity = 3;
  // We only want to load the logo once.
  dvdImage = loadImage("https://cdn.glitch.com/2c8c05ca-f0b5-426e-9d1a-07a2d87bd9f6%2Fdvd-video.jpeg?v=1594094901767");
}

function draw(){
  background(220);
  // Draw the logo at the new position.
  image(dvdImage, imageX, 50, 200, 150);
  
  imageX += xVelocity;
  
  if (imageX < 200) {
    xVelocity = -3;
  } else if (imageX < 0) {
    xVelocity = 3;
  }
  
  imageY += yVelocity;
  
  if (imageY < 200) {
    yVelocity = -3;
  } else if (imageY < 0) {
    yVelocity = 3;
  }
}