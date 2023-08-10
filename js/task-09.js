function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  changeColorBtnEl: document.querySelector('.change-color'),
  colorTextEl: document.querySelector('.color'),
};

refs.changeColorBtnEl.addEventListener('click', onChangeColorBtnClick);

function onChangeColorBtnClick(event) {
  const color = getRandomHexColor();

  document.body.style.backgroundColor = color;
  refs.colorTextEl.textContent = color;
}
