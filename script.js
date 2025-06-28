var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext("2d");


function drawMainEllipseWithShadow(x, y, radiusX, radiusY, rotation, color, shadowColor) {
    ctx.beginPath();
    ctx.ellipse(x+2, y + 5, radiusX, radiusY, rotation, 0, 2 * Math.PI);
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

function drawMainArt(){
    drawMainEllipseWithoutShadow(450, 230, 180, 400, Math.PI / 2, "rgba(120, 120, 120, 1)");
    drawMainEllipseWithoutShadow(1050, 230, 180, 400, Math.PI / 2, "rgba(120, 120, 120, 1)");
    drawMainEllipseWithoutShadow(750, 500, 180, 400, Math.PI / 2, "rgba(120, 120, 120, 1)");
}

drawMainArt()