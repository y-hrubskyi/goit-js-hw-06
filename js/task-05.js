const refs = {
  inputName: document.querySelector('#name-input'),
  outputName: document.querySelector('#name-output'),
};

refs.inputName.addEventListener('input', onInputNameInput);

function onInputNameInput(event) {
  const name = event.currentTarget.value;
  refs.outputName.textContent = name || 'Anonymous';
}
