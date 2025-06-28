var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext("2d");

function drawMainEllipseWithShadow(x, y, radiusX, radiusY, rotation, color, shadowColor) {
    ctx.beginPath();
    ctx.ellipse(x + 2, y + 5, radiusX, radiusY, rotation, 0, 2 * Math.PI);
    ctx.fillStyle = shadowColor;
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(x, y, radiusX, radiusY, rotation, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawMainEllipseWithoutShadow(x, y, radiusX, radiusY, rotation, color) {
    ctx.beginPath();
    ctx.ellipse(x, y, radiusX, radiusY, rotation, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}

function teaCup(startX, startY, colour, scale = 1) {
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

function drawMainArt() {
    drawMainEllipseWithoutShadow(450, 230, 180, 400, Math.PI / 2, "rgba(120, 120, 120, 1)");
    drawMainEllipseWithoutShadow(1050, 230, 180, 400, Math.PI / 2, "rgba(120, 120, 120, 1)");
    drawMainEllipseWithoutShadow(750, 500, 180, 400, Math.PI / 2, "rgba(120, 120, 120, 1)");
}

drawMainArt()