// JavaScript Document
var ctx = document.getElementById("canvas").getContext('2d');

var points = [];
var numPoints = 10;

var clearScreen = function() {
  ctx.fillStyle = "hsla(0,10%,100%,0.04)";
  ctx.fillRect(0, 0, 500, 500);
};

var wrap = function(point) {
  if (point.x > width) {
    point.x = 0;
    point.y = point.y + 11;
  }
  if (point.y > height) {
    point.y = 0;
  }
  if (point.y < 0) {
    point.y = height;
  }

};

var move = function(p) {
  var speed = p.speed;
  var direction = Math.random();
  if (direction < 0.70) { // move up 
    p.y = p.y - speed;
  } else if (direction < 0.80) {
    p.x = p.x - speed;
  } else if (direction < 0.90) {
    p.y = p.y + speed;
  } else {
    p.x = p.x + speed;
  }
}

var makeColor = function(hue, sat, light, alph) {
  return "hsla(" + hue + "," + sat + "%," + light + "%," + alph + ")";
};
var drawPoints = function() {
  clearScreen();

  ctx.strokeStyle = '';

  for (var i = 0; i < points.length; i++) {
    var point = points[i];
    var hue = point.y / 5 + 100;
    move(point);
    wrap(point);
    ctx.fillStyle = makeColor(hue, 20, 50, 0.1);
    ctx.arc(point.x,point.y,radius, 0, 2*Math.PI,true);
  }
  requestAnimationFrame(drawPoints);
};

var makePoints = function() {
  for (var i = 0; i < numPoints; i++) {
    var size = Math.random() * 15;
    var x = Math.random() * width;
    var speed = 10 - size;
    points.push({
      x: x,
      y: 250,
      size: size,
      speed: speed
    });
  }
};

makePoints();
requestAnimationFrame(drawPoints);