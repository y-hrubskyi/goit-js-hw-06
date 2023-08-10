const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    email: { value: email },
    password: { value: password },
  } = event.currentTarget.elements;

  if (!email || !password) {
    alert('All fields must be not empty');
    return;
  }

  const info = {
    email,
    password,
  };
  console.log(info);
  event.currentTarget.reset();
}
