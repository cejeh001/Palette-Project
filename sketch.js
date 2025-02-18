// Establish colour variables
let startCol, tarCol;
let startx, starty;
let divisions;

function setup() {
    createCanvas(500, 500);
    background(0);

    colorMode(HSB);
    
    divisions = 50;

    noLoop();

}

function drawPalette() {
    // colours
    startCol = color(random(180), random(100), random(100));
    tarCol = color(random(360), random(100), random(100));

    //coordinates
    startx = 50;
    starty = 50;
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
    startCol = color(random(360), 75, 100);
    tarCol = color(random(360), 75, 100);

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

function rectPalette() {

    // coordinates
    startx = 50;
    starty = 200;
    // colours
    startCol = color(random(360), random(100), random(100));
    tarCol = color(random(360), random(100), random(100));

    // Loop division number of times
    for (let i = 0; i < divisions; i+=7) {
        // Gradient
        let gradient = lerpColor(startCol, tarCol, i / divisions);
        let x = lerp(startx, startx + 250, i / divisions);

        // Draw
        fill(gradient);
        noStroke(10);
        rect(x, starty, 15, 15); // Draw a rectangle inside the palette div
    }
}

function drawMonoPalette() {
    // coordinates
    startx = 50;
    starty = 150;
    // colours
    startCol = color(360, 75, 100);
    tarCol = color(360, 75, 50);

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
    drawMonoPalette();
    rectPalette();
}