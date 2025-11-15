let ball;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ball = new Sprite();
  ball.x = width / 2 - 200;
  ball.diameter = 50;

  for (let i = 0; i < 50; i++) {
    let block = new Sprite(
      width / 2 + random(-5, 5),
      height / 2 + random(-5, 5),
      40,
      40
    );
  }
}

function draw() {
  background(220);
  ball.moveTowards(mouse, 0.1);
}

function mousePressed() {}
