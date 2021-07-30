const blocksColor = () => {
  const blocks = document.querySelectorAll('.table__td-wrapper');
  
  blocks.forEach(block => {
    block.addEventListener('mouseenter', event => {
      const childes = Array.from(block.childNodes);
      const redBlock = childes.find(item => item.className === 'table__modifire table__modifire--decrease');
      if (redBlock) {
        block.closest('td').style.background = '#FFF6F6';
      } else {
        block.closest('td').style.background = '#FAFFEE';
      }

    })
  })

  blocks.forEach(block => {
    block.addEventListener('mouseleave', () => {
      block.closest('td').style.background = "#FFFFFF";
    })
  })
}

export default blocksColor;