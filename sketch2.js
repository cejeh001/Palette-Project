// Establish color variables
let startingColor, targetColor;
const START_X = 50;
const START_Y = 50;
const DIVISIONS = 50;

function setup() {
    createCanvas(500, 500);
    background(220);

    colorMode(HSB);
    startingColor = color(random(360), 75, 80);
    targetColor = color(random(360), 75, 80);
}

function drawPalette(type) {
    // Loop division number of times
    for (let i = 0; i < DIVISIONS; i++) {
        // Gradient
        let gradient = lerpColor(startingColor, targetColor, i / DIVISIONS);
        let x = lerp(START_X, START_X + 200, i / DIVISIONS);

        // Draw
        if (type === 'normal') {
            fill(gradient);
            noStroke();
            rect(x, 0, 25, 25); // Draw a rectangle inside the palette div
        } else if (type === 'analogous') {
            stroke(gradient);
            strokeWeight(10);
            // Draw a vertical line from up to down
            line(x, START_Y, x, START_Y + 50);
        }
    }
}

function draw() {
    background(220);
    drawPalette('normal');
    // drawPalette('analogous');
}