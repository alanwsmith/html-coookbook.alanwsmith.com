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
  // console.log('removeHighlights')

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
      for (let selector of selectors) {
        if (!set.highlights.includes(lineIndex + 1)) {
          styleAssembler.push(
            `#sectionCode${setIndex} .ace_line:nth-child(${
              lineIndex + 1
            }) ${selector} { color: var(--faded-color) }`
          )

          // } else {
          //   ;`#sectionCode${setIndex} .ace_line:nth-child(${
          //     lineIndex + 1
          //   }) ${selector} { font-weight: bold; }`
        }
      }
    })
  })

  c.styleOverride.innerHTML = styleAssembler.join('\n')

  // c.sets.forEach((set, setIndex) => {
  //   if (c.sets[setIndex].highlights.length === 0) {
  //     // c.styleOverride.innerHTML = `.ace-monokai .ace_line:nth-child(1) .ace_keyword { color: black; }`
  //     c.styleOverride.innerHTML = `#sectionCode0 .ace_line:nth-child(1) .ace_keyword { color: black; }`
  //     // c.styleOverride.innerHTML = `.ace-monokai .ace_keyword { color: red; }`
  //     // c.styleOverride.innerHTML = `body { color: green;}`
  //   }
  // })

  //// bail if no lines were selected
  ////
  //if (c.sets[c.set].highlights.length === 0) {
  //  c.styleOverride.innerHTML = `.ace-monokai .ace_line .ace_comment { color: #eee; }`
  //  return
  //}

  // console.log(c.lines.length)

  // const removers = []

  // for (let i = 0; i < c.lines.length; i++) {
  //   const lineNumber = i + 1
  //   if (!c.sets[c.set].highlights.includes(lineNumber)) {
  //     for (let x = 0; x < selectors.length; x++) {
  //       removers.push(
  //         `.ace-monokai .ace_line:nth-child(${lineNumber}) ${selectors[x]} { color: ${c.fadeColor}; }`
  //       )
  //       // console.log(selectors[x])
  //     }
  //     removers.push(
  //       `.ace-monokai .ace_line:nth-child(${lineNumber}) .ace_comment { color: #eee; }`
  //     )
  //   }
  //   // set the comment color for the lines with content
  //   else {
  //     removers.push(
  //       `.ace-monokai .ace_line:nth-child(${lineNumber}) .ace_comment { color: #eee; }`
  //     )
  //   }
  // }

  // if (c.sets[c.set].fades) {
  //   for (let f = 0; f < c.sets[c.set].fades.length; f++) {
  //     const fader = c.sets[c.set].fades[f]
  //     for (let n = 0; n < fader.spans.length; n++) {
  //       for (let x = 0; x < selectors.length; x++) {
  //         const fadeString = `.ace-monokai .ace_line:nth-child(${fader.line}) span:nth-child(${n})${selectors[x]} { color: ${c.fadeColor}; }`
  //         removers.push(fadeString)
  //         console.log(fadeString)
  //       }
  //     }
  //     console.log(fader)
  //   }
  // }

  // c.styleOverride.innerHTML = `${removers.join(' ')}`
  // console.log(c.styleOverride.innerHTML)
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
