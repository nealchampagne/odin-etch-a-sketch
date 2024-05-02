/** Initialize page elements */
const canvas = document.createElement('div');
const btn = document.createElement('button');
canvas.setAttribute('id', 'container');
btn.textContent = `Reset/Resize`;

document.body.appendChild(btn);
document.body.appendChild(canvas);

/** Get user selection via button */
btn.addEventListener('click', () => {
  const input = prompt(`Enter 1-100 to choose your canvas size.`);
  if (Number.isInteger(Number(input)) === false) {
    alert(`Please enter an integer value.`);
  } else if (Number(input) < 1 || Number(input) > 100) {
    alert(`Please choose a number between 1 and 100.`);
  } else {
    clearCanvas();
    fillCanvas(input);
  }
});

/** Clear old canvas */
const clearCanvas = () => {
  while (canvas.firstChild) {
    canvas.removeChild(canvas.lastChild);
  }
}

/** Generate desired number of squares in canvas space */
const fillCanvas = sideNum => {
  for (i = 0; i < sideNum; i++) {
    const column = document.createElement('div');
    column.setAttribute('id', `column${i}`);
    canvas.appendChild(column);
    for (j = 0; j < sideNum; j++) {
      const row = document.createElement('div');
      row.setAttribute('class', 'pixel');
      document.getElementById(`column${i}`).appendChild(row);
    }
  }
};

/** Create default 16x16 canvas once the DOM is loaded */
document.addEventListener('DOMContentLoaded', () => {
  fillCanvas(16);
});

/** Color squares on hover */