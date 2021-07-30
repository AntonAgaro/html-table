const arrowToggler = () => {
  const arrows = document.querySelectorAll('.table__toggler-arrow');
  arrows.forEach(item => {
    item.addEventListener('click', (event) => {
      item.classList.toggle('table__toggler-arrow--active');
      const showNestedRows = () => {
        const findNestedRows = () => {
          const parent = event.target.closest('tr');
          const array = [];
          let next = parent.nextElementSibling;
          while(next && next.classList.contains('table__nested-row')) {
            array.push(next);
            next = next.nextElementSibling;
          }
          return array;
        }

        const nestedRows = findNestedRows();

        nestedRows.forEach(item => {
          item.classList.toggle('table__nested-row--show');
        })
      }
      showNestedRows();
    });
  })
}

export default arrowToggler;