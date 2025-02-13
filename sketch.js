// Establish colour variables
let startCol, tarCol;
let startx, starty;
let divisions;

function setup() {
    createCanvas(500, 500);
    background(220);

    colorMode(HSB);
    startCol = color(random(360), 100, 100);
    tarCol = color(random(360), 100, 100);
    startx = 50;
    starty = 50;
    divisions = 100;
}

function draw() {
    // Loop division number of times
    for (let i = 0; i < divisions; i++) {
        // Gradient
        let gradient = lerpColor(startCol, tarCol, i / divisions);
        let x = lerp(startx, startx + 200, i / divisions);

        // Draw
        stroke(gradient);
        strokeWeight(3);
        // Draw a vertical line from up to down
        line(x, starty, x, starty + 50);
    }
}
