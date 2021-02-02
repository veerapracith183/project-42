function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  angleMode(DEGREES);

  arc(50, 55, 50, 50, 0, HALF_PI);
noFill();
arc(50, 55, 60, 60, HALF_PI, PI);
arc(50, 55, 70, 70, PI, PI + QUARTER_PI);
arc(50, 55, 80, 80, PI + QUARTER_PI, TWO_PI);
}

function draw() {
  background(255,255,255);  
  drawSprites();

  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc, 0, 60, 0, 360);

  let c = map(mouseX, 0, width, 0, 175);
 
  let d = map(mouseX, 0, width, 40, 300);
  fill(255, c, 0);
  ellipse(width/2, height/2, d, d);

  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);

  push();
  rotate(scAngle);
  
  line(0,0,100,0);
  pop();
}