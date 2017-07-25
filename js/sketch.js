function setup() {
  createCanvas(windowWidth, windowHeight);
  fill("#333333")
  stroke(255);
  strokeWeight(5);
}

function draw() {
  background("#333333");
  const lineLength = min(width, height) / 20;
  const spaceBetween = lineLength * 1.5;
  for (var x = 0; x < width; x += spaceBetween) {
    for (var y = 0; y < height; y += spaceBetween) {
      drawShape(createVector(x, y), spaceBetween, lineLength);
    }
  }
}

function drawShape(center, spaceBetween, lineLength) {
  var corners = getCorners(center, spaceBetween);
  var mousePosition = createVector(mouseX, mouseY);
  var getVectorAtPosition = function(position) {
    return getVector(position, mousePosition, lineLength)
  };
  drawQuad(corners.map(function(corner) {
    return getVectorAtPosition(corner);
  })); 
}

function drawQuad(corners) {
  quad(corners[0].x, corners[0].y, corners[1].x, corners[1].y, corners[2].x, corners[2].y, corners[3].x, corners[3].y);
}

function getVector(center, position, maxLength) {
  var distance = dist(center.x, center.y, position.x, position.y);
  var length = constrain(distance, 0, maxLength * 1.5);
  var angle = atan2(center.y - position.y, center.x - position.x);
  return createVector(center.x + cos(angle) * length, center.y + sin(angle) * length);
}

function getCorners(center, space) {
  return [
    createVector(center.x, center.y),
    createVector(center.x + space, center.y),
    createVector(center.x + space, center.y + space),
    createVector(center.x, center.y + space)
  ]
}