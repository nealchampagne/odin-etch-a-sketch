/** Initialize page elements */
const canvas = document.createElement('div');
const buttons = document.createElement('div');
const resetButton = document.createElement('button');
const partyButton = document.createElement('button');
const shadingButton = document.createElement('button');

canvas.setAttribute('id', 'container');
buttons.setAttribute('id', 'buttons');
resetButton.textContent = `Reset/Resize`;
partyButton.textContent = `Party Mode: Off`;
shadingButton.textContent = `Shading Mode: Off`;

document.body.appendChild(buttons);
buttons.appendChild(partyButton);
buttons.appendChild(shadingButton);
buttons.appendChild(resetButton);
document.body.appendChild(canvas);

let gridSize = 16;

/** Mode switches */
let partyMode = false;
let shadingMode = false;

/** Get user selection via button */
resetButton.addEventListener('click', () => {
  const input = prompt(`Enter 1-100 to choose your canvas resolution.`);
  if (input === null) {
    return
  } else if (input === '' || Number.isInteger(Number(input)) === false) {
    alert(`Please enter an integer value.`);
  } else if (Number(input) < 1 || Number(input) > 100) {
    alert(`Please choose a number between 1 and 100.`);
  } else {
    clearCanvas();
    gridSize = input;
    fillCanvas(gridSize);
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
    column.setAttribute('class', 'column');
    canvas.appendChild(column);
    for (j = 0; j < sideNum; j++) {
      const row = document.createElement('div');
      const pixel = document.createElement('div');
      row.setAttribute('class', 'row');
      pixel.setAttribute('class', 'pixel')

      if (shadingMode === true) {
        pixel.style.backgroundColor = 'black'
        pixel.style.opacity = 0;
      }

      row.addEventListener('mouseover', () => {
        if (partyMode === true) {
          pixel.style.backgroundColor = randomColor();
        } else if (shadingMode === true) {
          if (pixel.style.opacity <= 0.9) {
            pixel.style.opacity = +pixel.style.opacity + 0.1;
          }
        } else {
          pixel.style.backgroundColor = 'black';
        }
      });
      document.getElementById(`column${i}`).appendChild(row);
      row.appendChild(pixel);
    }
  }
};

/** Create default 16x16 canvas once the DOM is loaded */
document.addEventListener('DOMContentLoaded', () => {
  fillCanvas(gridSize);
});

/** Random color generator */
const randomColor = () => {
  return `#${Math.floor((Math.random() * 16777215)).toString(16)}`;
}

/** Toggle party mode */
partyButton.addEventListener('click', () => {
  if (partyMode === false) {
    partyMode = true;
    shadingMode = false;
    partyButton.textContent = `Party Mode: On`;
    shadingButton.textContent = `Shading Mode: Off`;
  } else {
    partyMode = false;
    partyButton.textContent = `Party Mode: Off`;
  };
  clearCanvas();
  fillCanvas(gridSize);
});

/** Toggle shading mode */
shadingButton.addEventListener('click', () => {
  if (shadingMode === false) {
    partyMode = false;
    shadingMode = true;
    partyButton.textContent = `Party Mode: Off`;
    shadingButton.textContent = `Shading Mode: On`;
  } else {
    shadingMode = false;
    shadingButton.textContent = `Shading Mode: Off`;
  };
  clearCanvas();
  fillCanvas(gridSize);
});
