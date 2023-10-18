// Get the canvas element and its context
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Set line properties
ctx.strokeStyle = "black";
ctx.lineWidth = 2;

// Draw the line
ctx.beginPath();
ctx.moveTo(200, 50); // Start point: 200 pixels from left and 50 pixels from top
ctx.lineTo(200, 150); // End point: 200 pixels from left and 350 pixels from top
ctx.stroke();

// turn this into a drawLine function and call it when needed
// when branching, need to split at a 90deg angle (45 each way)
// if its a left branch, I rotate -45deg, and if it's right I rotate 45deg

const length = 50; // Length of the line extending out. You can change this value
const angle = Math.PI / 4; // 45-degree in radians
const x2 = 200 - length * Math.cos(angle);
const y2 = 150 + length * Math.sin(angle);

// Draw the second line
ctx.beginPath();
ctx.moveTo(200, 150); // Start from the endpoint of the first line
ctx.lineTo(x2, y2);
ctx.stroke();

const angleBranch = Math.PI / 2;

const x3 = x2 - length * Math.cos(angleBranch);
const y3 = y2 + length * Math.sin(angleBranch);

// new line
ctx.beginPath();
ctx.moveTo(x2, y2);
ctx.lineTo(x3, y3);
ctx.stroke();

const angleBranch2 = angleBranch - Math.PI / 4;
const x4 = x3 - length * Math.cos(angleBranch2);
const y4 = y3 + length * Math.sin(angleBranch2);
ctx.beginPath();
ctx.moveTo(x3, y3);
ctx.lineTo(x4, y4);
ctx.stroke();
