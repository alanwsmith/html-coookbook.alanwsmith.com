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
     makeEl(['pre', `lineSource_${i}`, '', 'codeWrapper'])
   }
}

const makeLineNumbersWrapper = () => {
  makeEl(['div', 'lineNumbersWrapper', '', 'codeExample'])
  // makeEl(['div', 'codeSouceWrapper', '', 'codeExample', ''])
   for (let i = 0; i < s.totalLines; i ++) {
     makeEl(['pre', `lineNumber_${i}`, '', 'lineNumbersWrapper'])
   }

  // const codeSourcesEl = document.createElement("div")
  // const codeLinesEl= document.createElement("div")
  // for (let i = 0; i < s.totalLines; i ++) {
  //   const codeSourceEl = document.createElement("div");
  //   codeSourceEl.id = `codeSource_${i}`
  //   const codeLineEl = document.createElement("div");
  //   codeLineEl.id = `codeLine_${i}`
  //    codeSourcesEl.appendChild(codeSourceEl);
  //    codeLinesEl.appendChild(codeLineEl);
  // }
  //   window.codeExample.appendChild(codeLinesEl);
  //    window.codeExample.appendChild(codeSourcesEl);
  // const placeholderEl = document.createElement("div");
  //    window.codeExample.appendChild(placeholderEl);
  // const codeButtonsEl = document.createElement("div");
  // codeButtonsEl.id = "codeButtons"
  // window.codeExample.appendChild(codeButtonsEl);

}

const handleNextClick = () => {
  if (s.currentLineSet < s.lineSets.length - 1) {
    s.currentLineSet += 1;
    outputLines();
  }
}

const handlePreviousClick = () => {
  if (s.currentLineSet > 0) {
    s.currentLineSet -= 1;
    outputLines();
  }
}

const outputLines = () => {
  for (let i = 0; i < s.totalLines; i ++) {
    const targetNumber = s.lineSets[s.currentLineSet][i]
    if (targetNumber !== -1) {
      window[`codeSource_${i}`].innerHTML = 
        s.sourceLines[i][targetNumber]

      // window[`codeLine_${i}`].innerHTML = 
      //   i + 1

    }

    // else {
    //   window[`codeSource_${i}`].innerHTML = "&nbsp;"
    //   window[`codeLine_${i}`].innerHTML = 
    //     i + 1
    // }

  }
}

const handleNumberClick = (event) => {
  s.currentLineSet = parseInt(event.target.id.split("_")[1])
  outputLines()
}

const makeButtons = () => {
  makeEl(['div', 'codeButtons', '', 'codeExample'])

  makeEl(['button', 'previousButton', 'Previous', 'codeButtons', 'click', handlePreviousClick])
  for (let i = 0; i < s.lineSets.length; i ++) {
    const buttonId = `numberButton_${i}`
    let buttonText = i === s.lineSets.length -1 ?  "Complete" : i + 1
    makeEl(['button', buttonId, buttonText, 'codeButtons', 'click', handleNumberClick])
  }

  makeEl(['button', 'nextButton', 'Next', 'codeButtons', 'click', handleNextClick])
}

const setLineCount = () => {
  s.totalLines = s.lineSets[0].length
}

const makeCodeExample = () => {
  setLineCount()
  makeLineNumbersWrapper()
  makeCodeWrapper()
  makeButtons()
  // outputLines()
}

document.addEventListener('DOMContentLoaded', makeCodeExample)
