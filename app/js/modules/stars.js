const stars = () => {
  const stars = document.querySelectorAll('.table__toggler-star');
  stars.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('table__toggler-star--active');
    })
  })
}

export default stars;