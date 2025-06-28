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

function drawPerson(x, y, radius, gap, color) {
    // color: false => white
    // color: true => black
    
    // Circle (Head)
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.stroke();
    if (color) {
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
        ctx.fill();
    } 
}

function drawPersonsWithHands(x, y, radius, gap, gap_between, handLength, handWidth) {
    // position :true => right hand side
    // position :false => left hand side 
    drawPerson(x, y, radius, gap, true);
    drawPerson(x + gap_between, y, radius, gap, false);

    const triangle_x = x;
    const triangle_y = y + (radius + 3 * gap);
    
    const rect_right_x = (2 * triangle_x + radius + 2 * gap) / 2;
    const rect_left_x = (2 * (triangle_x + gap_between) + radius + 2 * gap) / 2;
    const rect_y = (2 * triangle_y) / 2;
    
    ctx.save();
    ctx.rotate(0.1);
    ctx.fillRect(rect_right_x, rect_y, handLength, handWidth);
    ctx.restore();

    ctx.save(); 
    ctx.rotate(0.1);
    ctx.rect(rect_left_x, rect_y, handLength, handWidth);
    ctx.stroke();
    ctx.restore();
}    

// teaCup(100, 200, "red", 2);

function drawMainArt() {
    drawMainEllipseWithoutShadow(450, 230, 180, 400, Math.PI / 2, "rgba(120, 120, 120, 1)");
    drawMainEllipseWithoutShadow(1050, 230, 180, 400, Math.PI / 2, "rgba(120, 120, 120, 1)");
    drawMainEllipseWithoutShadow(750, 500, 180, 400, Math.PI / 2, "rgba(120, 120, 120, 1)");
}

// drawMainArt()
drawPersonsWithHands(100, 100, 20, 2, 100, 50, 10);