let sourceCode = `fn main() {
  let mut alfa = String::from("apple");
  widget(&mut alfa);
  println!("alfa is {alfa}");
}

fn widget(thing: &mut String) {
  thing.push_str("pie");
}`.split('\n')

// add spacer to match line numbers
sourceCode = ['', ...sourceCode]

const s = {
  currentLineSet: 0,
  totalLines: 0,
}

const altSourceCode = [`fn widget() {`]

///////////////////////////////////////////////////

const lineSets = [
  {
    lines: [
      null,
      { source: 'main' },
      { source: 'empty' },
      { source: 'empty' },
      { source: 'empty' },
      { source: 'main' },
      { source: 'main' },
      { source: 'alt', altIndex: 0 },
      { source: 'empty' },
      { source: 'main' },
    ],
  },
  {
    lines: [
      null,
      { source: 'main' },
      { source: 'main' },
      { source: 'empty' },
      { source: 'empty' },
      { source: 'main' },
      { source: 'main' },
      { source: 'alt', altIndex: 0 },
      { source: 'empty' },
      { source: 'main' },
    ],
  },
  {
    lines: [
      null,
      { source: 'main' },
      { source: 'main' },
      { source: 'main' },
      { source: 'empty' },
      { source: 'main' },
      { source: 'main' },
      { source: 'alt', altIndex: 0 },
      { source: 'empty' },
      { source: 'main' },
    ],
  },
  {
    lines: [
      null,
      { source: 'main' },
      { source: 'main' },
      { source: 'main' },
      { source: 'empty' },
      { source: 'main' },
      { source: 'main' },
      { source: 'main' },
      { source: 'empty' },
      { source: 'main' },
    ],
  },
  {
    lines: [
      null,
      { source: 'main' },
      { source: 'main' },
      { source: 'main' },
      { source: 'empty' },
      { source: 'main' },
      { source: 'main' },
      { source: 'main' },
      { source: 'main' },
      { source: 'main' },
    ],
  },
  {
    lines: [
      null,
      { source: 'main' },
      { source: 'main' },
      { source: 'main' },
      { source: 'main' },
      { source: 'main' },
      { source: 'main' },
      { source: 'main' },
      { source: 'main' },
      { source: 'main' },
    ],
  },
  {
    lines: [
      null,
      { source: 'main' },
      { source: 'main' },
      { source: 'main' },
      { source: 'main' },
      { source: 'main' },
      { source: 'main' },
      { source: 'main' },
      { source: 'main' },
      { source: 'main' },
    ],
  },
]

const log = (msg) => {
  console.log(msg)
}

// TODO: Actually do this count
const countTotalLines = () => {
  s.totalLines = 9
}

const handlePreviousClick = (event) => {
  if (s.currentLineSet > 0) {
    s.currentLineSet -= 1
  }
  populateLines()
  highlightLines()
}

const handleNextClick = (event) => {
  if (s.currentLineSet < lineSets.length - 1) {
    s.currentLineSet += 1
  }
  populateLines()
  highlightLines()
}

const handleButtonClick = (event) => {
  s.currentLineSet = event.target.id.split('--')[1] - 1
  populateLines()
  highlightLines()
}

const makeButtons = () => {
  const buttonRowEl = document.createElement('div')
  buttonRowEl.id = 'buttonRow'
  const previousButtonEl = document.createElement('button')
  previousButtonEl.id = 'previousSet'
  previousButtonEl.innerHTML = '&nbsp;&nbsp;&nbsp;--&nbsp;&nbsp;&nbsp;'
  buttonRowEl.appendChild(previousButtonEl)
  for (let buttonNumber = 1; buttonNumber <= lineSets.length; buttonNumber++) {
    console.log(`Button number: ${buttonNumber}`)
    const newButtonEl = document.createElement('button')
    newButtonEl.innerHTML = buttonNumber
    newButtonEl.id = `chooseSet--${buttonNumber}`
    buttonRowEl.appendChild(newButtonEl)
    newButtonEl.addEventListener('click', handleButtonClick)
  }
  // log('Making buttons')
  const nextButtonEl = document.createElement('button')
  nextButtonEl.id = 'nextSet'
  nextButtonEl.innerHTML = '&nbsp;&nbsp;Next&nbsp;&nbsp;'
  buttonRowEl.appendChild(nextButtonEl)
  window.codeExample.appendChild(buttonRowEl)
  previousButtonEl.addEventListener('click', handlePreviousClick)
  nextButtonEl.addEventListener('click', handleNextClick)
}

const makeEmptyLines = () => {
  for (let num = 1; num <= s.totalLines; num++) {
    const emptyLineEl = document.createElement('div')
    emptyLineEl.id = `codeLineWrapper${num}`
    emptyLineEl.classList.add('codeLineWrapper')
    emptyLineEl.innerHTML = `<pre id="codeLinePre${num}"><code id="codeLine${num}">&nbsp;</code></pre>`
    window.codeExample.appendChild(emptyLineEl)
  }
}

const populateLines = () => {
  for (let lineNumber = 1; lineNumber <= s.totalLines; lineNumber++) {
    const source = lineSets[s.currentLineSet].lines[lineNumber].source
    if (source === 'main') {
      window[
        `codeLine${lineNumber}`
      ].innerHTML = `${sourceCode[lineNumber]}&nbsp;`
    } else if (source === 'alt') {
      const altIndex = lineSets[s.currentLineSet].lines[lineNumber].altIndex
      window[
        `codeLine${lineNumber}`
      ].innerHTML = `${altSourceCode[altIndex]}&nbsp;`
    } else {
      window[`codeLine${lineNumber}`].innerHTML = `&nbsp;`
    }
  }
}

const highlightLines = () => {
  if (s.currentLineSet > 0) {
    for (let lineNumber = 1; lineNumber <= s.totalLines; lineNumber++) {
      const priorSource =
        lineSets[s.currentLineSet - 1].lines[lineNumber].source
      const source = lineSets[s.currentLineSet].lines[lineNumber].source
      if (priorSource != source) {
        window[`codeLinePre${lineNumber}`].classList.add('newLine')
      } else {
        window[`codeLinePre${lineNumber}`].classList.remove('newLine')
      }
    }
  } else {
    // this clears the first view
    // probalby a better way to do it, but this works.
    for (let lineNumber = 1; lineNumber <= s.totalLines; lineNumber++) {
      window[`codeLinePre${lineNumber}`].classList.remove('newLine')
    }
  }
}

const init = () => {
  countTotalLines()
  makeEmptyLines()
  makeButtons()
  populateLines()
  highlightLines()
}

document.addEventListener('DOMContentLoaded', init)

// const lineSets = [
//   {
//     nums: [1, 5, 6, 13, 9],
//     text: `<p>Start with empty <code>main</code> and <code>widget</code>
//   functions</p>`,
//   },
//   {
//     nums: [1, 2, 5, 6, 13, 9],
//     text: `<p>Create a mutable <code>alfa</code> varaible bound to
//   our <code>String</code></p>`,
//   },
//   {
//     nums: [1, 2, 3, 5, 6, 13, 9],
//     text: `<p>Add a call to the <code>widget</code> function using
//   with a mutable reference to <code>alfa</code> as an argument.
//   </p>`,
//   },
//   {
//     nums: [1, 2, 3, 5, 6, 7, 9],
//     text: `<p>Update the <code>widget</code> function to accept the
//   mutable refernce and bind it to a local variable named
//   <code>thing</code></p>`,
//   },
//   {
//     nums: [1, 2, 3, 5, 6, 7, 8, 9],
//     text: `<p>Make an update to the refernce</p>`,
//   },
//   {
//     nums: [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     text: `<p>Output the value of <code>alfa</code> to show it's changed<p>`,
//   },
// ]

// const makeOutput = () => {
//   let priorLines = []
//   if (s.currentLineSet > 0) {
//     priorLines = lineSets[s.currentLineSet - 1].nums
//   }
//   // log(priorLines)
//   for (let lineNumber of lineSets[s.currentLineSet].nums) {
//     // log(`lineNumber: ${lineNumber}`)
//     const newLineOutputEl = document.createElement('div')
//     let lineClass = 'existingLine'
//     if (!priorLines.includes(lineNumber)) {
//       // log(`newLine class: ${lineNumber}`)
//       lineClass = 'newLine'
//     }
//     newLineOutputEl.innerHTML = `<pre class="${lineClass}"><code>${sourceCode[lineNumber]}</code></pre>`
//     window.codeExample.appendChild(newLineOutputEl)
//   }
// }

// const addPaddingLines = () => {
//   for (
//     let padNum = lineSets[s.currentLineSet].nums.length;
//     padNum < s.totalLines;
//     padNum++
//   ) {
//     // log(`Padding line: ${padNum}`)
//     const padLineEl = document.createElement('div')
//     padLineEl.innerHTML = `<pre class="padLine"><code>&nbsp;</code></pre>`
//     window.codeExample.appendChild(padLineEl)
//   }
// }

// const countMaxLines = () => {
//   lineSets.forEach((lineSet) => {
//     if (lineSet.nums.length > s.totalLines) {
//       s.totalLines = lineSet.nums.length
//     }
//   })
//   log(`Max lines: ${s.totalLines}`)
// }

// const handleButtonClick = (event) => {
//   s.currentLineSet = event.target.id.split('--')[1] - 1
//   clearLines()
//   // updateLines()
//   populateLines()
//   highlightLines()
// }

// const makeButtons = () => {
//   const buttonRowEl = document.createElement('div')
//   buttonRowEl.id = 'buttonRow'
//   const previousButtonEl = document.createElement('button')
//   previousButtonEl.id = 'previousSet'
//   previousButtonEl.innerHTML = '&nbsp;&nbsp;&nbsp;--&nbsp;&nbsp;&nbsp;'
//   buttonRowEl.appendChild(previousButtonEl)
//   for (let buttonNumber = 1; buttonNumber <= lineSets.length; buttonNumber++) {
//     console.log(`Button number: ${buttonNumber}`)
//     const newButtonEl = document.createElement('button')
//     newButtonEl.innerHTML = buttonNumber
//     newButtonEl.id = `chooseSet--${buttonNumber}`
//     buttonRowEl.appendChild(newButtonEl)
//     newButtonEl.addEventListener('click', handleButtonClick)
//   }
//   // log('Making buttons')
//   const nextButtonEl = document.createElement('button')
//   nextButtonEl.id = 'nextSet'
//   nextButtonEl.innerHTML = '&nbsp;&nbsp;Next&nbsp;&nbsp;'
//   buttonRowEl.appendChild(nextButtonEl)
//   window.codeExample.appendChild(buttonRowEl)
//   previousButtonEl.addEventListener('click', handlePreviousClick)
//   nextButtonEl.addEventListener('click', handleNextClick)
// }

// const handlePreviousClick = (event) => {
//   if (s.currentLineSet > 0) {
//     s.currentLineSet -= 1
//     clearLines()
//     // updateLines()
//     highlightLines()
//     populateLines()
//   }
// }

// const handleNextClick = (event) => {
//   if (s.currentLineSet < lineSets.length - 1) {
//     s.currentLineSet += 1
//     clearLines()
//     // updateLines()
//     highlightLines()
//     populateLines()
//   }
// }

// const makeEmptyLines = () => {
//   for (let num = 1; num <= s.totalLines; num++) {
//     const emptyLineEl = document.createElement('div')
//     emptyLineEl.id = `codeLineWrapper${num}`
//     emptyLineEl.classList.add('codeLineWrapper')
//     emptyLineEl.innerHTML = `<pre id="codeLinePre${num}"><code id="codeLine${num}">&nbsp;</code></pre>`
//     window.codeExample.appendChild(emptyLineEl)
//   }
// }

// const populateLines = () => {
//   let targetLine = 1
//   for (let sourceLine of lineSets[s.currentLineSet].nums) {
//     // The `&nbsp;` makes sure line has height for now
//     window[
//       `codeLine${targetLine}`
//     ].innerHTML = `${sourceCode[sourceLine]}&nbsp;`
//     targetLine += 1
//   }
// }

// const highlightLines = () => {
//   // clean up the reaming lines
//   for (let extraLine = 1; extraLine < s.totalLines; extraLine++) {
//     window[`codeLinePre${extraLine}`].classList.remove('newLine')
//   }
//   if (s.currentLineSet > 0) {
//     const previousLines = lineSets[s.currentLineSet - 1].nums
//     let targetLine = 1
//     for (let sourceLine of lineSets[s.currentLineSet].nums) {
//       // adding `&nbsp;` for now to make sure line has height
//       if (!previousLines.includes(sourceLine)) {
//         window[`codeLinePre${targetLine}`].classList.add('newLine')
//       } else {
//         window[`codeLinePre${targetLine}`].classList.remove('newLine')
//       }
//       targetLine += 1
//     }
//   }
// }

// const updateLines = () => {
//   let previousLines = []
//   if (s.currentLineSet > 0) {
//     previousLines = lineSets[s.currentLineSet - 1].nums
//   }
//   let targetLine = 1
//   for (let sourceLine of lineSets[s.currentLineSet].nums) {
//     // adding `&nbsp;` for now to make sure line has height
//     window[
//       `codeLine${targetLine}`
//     ].innerHTML = `${sourceCode[sourceLine]}&nbsp;`
//     if (!previousLines.includes(sourceLine)) {
//       window[`codeLinePre${targetLine}`].classList.add('newLine')
//     }
//     targetLine += 1
//   }
// }

// const clearLines = () => {
//   for (let lineNum = 1; lineNum <= s.totalLines; lineNum++) {
//     window[`codeLinePre${lineNum}`].classList.remove('newLine')
//     window[`codeLine${lineNum}`].innerHTML = `&nbsp;`
//   }
// }

// const init = () => {
//   // countMaxLines()
//   makeEmptyLines()
//   // makeButtons()
//   // populateLines()
//   // highlightLines()
//   // clearLines()
//   // updateLines()
//   // makeOutput()
//   // addPaddingLines()
// }
