var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

/*c.fillStyle = '#373C7D'
c.fillRect(200, 100, 100, 100);*/
//line

/*c.beginPath();
c.moveTo(20, 20);
c.lineTo(100,100);
c.lineTo(100, 30);
c.closePath();
c.strokeStyle = 'blue';
c.stroke();*/

//circles

/*for (var i = 0; i < 3; i++) {
  var red = Math.floor(Math.random()* 255);
var green = Math.floor(Math.random() * 255);
var blue = Math.floor(Math.random() * 255);
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
c.beginPath();
c.arc(x, y, 50, 30, 50, false);
c.strokeStyle = "rgb("+red+","+green+"," +blue+" )";
c.stroke();
};*/



function Circle(x, y, dx, dy, radius) {
  // body...
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  
  this.draw = function(){
c.beginPath();
c.arc(this.x, this.y, this.radius, Math.PI * 2, false);
c.strokeStyle = 'yellow';
c.stroke();
  }
  
  this.update = function () {
    // body...
if (this.x + this.radius > innerWidth || this.x - this.radius < 0){
  this.dx = -this.dx;
}
if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
  this.dy = -this.dy;
}
this.x += this.dx;
this.y += this.dy;

this.draw();
  }
}


var circleArray = [];

for (var i = 0; i < 20; i++) {
  var x = Math.random() * (innerWidth - radius * 2) + radius;
  var y = Math.random() * (innerHeight - radius * 2) + radius;
  var dx = (Math.random() - 0.5) * 8;
  var dy = (Math.random() - 0.5) * 8;
  var radius = 30
  circleArray.push(new Circle(x, y, dx, dy, radius));
}

console.log(circleArray);

function animate() {
  // body...
  requestAnimationFrame(animate);
c.clearRect(0, 0, innerWidth, innerHeight);

for (var i = 0; i < circleArray.length; i++) {
  circleArray[i].update();
}

};
animate();