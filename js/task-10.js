function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesContainerEl = document.querySelector("#boxes");
const input = document.querySelector("#controls input");
const createBtnEl = document.querySelector("#controls [data-create]");
const destroyBtnEl = document.querySelector("#controls [data-destroy]");
