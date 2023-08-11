const refs = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
  counter: document.querySelector('#value'),
};
let counterValue = 0;

refs.decrementBtn.addEventListener('click', onDecrementBtnClick);
refs.incrementBtn.addEventListener('click', onIncrementBtnClick);

function onDecrementBtnClick() {
  counterValue -= 1;
  changeCounterEl();
}

function onIncrementBtnClick() {
  counterValue += 1;
  changeCounterEl();
}

function changeCounterEl() {
  refs.counter.textContent = counterValue;
}
