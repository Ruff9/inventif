var system;
var particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  system = new ParticleSystem(createVector(width/2, height/2));
}

function draw() {
  background(20);

  if (system.particles.length < 20) {
    system.addParticle();
  }

  system.run();
}

var Particle = function(position) {
  this.acceleration = createVector(0.05, 0.05);
  this.velocity = createVector(random(-10, 10), random(-10, 10));
  this.position = position.copy();
  this.lifespan = 100;
};

Particle.prototype.run = function() {
  this.move();
  this.display();
};

Particle.prototype.move = function(){
  // if (this.position.x < width/4 && this.position.y < height/4) {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2;
  // }
  // console.log(this.position.x);
};

Particle.prototype.display = function() {
  stroke(200);
  strokeWeight(2);
  fill(127);
  ellipse(this.position.x, this.position.y, 20, 20);
};

Particle.prototype.isDead = function(){
  return this.lifespan < 0;
};

var ParticleSystem = function(position) {
  this.origin = position.copy();
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
  this.particles.push(new Particle(this.origin));
};

ParticleSystem.prototype.run = function() {
  for (var i = this.particles.length-1; i >= 0; i--) {
    var p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
};
