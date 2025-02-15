// Establish colour variables
let startCol, tarCol;
let startx, starty;
let divisions;

function setup() {
    createCanvas(500, 500);
    background(220);

    colorMode(HSB);
    startCol = color(random(360), 75, 80);
    tarCol = color(random(360), 50, 80);
    startx = 50;
    starty = 50;
    divisions = 50;

}

function drawPalette() {

    // Loop division number of times
    for (let i = 0; i < divisions; i+=2) {
        // Gradient
        let gradient = lerpColor(startCol, tarCol, i / divisions);
        let x = lerp(startx, startx + 250, i / divisions);

        // Draw
        fill(gradient);
        noStroke(10);
        rect(x, starty, 25, 25); // Draw a rectangle inside the palette div
    }
}

function drawAnalogousPalette() {
    // coordinates
    startx = 50;
    starty = 100;
    // colours
    startCol = color(35, 75, 100);
    tarCol = color(100, 75, 100);

    // Loop division number of times
    for (let i = 0; i < divisions; i+=2) {
        // Gradient
        let gradient = lerpColor(startCol, tarCol, i / divisions);
        let x = lerp(startx, startx + 250, i / divisions);

        // Draw
        fill(gradient);
        noStroke(10);
        // Draw a vertical line from up to down
        rect(x,starty, 25, 25);
    }
}

// draw normal palette function
function draw() {
    drawPalette();
    drawAnalogousPalette(); 
}