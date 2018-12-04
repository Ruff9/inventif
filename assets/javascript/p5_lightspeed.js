var stars = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (i = 0; i < 1000; i++) {
    stars[i] = {
      posX: Math.random() * width - width/2,
      posY: Math.random() * height - height/2,
      size: map(Math.random(), 0, 1, 1, 3)
    }

    stars[i].originX = stars[i].posX;
    stars[i].originY = stars[i].posY;
  };
}

function draw() {
  background(0,0,20);

  fill(255);
  stroke(255);
  // noStroke();

  translate(width/2, height/2);

  var speed = map(mouseX, 0, width, 1, 1.1);

  stars.forEach(function(star) {
    // ellipse(star[0], star[1], star[2], star[2]);
    strokeWeight(star.size);
    line(star.posX, star.posY, speed*star.posX, speed*star.posY);

    star.posX = speed*star.posX;
    star.posY = speed*star.posY;

    if (Math.abs(star.posX) > width/2 || Math.abs(star.posY) > height/2) {
      star.posX = (Math.random() * width - width/2)/4;
      star.posY = (Math.random() * height - height/2)/4;
    }
  });
}