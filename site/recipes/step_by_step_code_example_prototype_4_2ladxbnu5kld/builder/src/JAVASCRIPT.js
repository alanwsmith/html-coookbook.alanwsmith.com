const rawSourceCode = `fn main() {
  let alfa = String::from("apple");
  show_value(&alfa);
  println!("alfa is {alfa}");
}

fn show_value(value: &String) { 
  println!("show_value got {value}");
}`.split('\n')

const loadSourceCode = () => {
  s.sourceCode = []
  rawSourceCode.forEach((rawLine) => {
    const lineSplit = rawLine.split(' // ')
    s.sourceCode.push([...lineSplit])
  })
}

const s = {
  currentLineSet: 1,
  lineMarkers: [],
}

const lineSets = [
  {
    lines: [],
  },

  {
    lines: [`0_r`, `0_s`, `0_s`, `0_s`, `0_r`, `0_s`, `0_s`, `0_s`, `0_s`],
    text: `<ul>
    <li>Start with an empty <code>main</code> function.</li>
    </ul>`,
  },

  {
    lines: [`0_c`, `0_s`, `0_s`, `0_s`, `0_c`, `0_s`, `0_r`, `0_s`, `0_r`],
    text: `
    <ul>
    <li>The first thing we'll do is to setup a function to demonstrate passing the reference</li>
    <li>Create a second <code>show_value</code> function that takes one parameter</li>
    <li>Make the parameter a <code>String</code> reference that gets bound to a function variable named <code>value</code></li>
    <li>We know a reference because it starts with an <code>&amp;</code></li>
    </ul>`,
  },

  {
    lines: [`0_c`, `0_s`, `0_s`, `0_s`, `0_c`, `0_s`, `0_c`, `0_r`, `0_c`],
    text: `<ul>
    <li>Print out the <code>value</code> reference variable inside <code>show_value</code> to confirm it's available</li>
    </ul>`,
  },

  {
    lines: [`0_c`, `0_r`, `0_s`, `0_s`, `0_c`, `0_s`, `0_c`, `0_c`, `0_c`],
    text: `<ul>
    <li>Back in the <code>main</code> function, create the <code>alfa</code> variable we'll use with a <code>String</code> value of <code>apple</code> bound to it</li>
    </ul>
    `,
  },

  {
    lines: [`0_c`, `0_c`, `0_r`, `0_s`, `0_c`, `0_s`, `0_c`, `0_c`, `0_c`],
    text: `<ul>
    <li>Setup the call to the <code>show_value</code> function</li>
    <li>We pass a reference to <code>main</code>'s <code>alfa</code> variable by using it as an argument with the <code>&amp;</code> sign in front of it</li>
    </ul>
    `,
  },

  {
    lines: [`0_c`, `0_c`, `0_c`, `0_r`, `0_c`, `0_s`, `0_c`, `0_c`, `0_c`],
    text: `<ul>
    <li>Finally, print out the <code>alfa</code> variable in main.</li>
    <li>Because we used a reference with <code>show_value</code> ownership of the <code>String</code> value stayed with <code>alfa</code>. That means it can still access it for printing.</li>
    <li>If we hadn't used a reference, ownership would have been transferred into <code>show_value</code> and this <code>println!()</code> would have caused an error</li>
    </ul>`,
  },

  {
    lines: [`0_c`, `0_c`, `0_c`, `0_c`, `0_c`, `0_s`, `0_c`, `0_c`, `0_c`],
    text: `<ul><li>Running the code produces the output</li></ul>
    <pre>show_value got apple
alfa is apple</pre>
    `,
  },
]

const log = (msg) => {
  console.log(msg)
}

const handleNextButtonClick = () => {
  if (s.currentLineSet < lineSets.length - 1) {
    s.currentLineSet += 1
  }
  updateLines()
  updateButtons()
}

const handlePreviousButtonClick = () => {
  if (s.currentLineSet > 1) {
    s.currentLineSet -= 1
  }
  updateLines()
  updateButtons()
}

const updateLines = () => {
  const codeLineMarkerEls = document.getElementsByClassName('codeLineMarker')
  for (let x = 0; x < codeLineMarkerEls.length; x++) {
    codeLineMarkerEls[x].classList.add('hideit')
    codeLineMarkerEls[x].classList.remove('highlightCode')
  }

  for (let lineIndex = 0; lineIndex < s.sourceCode.length; lineIndex++) {
    const code = lineSets[s.currentLineSet].lines[lineIndex]
    window[`codeLine_${lineIndex}_${code}`].classList.remove('hideit')
    if (s.currentLineSet > 0) {
      const code_parts = code.split('_')
      if (code_parts[1] === 'r') {
        window[`codeLine_${lineIndex}_${code}`].classList.add('highlightCode')
      }
    }
  }
  window.contentArea.innerHTML = lineSets[s.currentLineSet].text
}

const updateButtons = () => {
  for (let lineSetIndex = 1; lineSetIndex < lineSets.length; lineSetIndex++) {
    if (s.currentLineSet === lineSetIndex) {
      window[`stepButton_${lineSetIndex}`].classList.add('activeButton')
    } else {
      window[`stepButton_${lineSetIndex}`].classList.remove('activeButton')
    }
  }
}

const makePreLines = () => {
  for (let lineIndex = 0; lineIndex < s.sourceCode.length; lineIndex++) {
    const codeLineEl = document.createElement('div')
    codeLineEl.classList.add('codeLineWrapper')
    codeLineEl.id = `codeLineWrapper${lineIndex}`
    window.codeBlock.appendChild(codeLineEl)
  }
}

const makeBaseLines = () => {
  s.sourceCode.forEach((sourceLineBatch, batchIndex) => {
    sourceLineBatch.forEach((sourceLine, lineIndex) => {
      const newLineRust = document.createElement('pre')
      newLineRust.classList.add('language-rust')
      newLineRust.classList.add('hideit')
      newLineRust.classList.add('codeLineMarker')
      newLineRust.id = `codeLine_${batchIndex}_${lineIndex}_r`
      newLineRust.innerHTML = `<code>${sourceLine}</code> `
      window[`codeLineWrapper${batchIndex}`].appendChild(newLineRust)

      const newLineCustom = document.createElement('pre')
      newLineCustom.id = `codeLine_${batchIndex}_${lineIndex}_c`
      newLineCustom.innerHTML = `${sourceLine} `
      newLineCustom.classList.add('hideit')
      newLineCustom.classList.add('codeLineMarker')
      window[`codeLineWrapper${batchIndex}`].appendChild(newLineCustom)

      const newLineSpacer = document.createElement('pre')
      newLineSpacer.id = `codeLine_${batchIndex}_${lineIndex}_s`
      newLineSpacer.innerHTML = ` `
      newLineSpacer.classList.add('hideit')
      newLineSpacer.classList.add('codeLineMarker')
      window[`codeLineWrapper${batchIndex}`].appendChild(newLineSpacer)
    })
  })
}

const handleNumberButtonClick = (event) => {
  s.currentLineSet = parseInt(event.target.id.split('_')[1])
  updateLines()
  updateButtons()
}

const addButtons = () => {
  for (let lineIndex = 1; lineIndex < lineSets.length - 1; lineIndex++) {
    const newButtonEl = document.createElement('button')
    newButtonEl.innerHTML = lineIndex
    newButtonEl.id = `stepButton_${lineIndex}`
    window.buttonWrapper.appendChild(newButtonEl)
    newButtonEl.addEventListener('click', handleNumberButtonClick)
  }
  const newButtonEl = document.createElement('button')
  newButtonEl.innerHTML = `Final`
  newButtonEl.id = `stepButton_${lineSets.length - 1}`
  window.buttonWrapper.appendChild(newButtonEl)
  newButtonEl.addEventListener('click', handleNumberButtonClick)
}

const addPreviousButton = () => {
  const previousButtonEl = document.createElement('button')
  previousButtonEl.id = 'previousSet'
  previousButtonEl.innerHTML = 'Previous'
  window.buttonWrapper.appendChild(previousButtonEl)
  window.previousSet.addEventListener('click', handlePreviousButtonClick)
}

const addNextButton = () => {
  const nextButtonEl = document.createElement('button')
  nextButtonEl.id = 'nextSet'
  nextButtonEl.innerHTML = 'Next'
  window.buttonWrapper.appendChild(nextButtonEl)
  window.nextSet.addEventListener('click', handleNextButtonClick)
}

const init = () => {
  loadSourceCode()
  makePreLines()
  makeBaseLines()
  updateLines()
  addPreviousButton()
  addButtons()
  addNextButton()
  updateButtons()
  window.nextSet.addEventListener('click', handleNextButtonClick)
}

document.addEventListener('DOMContentLoaded', init)
