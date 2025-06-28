var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext("2d");


function teaCup (startX, startY, colour = "black", scale = 2) {
    ctx.beginPath();
    ctx.moveTo(startX, startY);

    ctx.lineTo(startX + 42 * scale, startY);
    ctx.lineTo(startX + 42 * scale, startY + 5 * scale);
    ctx.lineTo(startX, startY + 5 * scale);

    ctx.fillStyle = colour;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(startX + 20 * scale, startY - 15 * scale, 15 * scale, Math.PI, 0, true);
    ctx.fillStyle = colour;
    ctx.fill();
}

function tableTop(startX, startY, colour = "black", scale = 1) {
    ctx.beginPath();
    ctx.moveTo(startX, startY);

    ctx.lineTo(startX + 180 * scale, startY);
    ctx.lineTo(startX + 100 * scale, startY + 50 * scale);
    ctx.lineTo(startX - 80 * scale, startY + 50 * scale);
    ctx.lineTo(startX, startY);
    ctx.closePath();

    ctx.fillStyle = colour;
    ctx.fill();
}

function tableLeg(startX, startY, colour = "black", scale = 1){
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    
    ctx.lineTo(startX * scale, startY + 150 * scale);
    ctx.lineTo(startX +  5 * scale, startY + 150 * scale);
    ctx.lineTo(startX + 5 * scale, startY + 50 * scale);
    ctx.lineTo(startX * scale, startY + 50 * scale);

    ctx.closePath();
    ctx.fillStyle = colour;
    ctx.fill();
}

function table (startX, startY, colour = "black", scale = 1) {
    
    // tableTop(startX, startY, colour, scale);
    // tableLeg(startX, startY - 50, colour, scale);
    // tableLeg(startX + 180, startY - 50, colour, scale);
    // tableLeg(startX - 80 * scale, startY, colour, scale);
    // tableLeg(startX + 100 * scale, startY, colour, scale);

    ctx.beginPath();
    ctx.ellipse(startX + 9 * scale, startY + 2.5 * scale, 3.0 * scale, 10 * scale, Math.PI / 2, 0, Math.PI * 2);
    ctx.fillStyle = colour;
    ctx.fill();
}


table(100, 200, "brown", 10);
