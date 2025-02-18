// Establish colour variables
let startCol, tarCol;
let startx, starty;
let divisions;

let startHue, tarHue;
let startHueSlider, tarHueSlider;

function setup() {
    createCanvas(500, 500);
    background(0);
    colorMode(HSB);
    divisions = 50;
    
    // noLoop();

    startHue = 0;
    tarHue = 0;

    //set up slider
    startHueSlider = createSlider(0, 360, 0);
    startHueSlider.position(200, 50);
    tarHueSlider = createSlider(0, 360, 0);
    tarHueSlider.position(200, 100);

    //redraw when input
    startHueSlider.input(() => redraw());
    tarHueSlider.input(() => redraw());
}

function drawPalette() {
    // colours
    startCol = color(startHue, 100, 100);
    tarCol = color(tarHue, 100, 75);

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
        noStroke();
        rect(x, starty, 25, 25); // Draw a rectangle inside the palette div
    }
}

function drawAnalogousPalette() {
    // coordinates
    startx = 50;
    starty = 100;
    // colours
    startCol = color(startHue, 75, 100);
    tarCol = color(tarHue, 75, 100);

    // Loop division number of times
    for (let i = 0; i < divisions; i+=2) {
        // Gradient
        let gradient = lerpColor(startCol, tarCol, i / divisions);
        let x = lerp(startx, startx + 250, i / divisions);

        // Draw
        fill(gradient);
        noStroke();
        // Draw a vertical line from up to down
        rect(x,starty, 25, 25);
    }
}

function rectPalette() {

    // coordinates
    startx = 50;
    starty = 200;
    // colours
    startCol = color(startHue, 85, 85 );
    tarCol = color(tarHue, 85, 95);

    // Loop division number of times
    for (let i = 0; i < divisions; i+=7) {
        // Gradient
        let gradient = lerpColor(startCol, tarCol, i / divisions);
        let x = lerp(startx, startx + 250, i / divisions);

        // Draw
        fill(gradient);
        noStroke();
        rect(x, starty, 15, 15); // Draw a rectangle inside the palette div
    }
}

function drawMonoPalette() {
    // coordinates
    startx = 50;
    starty = 150;
    // colours
    startCol = color(startHue, 75, 100);
    tarCol = color(startHue, 75, 25);

    // Loop division number of times
    for (let i = 0; i < divisions; i+=5) {
        // Gradient
        let gradient = lerpColor(startCol, tarCol, i / divisions);
        let x = lerp(startx, startx + 250, i / divisions);

        // Draw
        fill(gradient);
        noStroke();
        // Draw a vertical line from up to down
        rect(x,starty, 25, 25);
    }
}

// draw function
function draw() {
    //make sure the bg is reset
    background(0);    

    drawPalette();
    drawAnalogousPalette(); 
    drawMonoPalette();
    rectPalette();

    //set hue to slider value
    startHue = startHueSlider.value();
    tarHue = tarHueSlider.value();
}