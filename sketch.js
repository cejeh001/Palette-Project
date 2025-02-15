// Establish colour variables
let startCol, tarCol;
let startx, starty;
let divisions;


function setup() {
    createCanvas(500, 500);
    background(220);

    colorMode(HSB);
    startCol = color(random(360), 75, 80);
    tarCol = color(random(360), 75, 80);
    startx = 50;
    starty = 50;
    divisions = 50;
}

function drawPalette() {
    // create pallete section
    fill(255);
    noStroke();
    rect(startx, starty , 200, 50);
    // Loop division number of times
    for (let i = 0; i < divisions; i+=4) {
        // Gradient
        let gradient = lerpColor(startCol, tarCol, i / divisions);
        let x = lerp(startx, startx + 200, i / divisions);

        // Draw
        stroke(gradient);
        strokeWeight(12);
        // Draw a vertical lin from up to down
        line(x, starty, x, starty + 50);
    }
}

function drawAnalogousPalette() {


    let num = random(360)
    startCol = color(num, 100, 100);
    tarCol = color(num + 30, 100, 100);

    // Loop division number of times
    for (let i = 0; i < divisions; i++) {
        // Gradient
        let gradient = lerpColor(startCol, tarCol, i / divisions);
        let x = lerp(startx, startx + 200, i / divisions);

        // Draw
        stroke(gradient);
        strokeWeight(10);
        // Draw a vertical line from up to down
        line(x, starty, x, starty + 50);
    }
}

// draw normal palette function
function draw() {
    drawPalette();
    drawAnalogousPalette(); 
}