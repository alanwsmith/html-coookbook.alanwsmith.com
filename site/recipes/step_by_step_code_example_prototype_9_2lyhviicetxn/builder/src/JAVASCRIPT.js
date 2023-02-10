const loadLines = () => {
  c.lines = c.source.split('\n')
}

const removeHighlights = () => {
  console.log('removeHighlights')

  const selectors = ['.ace_keyword', '.ace_lparen', '.ace_rparen']

  console.log(c.lines.length)

  const removers = []

  for (let i = 0; i < c.lines.length; i++) {
    const lineNumber = i + 1
    if (!c.sets[c.set].lines.includes(lineNumber)) {
      for (let x = 0; x < selectors.length; x++) {
        removers.push(
          `.ace-monokai .ace_line:nth-child(${lineNumber}) ${selectors[x]}`
        )
        console.log(selectors[x])
      }
    }
  }

  // console.log(removers)

  c.styleOverride.innerHTML = `
  .ace-monokai .ace_line:nth-child(2) .ace_lparen
   {
   color: #777;
   }
  `

  c.styleOverride.innerHTML = `
  .ace-monokai .ace_line:nth-child(2) .ace_rparen
   {
   color: #777;
   }
  `

  // .ace-monokai .ace_line:nth-child(2) .ace_keyword,
  // .ace-monokai .ace_line:nth-child(2) .ace_lparen,
  // .ace-monokai .ace_line:nth-child(2) .ace_rparen,
  // .ace-monokai .ace_line:nth-child(2) .ace_entity,
  // .ace-monokai .ace_line:nth-child(2) .ace_name,
  // .ace-monokai .ace_line:nth-child(2) .ace_function,
  // .ace-monokai .ace_line:nth-child(2) .ace_source,
  // .ace-monokai .ace_line:nth-child(2) .ace_rust
  // {
  // color: #777;
  // }
  // `

  c.styleOverride.innerHTML = `
  .ace-monokai .ace_line:nth-child(2) .ace_keyword
  {
  color: #777;
  }
  `

  // c.styleOverride.innerHTML = `.ace-monokai .ace_line:nth-child(2) .ace_keyword { color: #777; }`

  const removers2 = [`.ace-monokai .ace_line:nth-child(2) .ace_keyword`]

  c.styleOverride.innerHTML = `${removers.join(', ')} {color: #777;}`

  // c.styleOverride.innerHTML = `.ace-monokai .ace_line:nth-child(2) .ace_keyword { color #777; }`
  // c.styleOverride.innerHTML = `.ace-monokai .ace_line:nth-child(2) .ace_keyword { color #777; }`

  console.log(c.styleOverride.innerHTML)
  document.body.appendChild(c.styleOverride)
}

const updateContent = (set) => {
  c.set = set
  parts = []
  for (let i = 0; i <= c.lines.length; i++) {
    parts.push(c.lines[i])
  }
  c.editor.setValue(parts.join('\n'), 1)
}

const init = () => {
  loadLines()
  c.editor = ace.edit('editor')
  c.editor.setTheme('ace/theme/monokai')
  c.editor.session.setMode('ace/mode/rust')
  c.styleOverride = document.createElement('style')
  updateContent(1)
  removeHighlights()
}

document.addEventListener('DOMContentLoaded', init)
