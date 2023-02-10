const loadLines = () => {
  c.lines = c.source.split('\n')
}

const removeHighlights = () => {
  console.log('removeHighlights')
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

  console.log(c.lines.length)

  const removers = []

  for (let i = 0; i < c.lines.length; i++) {
    const lineNumber = i + 1
    if (!c.sets[c.set].highlights.includes(lineNumber)) {
      for (let x = 0; x < selectors.length; x++) {
        removers.push(
          `.ace-monokai .ace_line:nth-child(${lineNumber}) ${selectors[x]}`
        )
        console.log(selectors[x])
      }
    }
  }

  c.styleOverride.innerHTML = `${removers.join(', ')} {color: #777;}`
  console.log(c.styleOverride.innerHTML)
  document.body.appendChild(c.styleOverride)
}

const updateContent = () => {
  parts = []
  for (let i = 0; i <= c.lines.length; i++) {
    if (c.sets[c.set].lines.includes(i + 1)) {
      parts.push(`${c.lines[i]}\n`)
    } else {
      parts.push('\n')
    }
  }
  c.editor.setValue(parts.join(''), 1)
}

const updateEverything = (set) => {
  c.set = set
  updateContent()
}

const init = () => {
  loadLines()
  c.editor = ace.edit('editor')
  c.editor.setTheme('ace/theme/monokai')
  c.editor.session.setMode('ace/mode/rust')
  c.styleOverride = document.createElement('style')
  updateEverything(2)
  removeHighlights()
}

document.addEventListener('DOMContentLoaded', init)
