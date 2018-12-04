function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0,0,20);
  noLoop();
}

function draw() {

  fill(255);
  noStroke();

  for (step = 0; step < 500; step++) {
    ellipse(Math.random() * width, Math.random() * height, 2, 2);
  }
}