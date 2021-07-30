const checkbox = () => {
  const checkboxes = document.querySelectorAll('.table__checkbox');
  const mainCheckbox = document.getElementById('main-checkbox');

  checkboxes.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('table__checkbox--checked');
    });

  mainCheckbox.addEventListener('click', (event) => {
    mainCheckbox.classList.toggle('table__checkbox--checked');
    checkboxes.forEach(item => {
      item.classList.toggle('table__checkbox--checked');
    });
  });

  })
}

export default checkbox;