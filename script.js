var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext("2d");


function teaCup (startX, startY, colour, scale = 1) {
    ctx.beginPath();
    ctx.moveTo(startX, startY);

    ctx.lineTo(startX + 50 * scale, startY);
    ctx.lineTo(startX + 50 * scale, startY + 5 * scale);
    ctx.lineTo(startX, startY + 5 * scale);
    ctx.closePath();

    ctx.fillStyle = colour;
    ctx.fill();
    

    ctx.beginPath();
    ctx.arc(startX + 25 * scale, startY - 10 * scale, 15 * scale, Math.PI, 0, true);
    ctx.fillStyle = colour;
    ctx.fill();
}


teaCup(100, 200, "red", 2);