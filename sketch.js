let b = [];
let numero = 1000;

function setup() {
  createCanvas(1600, 600);
}

function mouseDragged(){
  let r = random(10,50);
  let ball = new bola(mouseX, mouseY,r);  
  b.push(ball);
}

function draw() {

  background(0);
  for (let i = 0; i < b.length; i++) {
    b[i].move();
    b[i].bounce();
    b[i].display();
  }
}
