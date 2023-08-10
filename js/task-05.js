const refs = {
  inputNameEl: document.querySelector('#name-input'),
  outputNameEl: document.querySelector('#name-output'),
};

refs.inputNameEl.addEventListener('input', onInputNameInput);

function onInputNameInput(event) {
  const name = event.currentTarget.value;
  refs.outputNameEl.textContent = name || 'Anonymous';
}
