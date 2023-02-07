const s = {

  currentLineSet: 0,

    sourceLines: [
      [
        ` `,
        `<code class="hljs language-rust">fn main() {</code>`,
        `fn main() {`
      ],
      [
        ` `,
        `  <code>let alfa =</code>`, 
        `  let alfa = <code class="hljs langauge-rust">String::from("apple")</code>;`,
        `  let alfa = String::from("apple");`,
      ],
      [
        ` `,
        `  <code>println!()</code>;`,
        `  println!(<code>"alfa is {}"</code>);`,
        `  println!(<code>"alfa is {alfa}"</code>);`,
        `  println!("alfa is {alfa}");`
      ],
      [
        ` `,
        `  <code>println!("alfa is {alfa} again");</code>`,
        `  println!("alfa is {alfa} again");`
      ],
      [
        ` `,
        `<code>}</code>`,
        `}`
      ]
    ],

    lineSets: [
      [1, 0, 0, 0, 1],
      [2, 1, 0, 0, 2],
      [2, 2, 0, 0, 2],
      [2, 3, 1, 0, 2],
      [2, 3, 2, 0, 2],
      [2, 3, 3, 0, 2],
      [2, 3, 4, 1, 2],
      [2, 3, 4, 2, 2],
    ], 

    output: [
      "alfa is apple",
      "alfa is apple again"
    ], 

  content: [
    `<p>Create the <code>main</code> function</p>`,
    `<p>Start creating a variable named <code>alfa</code></p>`,
    `<p>Bind a <code>String</code> of &quot;apple&quot; to the <code>alfa</code> variable</p>`,
    `<p>Start making a <code>println!()<code> expression<p>`,
    `<p>Add the basic format string</p>`,
    `<p>Use the <code>alfa</code> variable in the format string</p>`,
    `<p>etc...</p>`,
    `<p>Closing remarks</p>`
  ]
}

const makeEl = (details) => {
  // format: type, id, innerHTML, childOf, event, eventFunction
  const newEl = document.createElement(details[0])
  newEl.id = details[1]
  newEl.innerHTML = details[2] !== '' ? details[2] : ''
  window[details[3]].appendChild(newEl)
  if (details[4] !== undefined) {
    newEl.addEventListener(details[4], details[5])
  }
}

const makeOutputHolder = () => {
  makeEl(['div', 'outputHolder', '', 'outputArea'])
   for (let i = 0; i < s.output.length; i ++) {
     makeEl(['pre', `outputLine_${i}`, '', 'outputHolder'])
   }
}

const makeOutputGutter = () => {
  makeEl(['div', 'outputGutter', '', 'outputArea'])
   for (let i = 0; i < s.output.length; i ++) {
     makeEl(['pre', `outputGutterLine_${i}`, 'out:', 'outputGutter'])
   }
}


const makeCodeWrapper = () => {
  makeEl(['div', 'codeWrapper', '', 'codeArea'])
   for (let i = 0; i < s.totalLines; i ++) {
     makeEl(['pre', `sourceLine_${i}`, '', 'codeWrapper'])
   }
}

const makeLineNumbersWrapper = () => {
  makeEl(['div', 'lineNumbersWrapper', '', 'codeArea'])
   for (let i = 0; i < s.totalLines; i ++) {
     makeEl(['pre', `lineNumber_${i}`, '', 'lineNumbersWrapper'])
   }
}

const handleNextClick = () => {
  if (s.currentLineSet < s.lineSets.length - 1) {
    updateEverything(s.currentLineSet + 1)
  }
}

const handlePreviousClick = () => {
  if (s.currentLineSet > 0) {
    updateEverything(s.currentLineSet - 1)
  }
}

const handleNumberClick = (event) => {
  const newIndex = parseInt(
    event.target.id.split("_")[1]
  )
  updateEverything(newIndex)
}


const updateContent = () => {
  window.contentArea.innerHTML = 
    s.content[s.currentLineSet]
}

const updateHeader = () => {
  const header = s.currentLineSet === s.lineSets.length - 1 
    ? `<h4>Output</h4>` 
    : `<h4>Step ${s.currentLineSet + 1}</h4>`
  window.headerArea.innerHTML = header
}

const updateEverything = (newIndex) => {
  s.currentLineSet = newIndex
  updateLineNumbers()
   updateSourceLines()
    updateOutput()
  updateContent()
   updateHeader()
  updateHighlights()
  updateButtonHighlights()

}

const updateButtonHighlights = () => {
   for (let i = 0; i < s.lineSets.length; i ++) {
     if (i === s.currentLineSet) {
      window[`numberButton_${i}`].classList.add('activeButton')
     } else {
      window[`numberButton_${i}`].classList.remove('activeButton')
     }
   }
}

const updateHighlights = () => {
  if (s.currentLineSet === s.lineSets.length - 1) {
    for (let i = 0; i < s.totalLines; i ++) {
      window[`sourceLine_${i}`].classList.add('hljs')
      window[`sourceLine_${i}`].classList.add('language-rust')
      hljs.highlightElement(window[`sourceLine_${i}`])
    }
  } else {
    for (let i = 0; i < s.totalLines; i ++) {
      window[`sourceLine_${i}`].classList.remove('hljs')
      window[`sourceLine_${i}`].classList.remove('language-rust')
    }
  }
}

const updateLineNumbers = () => {
   for (let i = 0; i < s.totalLines; i ++) {
     const checkIndex = s.sourceLines[i].length - 1;
     const currentIndex = s.lineSets[s.currentLineSet][i]
     const numberString = i + 1 < 10 ? `0${i + 1}` : `${i + 1}`
     if(currentIndex > 0 && currentIndex < checkIndex) {
      window[`lineNumber_${i}`].innerHTML = 
         `${numberString} <span class="pointer">&gt;</span>`
     } else {
      window[`lineNumber_${i}`].innerHTML = numberString
     }
   }
}

const updateSourceLines = () => {
  for (let i = 0; i < s.totalLines; i ++) {
    const targetNumber = s.lineSets[s.currentLineSet][i]
    window[`sourceLine_${i}`].innerHTML = s.sourceLines[i][targetNumber]
    const codeEls = window[`sourceLine_${i}`].getElementsByTagName('code')
    for (let eIndex = 0; eIndex < codeEls.length; eIndex ++ ) {
      hljs.highlightElement(codeEls[eIndex])
    }
   }
}

const makePreviousButton = () => {
  makeEl(['button', 'previousButton', '&lt;-', 'codeButtonsWrapper', 'click', handlePreviousClick])
}

const makeNumberButtons = () => {
  for (let i = 0; i < s.lineSets.length; i ++) {
    let buttonText = i === s.lineSets.length -1 ?  "Complete" : i + 1
    makeEl(['button', `numberButton_${i}`, buttonText, 'codeButtonsWrapper', 'click', handleNumberClick])
  }
}

const makeNextButton = () => {
  makeEl(['button', 'nextButton', '-&gt;', 'codeButtonsWrapper', 'click', handleNextClick])
}

const setLineCount = () => {
  s.totalLines = s.lineSets[0].length
}

const updateOutput = () => {
  if (s.currentLineSet === s.lineSets.length - 1 ) {
    for (let i = 0; i < s.output.length; i ++ ) {
      window[`outputLine_${i}`].innerHTML = s.output[i]
    }
  } 
  // clear output for moving to previous line sets
  else {
    for (let i = 0; i < s.output.length; i ++ ) {
      window[`outputLine_${i}`].innerHTML = ' '
    }
  }
}


const makeAreas = () => {
  makeEl(['div', 'headerArea', '<h4>Step 1</h4>', 'codeExample'])
  makeEl(['div', 'placeholder_1', '', 'codeExample'])
  makeEl(['div', 'contentArea', 'This is the content area', 'codeExample'])
  makeEl(['div', 'codeArea', '', 'codeExample'])
  makeEl(['div', 'placeholder_2', '', 'codeExample'])
  makeEl(['div', 'outputArea', '', 'codeExample'])
  makeEl(['div', 'placeholder_3', '', 'codeExample'])
  makeEl(['div', 'codeButtonsWrapper', '', 'codeExample'])
}


const makeCodeExample = () => {
  setLineCount()
  makeAreas()
  makeLineNumbersWrapper()
  makeCodeWrapper()
  makeOutputGutter()
  makeOutputHolder()
  makePreviousButton()
  makeNumberButtons()
  makeNextButton()
  updateEverything(0)
}

document.addEventListener('DOMContentLoaded', makeCodeExample)
