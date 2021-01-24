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
c.stroke();
