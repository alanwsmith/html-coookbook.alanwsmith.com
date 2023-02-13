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
        //console.log(override)
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

const updateEverything = () => {
  updateNotes()
}

const updateNotes = () => {
  const bottomOfCodeBlock =
    window.codeBlock.offsetHeight + window.codeBlock.offsetTop
  const triggerPoint = bottomOfCodeBlock + 60

  const notes = document.querySelectorAll('#contentBlock > div')

  for (let n = 0; n < notes.length; n++) {
    const noteTop = notes[n].offsetTop
    const noteBottom = notes[n].offsetTop + notes[n].offsetHeight

    if (noteTop < triggerPoint && noteBottom > triggerPoint) {
      c.currentHighlight = n
    }
  }

  for (let n = 0; n < notes.length; n++) {
    if (n === c.currentHighlight) {
      const lineAssembler = c.rawLines.map((line, lineIndex) => {
        if (c.sets[n].lines.includes(lineIndex + 1)) {
          return line
        }
      })

      if (c.sets[n].overrides) {
        c.sets[n].overrides.forEach((override) => {
          console.log(override.line)
          lineAssembler[override.line - 1] = override.text
        })
      }

      window.theCode.innerHTML = lineAssembler.join('\n')
      notes[n].style.borderLeft = '1px solid black'
    } else {
      notes[n].style.borderLeft = null
    }
  }
}

const init = () => {
  c.currentHighlight = 0
  c.currentCode = ''
  c.rawLines = c.source.split('\n')
  makeNotes()
  updateEverything()
  document.addEventListener('scroll', updateEverything)
}

document.addEventListener('DOMContentLoaded', init)
