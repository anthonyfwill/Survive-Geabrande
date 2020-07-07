/* global createCanvas background image loadImage windowWidth 
   windowHeight width height */

let dvdImage, imageX, xVelocity, imageY, yVelocity;
const masterVelocity = 3,
  imageWidth = 200,
  imageHeight = 150;

function setup() {
  createCanvas(windowWidth, windowHeight);

  imageX = 0;
  imageY = 0;

  xVelocity = masterVelocity;
  yVelocity = masterVelocity;

  // We only want to load the logo once.
  dvdImage = loadImage(
    "https://cdn.glitch.com/2c8c05ca-f0b5-426e-9d1a-07a2d87bd9f6%2Fdvd-video.jpeg?v=1594094901767"
  );
}

function draw() {
  background(220);
  // Draw the logo at the new position.
  image(dvdImage, imageX, imageY, imageWidth, imageHeight);

  imageX += xVelocity;

  if (imageX > width - imageWidth) {
    xVelocity = -masterVelocity;
  } else if (imageX < 0) {
    xVelocity = masterVelocity;
  }

  imageY += yVelocity;

  if (imageY > height - imageHeight) {
    yVelocity = -masterVelocity;
  } else if (imageY < 0) {
    yVelocity = masterVelocity;
  }
}
