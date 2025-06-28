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

function table(startX, startY, colour = "black", scale = 1) {
    ctx.beginPath();
    ctx.ellipse(startX + 9 * scale, startY + 2.5 * scale, 3.0 * scale, 10 * scale, Math.PI / 2, 0, Math.PI * 2);
    ctx.fillStyle = colour;
    ctx.fill();
}

function drawPerson(x, y, radius, gap, color) {
    // color: false => black
    // color: true => white

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
    drawPerson(startX + 200, startY + 120, 20, 5, true); // person 11
    drawPerson(startX + 320, startY + 130, 20, 5, false); // person 12    
    drawPerson(startX + 440, startY + 130, 20, 5, true); // person 13
    drawPerson(startX + 550, startY + 160, 20, 5, false); // person 14
    drawPerson(startX + 100, startY + 150, 20, 5, false); // person 10

    table(startX + 100, startY + 200, "brown", 25);

    teaCup(startX + 110, startY + 235, "yellow", 1); // cup 10
    teaCup(startX + 420, startY + 225, "yellow", 1); // cup 13
    teaCup(startX + 190, startY + 210, "yellow", 1); // cup 11
    teaCup(startX + 320, startY + 215, "yellow", 1); // cup 12

    teaCup(startX + 100, startY + 270, "yellow", 1); // cup 1
    drawPerson(startX + 100, startY + 240, 20, 5, true); // person 1
    
    teaCup(startX + 200, startY + 300, "yellow", 1); // cup 2
    drawPerson(startX + 200, startY + 280, 20, 5, false); // person 2

    teaCup(startX + 300, startY + 300, "yellow", 1); // cup 3
    drawPerson(startX + 320, startY + 300, 20, 5, true); // person 3

    teaCup(startX + 410, startY + 280, "yellow", 1); // cup 4
    drawPerson(startX + 440, startY + 280, 20, 5, false); // person 4

    teaCup(startX + 500, startY + 280, "yellow", 1); // cup 5
    drawPerson(startX + 550, startY + 250, 20, 5, true); // person 5
}

function drawText(x, y, text, fontSize = 48, fontFamily = "Carattere", textColor = "black", textBaseline = "alphabetic", fontWeight, ifStroke = false) {
    if (fontWeight) {
        ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
    } else {
        ctx.font = `${fontSize}px ${fontFamily}`;
    }
    ctx.textBaseline = textBaseline;
    ctx.fillStyle = textColor;
    if (ifStroke) {
        ctx.strokeText(text, x, y);
    } else {
        ctx.fillText(text, x, y);
    }
}

function drawSky(color1 = "#001d3d", color2 = "#003566") {
    let gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, color1);
    gradient.addColorStop(1, color2);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawStars(count) {
    for (let i = 0; i < count; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let radius = Math.random() * 1.5;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
    }
}

function background() {
    drawSky();
    drawStars(700);
}

function ellipseGroup() {
    drawMainEllipseWithoutShadow(450, 230, 180, 400, Math.PI / 2, "rgb(215, 215, 215)");
    drawMainEllipseWithoutShadow(1050, 230, 180, 400, Math.PI / 2, "rgb(215, 215, 215)");
    drawMainEllipseWithoutShadow(750, 500, 180, 400, Math.PI / 2, "rgb(215, 215, 215)");
}

function door(x, y, width, height, doorColor, boardColor, textColor) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.fillStyle = doorColor;
    ctx.fill();
    ctx.fillRect(x, y, width, height);
    ctx.stroke();

    doorBoard(x + width / 8, y + height / 4, width - width / 4, height / 3, boardColor);
}

function doorBoard(x, y, width, height, boardColor, textColor) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.fillStyle = boardColor;
    ctx.fill();
    ctx.fillRect(x, y, width, height);
    ctx.stroke();

    doorBoardText(x, y, width, height, "black");
}

function doorBoardText(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fill();

    ctx.font = "BOLD 12px Arial";

    ctx.fillText("Colored", x + width / 6, y + height / 2.5);
    ctx.moveTo(x + width / 6, y + height / 5);
    ctx.lineTo(x + width / 1.2, y + height / 2.5);
    ctx.moveTo(x + width / 6, y + height / 2.5);
    ctx.lineTo(x + width / 1.2, y + height / 5);
    ctx.stroke();
    ctx.fillText("Washroom", x + width / 8, y + height / 1.5);
}



function drawMainArt() {
    background();
    ellipseGroup();
    drawText(200, 430, "Fairness doesn't have color", 140, "Carattere", "brown", "alphabetic", "bold", true);
    image1(80, -20);
    drawPerson(950, 70 + 150, 20, 5, false);
    door(1000, 110, 100, 160, "brown", "white");
    drawPerson(1150, 70 + 150, 20, 5, true);
    drawPerson(700, 70 + 450, 20, 5, true);
    drawPerson(760, 70 + 450, 20, 5, false);
}

drawMainArt()