fillWithSizeCells(wrapper, 50)

onresize = () => fillWithSizeCells(wrapper, 50)

function fillWithSizeCells(containerEl, size) {
  const rowCount = Math.ceil(innerHeight / size)
  const columnCount = Math.ceil(innerWidth / size)
  const divStyle = { width: size + 'px', height: size + 'px' }
  const containerStyle = { width: columnCount * size + 'px', height: rowCount * size + 'px' }

  containerEl.replaceChildren()
  Object.assign(containerEl.style, containerStyle)

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
      Object.assign(div.style, divStyle)
      containerEl.append(div)
    }
  }
}
