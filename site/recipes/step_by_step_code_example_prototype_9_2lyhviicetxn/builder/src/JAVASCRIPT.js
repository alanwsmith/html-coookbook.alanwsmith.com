/*
let editor




const init = () => {
  console.log('init')
  loadLines()
  editor = window.stepByStepContent
  updateContent(1)
  console.log(s)
}

*/

const loadLines = () => {
  s.lines = s.source.split('\n')
}

const removeHighlights = () => {
  console.log('removeHighlights')
  s.styleOverride = document.createElement('style')
  s.styleOverride.innerHTML = `
.ace-monokai .ace_line:not(:nth-child(2)) .ace_keyword,
.ace-monokai .ace_line:not(:nth-child(2)) .ace_lparen,
.ace-monokai .ace_line:not(:nth-child(2)) .ace_rparen,
.ace-monokai .ace_line:not(:nth-child(2)) .ace_entity,
.ace-monokai .ace_line:not(:nth-child(2)) .ace_name,
.ace-monokai .ace_line:not(:nth-child(2)) .ace_function,
.ace-monokai .ace_line:not(:nth-child(2)) .ace_source,
.ace-monokai .ace_line:not(:nth-child(2)) .ace_rust

{
  color: #777;
}
`

  document.body.appendChild(s.styleOverride)
}

/*
const removeHighlights = () => {
  console.log('removeHighlights')
  // const els = document.getElementsByClassName('language-rust')
  const els = document.getElementsByClassName('ace_line')
  for (let i = 0; i <= els.length; i++) {
    console.log(els[i])
    // els[i].styles.classList.remove('ace_keyword')
  }
}
*/

const updateContent = (setIndex) => {
  s.setIndex = setIndex
  parts = []
  for (let i = 0; i <= s.setIndex; i++) {
    parts.push(s.lines[i])
  }
  s.editor.setValue(parts.join('\n'), 1)
}

const init = () => {
  loadLines()
  s.editor = ace.edit('editor')
  s.editor.setTheme('ace/theme/monokai')
  s.editor.session.setMode('ace/mode/rust')
  // updateContent(1)
  removeHighlights()
}

document.addEventListener('DOMContentLoaded', init)
