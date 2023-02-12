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

  return newElement
}

const makeNotes = () => {
  c.sets.forEach((setData, setIndex) => {
    c.notes.push(
      makeElement(
        'div',
        `set${setIndex}`,
        setData.note,
        'contentBlock',
        null,
        null
      )
    )
  })
}

const updateCode = () => {
  const boxTop = window.contentBlock.getBoundingClientRect().top
  const targetLine = boxTop + 110
  c.notes.forEach((note, noteIndex) => {
    const noteTop = note.getBoundingClientRect().top
    const noteBottom = note.getBoundingClientRect().bottom
    if (noteTop < targetLine && noteBottom > targetLine) {
      const lineAssembler = []
      c.rawLines.forEach((rawLine, rawLineIndex) => {
        if (c.sets[noteIndex].lines.includes(rawLineIndex + 1)) {
          lineAssembler.push(rawLine)
        } else {
          lineAssembler.push(' ')
        }
      })

      if (c.sets[noteIndex].overrides) {
        c.sets[noteIndex].overrides.forEach((override) => {
          lineAssembler[override.line - 1] = override.text
        })
      }

      window.theCode.innerHTML = lineAssembler.join('\n')

      // console.log(note.id)
      // console.log(noteBottom)

      // console.log(boxTop)
      // console.log(noteTop)
    }
    //console.log(note)
  })
  //console.log(window.contentBlock.getBoundingClientRect().top)
  // console.log(window.set0.getBoundingClientRect().top)
  // console.log(c.notes)
}

const updateEverything = () => {
  // console.log('updating')
  updateCode()
}

const init = () => {
  c.notes = []
  c.rawLines = c.source.split('\n')
  makeNotes()
  updateEverything()
  window.contentBlock.addEventListener('scroll', updateEverything)
}

document.addEventListener('DOMContentLoaded', init)
