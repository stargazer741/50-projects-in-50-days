const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const saveBtn = document.getElementById("save");
const sizeElement = document.getElementById("size");
const colorElement = document.getElementById("color");
const clearElement = document.getElementById("clear");


let size = 20;
colorElement.value = "black";
let color = colorElement.value;
let isPressed = false;

let x;
let y;

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => {
  isPressed = false;

  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

function updateSizeOnScreen() {
  sizeElement.innerText = size;
}

increaseBtn.addEventListener("click", () => {
  size = size + 5;

  if (size > 50) {
    size = 50;
  }

  updateSizeOnScreen();
});

decreaseBtn.addEventListener("click", () => {
  size = size - 5;

  if (size < 5) {
    size = 5;
  }

  updateSizeOnScreen();
});

colorElement.addEventListener("change", (e) => {
  color = e.target.value;
});

clearElement.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

saveBtn.addEventListener("click", function () {
  /* IE and Edge */
  if(window.navigator.msSaveBlob) {
    window.navigator.msSaveBlob(canvas.msToBlob(), "image-export.png");
  } else { /* chrome and the others */
    const a = document.createElement("a");

    document.body.appendChild(a);
    a.href = canvas.toDataURL();
    a.download = "image-export.png";
    a.click();
    document.body.removeChild(a);
  }
})