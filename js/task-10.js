function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  numberOfBoxesInputEl: document.querySelector(
    '#controls > input[type="number"]'
  ),
  createBoxesBtnEl: document.querySelector('[data-create]'),
  destroyBoxesBtnEl: document.querySelector('[data-destroy]'),
  boxesListEl: document.querySelector('#boxes'),
};

refs.createBoxesBtnEl.addEventListener('click', onCreateBoxesBtnClick);
refs.destroyBoxesBtnEl.addEventListener('click', onDestroyBoxesBtnClick);

function onCreateBoxesBtnClick() {
  const quantity = Number(refs.numberOfBoxesInputEl.value);

  if (!quantity) {
    alert('Enter the quantity of the boxes!');
    return;
  }

  refs.boxesListEl.innerHTML = createBoxes(quantity);
}

function createBoxes(quantity) {
  let size = 30;
  const markup = [];

  for (let i = 1; i <= quantity; i += 1) {
    markup.push(
      `<div style="margin: 0 auto; width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}">${i}</div>`
    );
    size += 10;
  }

  return markup.join('');
}

function onDestroyBoxesBtnClick() {
  refs.boxesListEl.innerHTML = '';
}
