const s = {
  currentLineSet: 0,
    sourceLines: [
      [
        `<code>fn main() {</code>`,
        `fn main() {`
      ],
      [
        `  <code>let alfa =</code>`, 
        `  let alfa = <code>String::from("apple")</code>;`,
        `  let alfa = String::from("apple");`,
      ],
      [
        `  <code>println!()</code>;`,
        `  println!(<code>"alfa is {}"</code>);`,
        `  println!(<code>"alfa is {alfa}"</code>);`,
        `  println!("alfa is {alfa}");`
      ],
      [
        `<code>}</code>`,
        `}`
      ]
    ],
    lineSets: [
      [0, -1, -1, 0],
      [1, 0, -1, 1],
      [1, 1, -1, 1],
      [1, 2, 0, 1],
      [1, 2, 1, 1],
      [1, 2, 2, 1],
      [1, 2, 3, 1],
    ], 

    output: [
      "alfa is apple"
    ]

}

const makeEl = (details) => {
  // format is: type, id, innerHTML, childOf, event, eventFunction
  const newEl = document.createElement(details[0])
  newEl.id = details[1]
  if (details[2] !== '') {
    newEl.innerHTML = details[2]
  }
  window[details[3]].appendChild(newEl)
  if (details[4] !== undefined) {
    newEl.addEventListener(details[4], details[5])
  }
}

const makeCodeWrapper = () => {
  makeEl(['div', 'codeWrapper', '', 'codeExample'])
   for (let i = 0; i < s.totalLines; i ++) {
     makeEl(['pre', `sourceLine_${i}`, '', 'codeWrapper'])
   }
}

const makeLineNumbersWrapper = () => {
  makeEl(['div', 'lineNumbersWrapper', '', 'codeExample'])
   for (let i = 0; i < s.totalLines; i ++) {
     makeEl(['pre', `lineNumber_${i}`, '', 'lineNumbersWrapper'])
   }
}

const handleNextClick = () => {
  if (s.currentLineSet < s.lineSets.length - 1) {
    s.currentLineSet += 1;
  updateEverything()
  }
}

const handlePreviousClick = () => {
  if (s.currentLineSet > 0) {
    s.currentLineSet -= 1;
  updateEverything()
  }
}

const handleNumberClick = (event) => {
  s.currentLineSet = parseInt(
    event.target.id.split("_")[1]
  )
  updateEverything()
}

const updateEverything = () => {
  updateLineNumbers();
  updateSourceLines()
  updateOutput()
}


const updateLineNumbers = () => {
   for (let i = 0; i < s.totalLines; i ++) {
     const checkIndex = s.sourceLines[i].length - 1;
     const currentIndex = s.lineSets[s.currentLineSet][i]
     const numberString = i + 1 < 10 ? `0${i + 1}` : `${i + 1}`
     if(currentIndex > -1 && currentIndex < checkIndex) {
      window[`lineNumber_${i}`].innerHTML = `${numberString} >`
     } else {
      window[`lineNumber_${i}`].innerHTML = numberString
     }
   }
}

const updateSourceLines = () => {
   for (let i = 0; i < s.totalLines; i ++) {
     const targetNumber = s.lineSets[s.currentLineSet][i]
     if (targetNumber !== -1) {
       window[`sourceLine_${i}`].innerHTML = s.sourceLines[i][targetNumber]
     }
      else {
        window[`sourceLine_${i}`].innerHTML = "&nbsp;"
      }
   }
}

const makePreviousButton = () => {
  makeEl(['button', 'previousButton', 'Previous', 'codeButtonsWrapper', 'click', handlePreviousClick])
}

const makeNumberButtons = () => {
  for (let i = 0; i < s.lineSets.length; i ++) {
    let buttonText = i === s.lineSets.length -1 ?  "Complete" : i + 1
    makeEl(['button', `numberButton_${i}`, buttonText, 'codeButtonsWrapper', 'click', handleNumberClick])
  }
}

const makeNextButton = () => {
  makeEl(['button', 'nextButton', 'Next', 'codeButtonsWrapper', 'click', handleNextClick])
}

const makeButtonsWrapper = () => {
  makeEl(['div', 'codeButtonsWrapper', '', 'codeExample'])
}

const makePlaceholder = () => {
  // there's probably a better way to do this with 
  // css but for now just taking up the grid slot
  // with this placeholder 
  makeEl(['div', 'codePlaceholder', '', 'codeExample'])

}

const setLineCount = () => {
  s.totalLines = s.lineSets[0].length
}

const makeOutputSpacerLines = () => {
  makeEl(['pre', `lineNumberSpacer`, ' ', 'lineNumbersWrapper'])
  makeEl(['pre', `sourceLineSpacer`, ' ', 'codeWrapper'])

  for (let i = 0; i < s.output.length; i ++) {
    makeEl(['pre', `lineNumberOutput_${i}`, 'out:', 'lineNumbersWrapper'])
    makeEl(['pre', `sourceLineOutput_${i}`, ' ', 'codeWrapper'])
  }
}

const updateOutput = () => {
  if (s.currentLineSet === s.lineSets.length - 1 ) {
    for (let i = 0; i < s.output.length; i ++ ) {
      window[`sourceLineOutput_${i}`].innerHTML = s.output[i]
    }
  } 
  // clear output for moving to previous line sets
  else {
    for (let i = 0; i < s.output.length; i ++ ) {
      window[`sourceLineOutput_${i}`].innerHTML = ' '
    }
  }
}


const makeCodeExample = () => {
  setLineCount()
  makeLineNumbersWrapper()
  makeCodeWrapper()
  makeOutputSpacerLines()
  makePlaceholder()
  makeButtonsWrapper()
  makePreviousButton()
  makeNumberButtons()
  makeNextButton()
  updateEverything()

  // updateLineNumbers()
  // updateSourceLines()
  // updateOutput()

}

document.addEventListener('DOMContentLoaded', makeCodeExample)
