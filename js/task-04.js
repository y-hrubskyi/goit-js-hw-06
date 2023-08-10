const refs = {
  decrementBtnEl: document.querySelector('[data-action="decrement"]'),
  incrementBtnEl: document.querySelector('[data-action="increment"]'),
  counterEl: document.querySelector('#value'),
};
let counterValue = 0;

refs.decrementBtnEl.addEventListener('click', onDecrementBtnClick);
refs.incrementBtnEl.addEventListener('click', onIncrementBtnClick);

function onDecrementBtnClick() {
  counterValue -= 1;
  changeCounterEl();
}

function onIncrementBtnClick() {
  counterValue += 1;
  changeCounterEl();
}

function changeCounterEl() {
  refs.counterEl.textContent = counterValue;
}
