function hearta(k) {
  return 15 * Math.pow(Math.sin(k), 3);
}

function heartb(k) {
  return 12 * Math.cos(k) - 5 * Math.cos(2 * k) - 2 * Math.cos(3 * k) - Math.cos(4 * k);
}

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.translate(canvas.width / 2, canvas.height / 2);

ctx.strokeStyle = 'red';
ctx.lineWidth = 1;

let i = 0;
const maxLines = 6000;

function draw() {
  
  const x = hearta(i) * 15;
  const y = heartb(i) * -15;

  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(x, y);
  ctx.stroke();
  
  i++; 

  if (i < maxLines) {
    requestAnimationFrame(draw);
  }
}


draw();