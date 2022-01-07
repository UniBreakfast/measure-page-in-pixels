fillWithSizeCells(wrapper, 100)

onresize = () => fillWithSizeCells(wrapper, 100)

function fillWithSizeCells(containerEl, size) {
  const rowCount = Math.ceil(innerHeight / size)
  const columnCount = Math.ceil(innerWidth / size)
  const divStyle = { width: size + 'px', height: size + 'px' }
  const containerStyle = { display: 'flex', flexWrap: 'wrap', overflow: 'hidden', width: columnCount * size + 'px', height: rowCount * size + 'px' }

  containerEl.replaceChildren()
  Object.assign(containerEl.style, containerStyle)

  for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < columnCount; j++) {
      const div = document.createElement('div')
      if (i % 2 && j % 2 || i % 2 == 0 && j % 2 == 0) {
        div.style.backgroundColor = 'grey'
      }
      Object.assign(div.style, divStyle)
      containerEl.append(div)
    }
  }
}
