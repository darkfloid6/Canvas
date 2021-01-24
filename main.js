var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

c.fillStyle = '#373C7D'
c.fillRect(200, 100, 100, 100);
//line

c.beginPath();
c.moveTo(20, 20);
c.lineTo(100,100);
c.lineTo(100, 30);
c.closePath();
c.strokeStyle = 'blue';
c.stroke();

//circles

for (var i = 0; i < 3; i++) {
  var red = Math.floor(Math.random()* 255);
var green = Math.floor(Math.random() * 255);
var blue = Math.floor(Math.random() * 255);
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
c.beginPath();
c.arc(x, y, 50, 30, 50, false);
c.strokeStyle = "rgb("+red+","+green+"," +blue+" )";
c.stroke();
};