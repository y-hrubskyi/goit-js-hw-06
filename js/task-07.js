const refs = {
  fontSizeInput: document.querySelector('#font-size-control'),
  text: document.querySelector('#text'),
};

refs.text.style.fontSize = `${refs.fontSizeInput.value}px`;

refs.fontSizeInput.addEventListener('input', onFontSizeInputInput);

function onFontSizeInputInput(event) {
  refs.text.style.fontSize = `${event.currentTarget.value}px`;
}
