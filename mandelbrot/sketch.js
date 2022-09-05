// const vmin = Math.min(window.innerHeight, window.innerWidth);
const w = window.innerWidth; // vmin;
const h = window.innerHeight;
let scale = 1;
let xOffset = 0;
let yOffset = 0;
let scaleSlider;
let xOffsetSlider;
let yOffsetSlider;
let img;
let d = 0;
let factor = 2;

let topLeftX = -2;
let topLeftY = -2;

let bottomRightX = 2;
let bottomRightY = 2;

function setup() {
  cnv = createCanvas(w, h);
  img = createImage(w, h);
  drawMandelBrot();
}

function mousePressed() {
  console.log(mouseX, mouseY);
}

function drawMandelBrot() {
  img.loadPixels();
  for (let i = 0; i <= w; i++) {
    for (let j = 0; j <= h; j++) {
      const x = map(i, 0, w, topLeftX, bottomRightX);
      const y = map(j, 0, h, topLeftY, bottomRightY);
      const [inMandelbrot, _, iterations] = isCoordinateInMandelbrot(x, y);
      if (inMandelbrot) {
        img.set(i, j, color(map(iterations, 0, 100, 0, 255)));
      } else {
        img.set(i, j, color(0));
      }
      if (x === 1 && y === 1) {
        img.set(i, j, color(40, 40, 40));
      }
      if (y === 0) {
        img.set(i, j, color(0, 255, 255));
      }
      if (x === 0) {
        img.set(i, j, color(0, 255, 255));
      }
    }
  }
  img.updatePixels();
}

function draw() {
  image(img, 0, 0);
}

const iterations = 100;
function isCoordinateInMandelbrot(x, y) {
  let zX = 0;
  let zY = 0;
  let abs = 0;
  for (let i = 0; i <= iterations; i++) {
    const newZx = zX * zX - zY * zY + x;
    const newZy = 2 * zX * zY + y;
    zX = newZx;
    zY = newZy;
    abs = zX * zX + zY * zY;
    if (abs > 2 * 2) {
      return [false, abs, i];
    }
  }
  return [true, abs, 100];
}
