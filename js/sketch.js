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
  var mousePosition = createVector(mouseX, mouseY);
  var c1 = getVector(createVector(x, y), mousePosition, lineLength);
  var c2 = getVector(createVector(x + spaceBetween, y), mousePosition, lineLength);
  var c3 = getVector(createVector(x + spaceBetween, y + spaceBetween), mousePosition, lineLength);
  var c4 = getVector(createVector(x, y + spaceBetween), mousePosition, lineLength);
  quad(c1.x, c1.y, c2.x, c2.y, c3.x, c3.y, c4.x, c4.y);
}

function getVector(center, position, maxLength) {
  var distance = dist(center.x, center.y, position.x, position.y);
  var length = constrain(distance, 0, maxLength * 2);
  var angle = atan2(center.y - position.y, center.x - position.x);
  return createVector(center.x + cos(angle) * length, center.y + sin(angle) * length);
}