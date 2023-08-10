const categoriesListEl = document.querySelector('#categories');
const categoriesItems = categoriesListEl.querySelectorAll('li.item');

console.log('Numbers of categories:', categoriesItems.length);

categoriesItems.forEach(category => {
  const titleEl = category.querySelector('h2');
  console.log('\nCategory:', titleEl.textContent);

  const elementsListEl = category.querySelector('ul');
  console.log('Elements:', elementsListEl.children.length);
});
