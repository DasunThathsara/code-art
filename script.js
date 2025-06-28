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

function tableLeg(startX, startY, colour = "black", scale = 1) {
    ctx.beginPath();
    ctx.moveTo(startX, startY);

    ctx.lineTo(startX * scale, startY + 150 * scale);
    ctx.lineTo(startX + 5 * scale, startY + 150 * scale);
    ctx.lineTo(startX + 5 * scale, startY + 50 * scale);
    ctx.lineTo(startX * scale, startY + 50 * scale);

    ctx.closePath();
    ctx.fillStyle = colour;
    ctx.fill();
}

function table(startX, startY, colour = "black", scale = 1) {

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

function drawPerson(x, y, radius, gap, color) {
    // color: false => white
    // color: true => black

    // Circle (Head)
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.stroke();

    if (color) {
        ctx.fillStyle = "white";
        ctx.fill();
    }
    else {
        ctx.fillStyle = "black";
        ctx.fill();
    }

    const triangle_x = x;
    const triangle_y = y + (radius + 3 * gap);
    // Triangle Body
    ctx.beginPath();
    ctx.moveTo(triangle_x, triangle_y);
    ctx.lineTo(triangle_x + radius + 2 * gap, triangle_y);
    ctx.lineTo(triangle_x, triangle_y + (3 * radius + gap));
    ctx.lineTo(triangle_x - (radius + 2 * gap), triangle_y);
    ctx.lineTo(triangle_x, triangle_y);
    ctx.closePath();
    ctx.stroke();
    
    
    if (color) {
        ctx.fillStyle = "white";
        ctx.fill();
    }
    else {
        ctx.fillStyle = "black";
        ctx.fill();
    }
}


function image1(startX = 0, startY = 0) {
    drawPerson(startX + 240, startY + 120, 20, 5, true);
    drawPerson(startX + 360, startY + 150, 20, 5, false);

    drawPerson(startX + 120, startY + 150, 20, 5, false);

    table(startX + 100, startY + 200, "brown", 15, 2);

    teaCup(startX + 120, startY + 240, "yellow", 1);

    teaCup(startX + 100, startY + 240, "yellow", 1);
    drawPerson(startX + 100, startY + 200, 20, 5, true);
    
    teaCup(startX + 200, startY + 260, "yellow", 1);
    drawPerson(startX + 220, startY + 270, 20, 5, false);

    teaCup(startX + 300, startY + 260, "yellow", 1);
    drawPerson(startX + 340, startY + 220, 20, 5, true);
}


function drawMainArt() {
    drawMainEllipseWithoutShadow(450, 230, 180, 400, Math.PI / 2, "rgba(120, 120, 120, 1)");
    drawMainEllipseWithoutShadow(1050, 230, 180, 400, Math.PI / 2, "rgba(120, 120, 120, 1)");
    drawMainEllipseWithoutShadow(750, 500, 180, 400, Math.PI / 2, "rgba(120, 120, 120, 1)");

    image1(50, 0);
}

drawMainArt()
