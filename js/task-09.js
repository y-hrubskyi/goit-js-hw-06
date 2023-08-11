function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  changeColorBtn: document.querySelector('.change-color'),
  colorText: document.querySelector('.color'),
};

refs.changeColorBtn.addEventListener('click', onChangeColorBtnClick);

function onChangeColorBtnClick(event) {
  const color = getRandomHexColor();

  document.body.style.backgroundColor = color;
  refs.colorText.textContent = color;
}
