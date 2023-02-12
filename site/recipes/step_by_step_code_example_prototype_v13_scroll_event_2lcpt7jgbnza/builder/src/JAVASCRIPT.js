const _doThing_v1 = () => {
  const codeBlock = window.codeBlock
  const bottomOfCodeBlock = codeBlock.offsetHeight + codeBlock.offsetTop
  const activeItems = []

  state.items.forEach((item, itemIndex) => {
    if (item.offsetTop > bottomOfCodeBlock) {
      item.style.borderLeft = '1px solid green'
      activeItems.push(itemIndex)
    } else {
      item.style.borderLeft = '1px solid red'
    }
  })

  if (activeItems.length > 0) {
    const lineAssembler = state.lines.map((line, lineIndex) => {
      if (c.sets[activeItems[0]].lines.includes(lineIndex + 1)) {
        return line
      } else {
        return ''
      }
    })
    window.theCode.innerHTML = lineAssembler.join('\n')

    // Add the overrides
    if (c.sets[activeItems[0]].overrides) {
      c.sets[activeItems[0]].overrides.forEach((override) => {
        console.log(override)
      })
    }
  }
}

const makeElement = (
  _type,
  _id,
  _html,
  _childOf,
  _event,
  _function,
  _classes
) => {
  const newElement = document.createElement(_type)
  newElement.id = _id
  newElement.innerHTML = _html
  window[_childOf].appendChild(newElement)
  if (_event !== null) {
    newElement.addEventListener(_event, _function)
  }
  if (_classes) {
    newElement.classList.add(_classes)
  }
}

const makeNotes = () => {
  c.sets.forEach((setData, setIndex) => {
    makeElement(
      'div',
      `set${setIndex}`,
      setData.note,
      'contentBlock',
      null,
      null
    )
  })
}

const init = () => {
  // state.lines = c.source.split('\n')
  c.rawLines = c.source.split('\n')
  makeNotes()
  // state.items = document.querySelectorAll('#contentBlock > div')
  // doThing()
  // document.addEventListener('scroll', doThing)
}

document.addEventListener('DOMContentLoaded', init)
