const checkbox = () => {
  const checkboxes = document.querySelectorAll('.table__checkbox');
  checkboxes.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('table__checkbox--checked');
    })
  })
}

export default checkbox;