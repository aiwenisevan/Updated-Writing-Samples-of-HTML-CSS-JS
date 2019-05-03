// JavaScript Document
var ctx = document.getElementById("canvas").getContext('2d');
var height = 400;
var width = 400;
var points = [];
var numPoints = 30;

var clearScreen = function() {
  ctx.fillStyle = "hsla(0,50%,0%,0.1)";
  ctx.fillRect(0, 0, 400, 400);
};

var wrap = function(point) {
  if (point.x <0) {
    point.x = width;
    point.y = point.y+10;
  }
  if (point.y > height) {
    point.y = 0;
	point.x = point.x-10;
  }
  if (point.y < 0) {
    point.y = height;
	point.x = point.x*1.5
	
  }

};

var move = function(p) {
  var speed = p.speed;
  var direction = Math.random();
  if (direction < 0.30) { // move up 
    p.y = p.y - speed;
  } else if (direction < 0.60) {
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
    var hue = point.y / 4;
	var sat = 100*Math.random();
	var light = 60*Math.random();
	move(point);
    wrap(point);
    ctx.fillStyle = makeColor(hue, sat,light, 1);
    ctx.fillRect(point.x, point.y, point.size, point.size);
  }
  
  requestAnimationFrame(drawPoints);
};

var makePoints = function() {
  for (var i = 0; i < numPoints; i++) {
    var size = Math.random() * 5;
    var x = Math.random() * width;
    var speed = 10-size;
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