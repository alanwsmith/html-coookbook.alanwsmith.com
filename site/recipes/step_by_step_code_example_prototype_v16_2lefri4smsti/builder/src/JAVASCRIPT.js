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
      `<pre><code id="codeBlock${setIndex}" class="language-rust">${c.sets[
        setIndex
      ].outputLines.join('\n')}</code></pre>`,
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

    set.editor = ace.edit(`sectionCode${setIndex}`)
    set.editor.setOption('maxLines', 1000)
    set.editor.setTheme('ace/theme/monokai')
    set.editor.session.setMode('ace/mode/rust')
    set.editor.setHighlightActiveLine(false)
    set.editor.setOptions({
      readOnly: true,
      highlightActiveLine: false,
      highlightGutterLine: false,
    })

    set.editor.renderer.$cursorLayer.element.style.display = 'none'
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

const removeHighlights = () => {
  const styleAssembler = []

  const selectors = [
    '.ace_keyword',
    '.ace_lparen',
    '.ace_source',
    '.ace_rust',
    '.ace_paren',
    '.ace_function',
    '.ace_entity',
    '.ace_identifier',
    '.ace_operator',
    '.ace_support',
    '.ace_constant',
    '.ace_quoted',
    '.ace_string',
    '.ace_double',
    '.ace_punctuation',
    '.ace_rparen',
  ]

  c.sets.forEach((set, setIndex) => {
    c.rawLines.forEach((line, lineIndex) => {
      if (!set.highlights.includes(lineIndex + 1)) {
        for (let selector of selectors) {
          styleAssembler.push(
            `#sectionCode${setIndex} .ace_line:nth-child(${
              lineIndex + 1
            }) ${selector} { color: var(--faded-color) }`
          )
        }
      }
    })
  })

  c.styleOverride.innerHTML = styleAssembler.join('\n')
}

const init = () => {
  c.rawLines = c.source.split('\n')
  prepLines()
  prepOverrides()
  makeSections()
  c.styleOverride = document.createElement('style')
  document.body.appendChild(c.styleOverride)
  removeHighlights()
}

document.addEventListener('DOMContentLoaded', init)
