const validationInputEl = document.querySelector('#validation-input');

validationInputEl.addEventListener('blur', onValidationInputBlur);

function onValidationInputBlur() {
  const curentLength = validationInputEl.value.length;
  const requiedLength = Number(validationInputEl.dataset.length);

  if (curentLength === requiedLength) {
    validationInputEl.classList.add('valid');
    validationInputEl.classList.remove('invalid');
  } else {
    validationInputEl.classList.add('invalid');
    validationInputEl.classList.remove('valid');
  }
}
