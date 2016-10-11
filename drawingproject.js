var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');
var context;


canvas.fillStyle = "pink";
canvas.fillRect(350, 350, 450, 300);

canvas.fillStyle = "pink";
canvas.fillRect(100, 150, 150, 200);

canvas.fillStyle = "pink";
canvas.fillRect(800, 150, 150, 200);

canvas.fillStyle = "whitesmoke";
canvas.fillRect(215, 235, 235, 275);

canvas.fillStyle = "whitesmoke";
canvas.fillRect(500, 35, 75, 45);

canvas.fillStyle = "whitesmoke";
canvas.fillRect(500, 550, 550, 600 );

canvas.fillStyle = "pink";
canvas.fillRect(700, 35, 55, 65);

canvas.fillStyle = "whitesmoke";
canvas.fillRect(800, 55, 85, 75);

canvas.fillStyle = "pink";
canvas.fillRect(900, 35, 35, 75);

canvas.fillStyle = "pink";
canvas.fillRect(20, 35, 50, 65 );

canvas.fillStyle = "whitesmoke"
canvas.beginPath();
canvas.arc(170, 100, 100 , 0, 2*Math.PI);
canvas.stroke();
canvas.fill();

canvas.fillStyle = "whitesmoke"
canvas.beginPath();
canvas.arc(900, 200, 200 , 150, 2*Math.PI);
canvas.stroke();
canvas.fill();

canvas.fillStyle = "pink"
canvas.beginPath();
canvas.arc(1000, 200, 200 , 150, 2*Math.PI);
canvas.stroke();
canvas.fill();

canvas.fillStyle = "whitesmoke"
canvas.beginPath();
canvas.arc(700, 200, 300 , 150, 2*Math.PI);
canvas.stroke();
canvas.fill();

canvas.fillStyle = "pink"
canvas.beginPath();
canvas.arc(320, 250, 135, 0, 2*Math.PI);
canvas.stroke();
canvas.fill();

canvas.fillStyle = "whitesmoke"
canvas.beginPath();
canvas.arc(600, 350, 200, 0, 2*Math.PI);
canvas.stroke();
canvas.fill();

canvas.fillStyle = "pink"
canvas.beginPath();
canvas.arc(810, 450, 210, 0, 2*Math.PI);
canvas.stroke();
canvas.fill();

canvas.fillStyle = "pink";
canvas.beginPath();
canvas.moveTo(150,100);
canvas.lineTo(250,0);
canvas.lineTo(270, 75);
canvas.fill();

canvas.fillStyle = "whitesmoke";
canvas.beginPath();
canvas.moveTo(300,0);
canvas.lineTo(250,200);
canvas.lineTo(380, 165);
canvas.fill();

canvas.fillStyle = "pink";
canvas.beginPath();
canvas.moveTo(600,300);
canvas.lineTo(450,400);
canvas.lineTo(390,0);
canvas.fill();

canvas.fillStyle = "whitesmoke";
canvas.beginPath();
canvas.moveTo(800,500);
canvas.lineTo(900,400);
canvas.lineTo(420,520);
canvas.fill();
