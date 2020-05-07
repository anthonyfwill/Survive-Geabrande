/* global createCanvas, random, background, fill, color, rect, ellipse, stroke, noStroke, noFill, strokeWeight */

function setup() {
  // Code here runs only once
  createCanvas(800, 500);
}

function draw() {
  // Code here runs continuously
  // background(200,100,133);
  var size = 100;
  noFill();
  strokeWeight(8);
  stroke(100, 150, 255);
  ellipse(100, 100, size);
  stroke(255, 200, 0);
  ellipse(155, 150, size);
  stroke('black');
  ellipse(210, 100, size);
  stroke(50,155,50);
  ellipse(265, 150, size);
  stroke('red');
  ellipse(320, 100, size);
  strokeWeight(1);
  triangle(10, 50, 20, 20, 30, 30)
}
