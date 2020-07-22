/* global p5 */

function dvdSketch(p5instance) {
  let dvdImage, imageX, xVelocity, imageY, yVelocity;
  const masterVelocity = 3,
    imageWidth = 200,
    imageHeight = 150;

  p5instance.setup = () => {
    p5instance.createCanvas(300, 300);

    imageX = 0;
    imageY = 0;

    xVelocity = masterVelocity;
    yVelocity = masterVelocity;

    // We only want to load the logo once.
    dvdImage = p5instance.loadImage(
      "https://cdn.glitch.com/2c8c05ca-f0b5-426e-9d1a-07a2d87bd9f6%2Fdvd-video.jpeg?v=1594094901767"
    );
  }

  p5instance.draw = () => {
    p5instance.background(220);
    // Draw the logo at the new position.
    p5instance.image(dvdImage, imageX, imageY, imageWidth, imageHeight);

    imageX += xVelocity;

    if (imageX > p5instance.width - imageWidth) {
      xVelocity = -masterVelocity;
    } else if (imageX < 0) {
      xVelocity = masterVelocity;
    }

    imageY += yVelocity;

    if (imageY > p5instance.height - imageHeight) {
      yVelocity = -masterVelocity;
    } else if (imageY < 0) {
      yVelocity = masterVelocity;
    }
  }
}

let mySketch = new p5(dvdSketch);
let mySketch2 = new p5(dvdSketch);
