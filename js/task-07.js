const refs = {
  fontSizeInputEl: document.querySelector('#font-size-control'),
  textEl: document.querySelector('#text'),
};

refs.fontSizeInputEl.addEventListener('input', onFontSizeInputInput);

function onFontSizeInputInput(event) {
  refs.textEl.style.fontSize = `${event.currentTarget.value}px`;
}
