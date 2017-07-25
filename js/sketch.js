function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("#333333");
  const lineLength = min(width, height) / 20;
  const spaceBetween = lineLength * 1.5;
  for (var x = 0; x < width; x += spaceBetween) {
    for (var y = 0; y < height; y += spaceBetween) {
      drawShape(x, y, spaceBetween, lineLength);
    }
  }
}

function drawShape(x, y, spaceBetween, lineLength) {
  fill("#333333")
  stroke(255);
  strokeWeight(5);
  var c1 = getVertex(x, y, lineLength);
  var c2 = getVertex(x + spaceBetween, y, lineLength);
  var c3 = getVertex(x + spaceBetween, y + spaceBetween, lineLength);
  var c4 = getVertex(x, y + spaceBetween, lineLength);
  // console.log(c1);
  quad(c1.x, c1.y, c2.x, c2.y, c3.x, c3.y, c4.x, c4.y);
}

function getVertex(x, y, maxLength) {
  var distance = dist(x, y, mouseX, mouseY);
  var length = constrain(distance, 0, maxLength * 2);
  var angle = atan2(y - mouseY, x - mouseX);
  return createVector(x + cos(angle) * length, y + sin(angle) * length);
}