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

const makeSections = () => {
  c.sets.forEach((set, setIndex) => {
    const section = makeElement(
      'section',
      `section${setIndex}`,
      '',
      'wrapper',
      null,
      null,
      'codeSection'
    )

    const header = makeElement(
      'h3',
      `sectionHeader${setIndex}`,
      set.header,
      `section${setIndex}`,
      null,
      null,
      'codeSectionHeader'
    )

    const code = makeElement(
      'div',
      `sectionCode${setIndex}`,
      `<pre><code id="codeBlock${setIndex}">${c.sets[setIndex].outputLines.join(
        '\n'
      )}</code></pre>`,
      `section${setIndex}`,
      null,
      null,
      'codeSectionCode'
    )

    const note = makeElement(
      `div`,
      `sectionNote${setIndex}`,
      set.note,
      `section${setIndex}`,
      null,
      null,
      'codeSectionNote'
    )
  })
}

const prepLines = () => {
  c.sets.forEach((set, setIndex) => {
    set.outputLines = []
    c.rawLines.forEach((line, lineIndex) => {
      if (set.lines.includes(lineIndex + 1)) {
        set.outputLines.push(line)
      } else {
        set.outputLines.push(' ')
      }
    })
  })
}

const prepOverrides = () => {
  c.sets.forEach((set, setIndex) => {
    if (set.overrides) {
      set.overrides.forEach((override) => {
        set.outputLines[override.line - 1] = override.text
      })
    }
  })
}

const init = () => {
  c.rawLines = c.source.split('\n')
  prepLines()
  prepOverrides()
  makeSections()
}

document.addEventListener('DOMContentLoaded', init)
