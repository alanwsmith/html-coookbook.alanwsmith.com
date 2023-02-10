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
  updateContent(1)
}

document.addEventListener('DOMContentLoaded', init)
