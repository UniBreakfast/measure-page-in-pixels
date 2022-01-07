'use strict'
fillWithSizeCells(wrapper, 50)
onresize = function () { fillWithSizeCells(wrapper, 50) }

function fillWithSizeCells(containerEl, size) {
  const rowCount = Math.ceil(innerHeight / size)
  const columnCount = Math.ceil(innerWidth / size)

  containerEl.innerHTML = ''
  containerEl.style.width = columnCount * size + 'px'
  containerEl.style.height = rowCount * size + 'px'

  for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < columnCount; j++) {
      const div = document.createElement('div')
      if (i % 2 && j % 2 || i % 2 == 0 && j % 2 == 0) {
        div.innerText = 'y: ' + (i + 1) * size + 'px'
        div.classList.add('y')
      } else {
        div.innerText = 'x:\n' + (j + 1) * size + '\npx'
        div.classList.add('x')
      }
      div.style.width = div.style.height = size + 'px'
      containerEl.appendChild(div)
    }
  }
}
