var vehicles = [];
let gretamp3;

function preload() {
  gretamp3 = createAudio("greta.mp3");
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
  gretamp3.play();
}

function draw() {
  background(0);
  translate(width / 2 - 300, height / 2 - 300);

  for (var i = 0; i < vehicles.length; i += 4) {
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }
}
