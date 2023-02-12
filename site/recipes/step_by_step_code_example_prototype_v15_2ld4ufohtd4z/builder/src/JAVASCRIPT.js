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

const outputCode = () => {
  c.editor.setValue(c.lines.join('\n'), 1)
}

const updateCode = () => {
  const boxTop = window.contentBlock.getBoundingClientRect().top
  const targetLine = boxTop + 50
  c.notes.forEach((note, noteIndex) => {
    const noteTop = note.getBoundingClientRect().top
    const noteBottom = note.getBoundingClientRect().bottom
    if (noteTop < targetLine) {
      c.lines = []
      c.set = noteIndex
      c.rawLines.forEach((rawLine, rawLineIndex) => {
        if (c.sets[noteIndex].lines.includes(rawLineIndex + 1)) {
          c.lines.push(rawLine)
        } else {
          c.lines.push(' ')
        }
      })
    }
    updateOverrides()
    outputCode()
  })
}

const updateOverrides = () => {
  console.log('here')
  if (c.sets[c.set].overrides) {
    c.sets[c.set].overrides.forEach((override) => {
      c.lines[override.line - 1] = override.text
    })
  }
}

const updateEverything = () => {
  // console.log('updating')
  updateCode()
}

const init = () => {
  c.editor = ace.edit('editor')
  c.editor.setTheme('ace/theme/monokai')
  c.editor.session.setMode('ace/mode/rust')
  c.editor.setHighlightActiveLine(false)
  c.notes = []
  c.rawLines = c.source.split('\n')
  makeNotes()
  updateEverything()
  window.contentBlock.addEventListener('scroll', updateEverything)
}

document.addEventListener('DOMContentLoaded', init)
