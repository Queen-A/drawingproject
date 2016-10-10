var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');
var context;


canvas.fillStyle = "whitesmoke";
canvas.fillRect(320, 420, 480, 630);

canvas.fillStyle = "pink";
canvas.fillRect(500, 650, 450, 340);

canvas.fillStyle = "whitesmoke";
canvas.fillRect(700, 700, 360, 300);

canvas.fillStyle = "whitesmoke";
canvas.fillRect(1000, 950, 925, 900);

canvas.fillStyle = "whitesmoke";
canvas.beginPath();
canvas.moveTo(500, 900);
canvas.lineTo(500, 790);
canvas.lineTo(900, 800);
canvas.fill();

canvas.fillStyle = "black";
canvas.beginPath();
canvas.moveTo(500, 900);
canvas.lineTo(500, 790);
canvas.lineTo(675, 800);
canvas.fill();

canvas.beginPath();
canvas.arc(100, 75, 50, 0, 2*Math.PI);
canvas.strokeStyle = '#42f4ce';
canvas.stroke();

canvas.beginPath();
canvas.arc(275, 250, 200, 0, 2*Math.PI);
canvas.strokeStyle = '#42f4ce';
canvas.stroke();

canvas.beginPath();
canvas.arc(175, 150, 125, 0, 2*Math.PI);
canvas.strokeStyle = 'whitesmoke';
canvas.stroke();

canvas.beginPath();
canvas.arc(550, 500, 450, 0, 2*Math.PI);
canvas.strokeStyle = 'pink';
canvas.stroke();
