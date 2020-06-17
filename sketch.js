var vehicles = [];
let gretamp3;
let clicked = false;

function preload() {
  gretamp3 = loadSound("greta.mp3");
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  stroke(0, 255, 0);
  strokeWeight(1);

  for (var i = 0; i < drawing2.length; i++) {
    var pt = drawing2[i];
    var vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
  }
}

function draw() {
  background(0);
  textSize(30);
  if (!clicked) text("Touch or mouse click to play Sound", 50, 50);
  translate(width / 2 - 300, height / 2 - 300);

  for (var i = 0; i < vehicles.length; i += 4) {
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }
}
function mousePressed() {
  if (!gretamp3.isPlaying()) {
    gretamp3.play();
  }
  clicked = true;
}
