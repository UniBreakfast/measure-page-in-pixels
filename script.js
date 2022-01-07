fillWithSizeCells(wrapper, 100)

onresize = () => fillWithSizeCells(wrapper, 100)

function fillWithSizeCells(containerEl, size) {
  const rowCount = Math.ceil(innerHeight / size)
  const columnCount = Math.ceil(innerWidth / size)
  const containerStyle = { width: columnCount * size + 'px', height: rowCount * size + 'px' }
  const divStyle = { width: size + 'px', height: size + 'px' }

  containerEl.replaceChildren()
  Object.assign(containerEl.style, containerStyle)

  for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < columnCount; j++) {
      const div = document.createElement('div')
      const span = document.createElement('span')
      if (i % 2 && j % 2 || i % 2 == 0 && j % 2 == 0) {
        Object.assign(div.style, {backgroundColor: 'grey', color: 'white'})
        span.innerText = 'y: ' + (i + 1) * size + 'px'
      } else {
        span.innerText = 'x: ' + (j + 1) * size + 'px'
      }
      Object.assign(div.style, divStyle)
      containerEl.append(div)
      div.append(span)
    }
  }
}
