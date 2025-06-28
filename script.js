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

function ellipseGroup(){
    drawMainEllipseWithoutShadow(450, 230, 180, 400, Math.PI / 2, "rgb(215, 215, 215)");
    drawMainEllipseWithoutShadow(1050, 230, 180, 400, Math.PI / 2, "rgb(215, 215, 215)");
    drawMainEllipseWithoutShadow(750, 500, 180, 400, Math.PI / 2, "rgb(215, 215, 215)");
}

function drawMainArt() {
    background();
    ellipseGroup();
    drawText(200, 430, "Fairness doesn't have color", 140, "Carattere", "brown", "alphabetic", "bold", true);
}

drawMainArt()