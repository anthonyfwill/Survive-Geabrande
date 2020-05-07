/* global createCanvas, random, background, fill, color, rect, ellipse, stroke, noStroke, noFill, strokeWeight */

function setup() {
  // Code here runs only once
  createCanvas(800, 100);
}

function draw() {
  // Code here runs continuously
  // background(200,100,133);
  var size = 50;
  noFill();
  strokeWeight(1);
  ellipse(100, 50, size, size);
  ellipse(155, 50, size, size);
  ellipse(1, 50, size, size);
  ellipse(125, 50, size, 50);
  ellipse(150, 50, 50, 50);
}
