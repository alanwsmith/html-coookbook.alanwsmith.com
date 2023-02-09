const c = {
  source: `use std::env; 
 
fn main() { 
  let envResult = env::var("HOME"); 
  match envResult { 
    Ok(item) => { 
      println!("got {}", item); 
    } 
    Err(error) => { 
      println!("error {}", error); 
    } 
  } 
}`,

  //  highlights: ['h1|3|4|7'],
  //  fullCode: true,
  //   altLines: [
  //   {
  //     line: 5,
  //     text: 'the quick brown fox jumps over the lazy dog',
  //   },
  // ],

  // NOTE: Only one hightlight works
  // per line right now
  sets: [
    {
      fullCode: true,
    },
    {
      addLines: [1],
    },
    {
      addLines: [3, 13],
    },
    {
      addLines: [4],
    },
    {
      addLines: [5, 12],
    },
    {
      highlights: ['h2, 4, 7, 16', 'h1, 5, 9, 18'],
    },
    {
      addLines: [6, 8],
    },
    {
      addLines: [7],
    },
    {
      highlights: ['h2, 6, 8, 12', 'h1, 7, 26, 29'],
    },
    {
      addLines: [9, 11],
    },
    {
      addLines: [10],
    },
    {
      fullCode: true,
    },
  ],

  output: ['line 1 of output', 'another output exampleline'],
}

const s = {}

const addAltLines = () => {
  const altData = c.sets[s.currentSet].altLines
  if (altData) {
    for (let i = 0; i < altData.length; i++) {
      s.currentLines[altData[i].line - 1] = altData[i].text
    }
  }
}

const addCustomHighlights = () => {
  // This overwrites any new line highlights
  // so specific things can be pointed out
  // with alt lines in previous steps
  const highlightData = c.sets[s.currentSet].highlights
  if (highlightData) {
    for (let i = 0; i < highlightData.length; i++) {
      const parts = highlightData[i].split(',')
      const className = parts[0]
      const lineNum = parseInt(parts[1]) - 1
      const startChar = parseInt(parts[2]) - 1
      const stopChar = parseInt(parts[3])
      const sections = [
        s.rawLines[lineNum].substring(0, startChar),
        `<code class="${className}">`,
        s.rawLines[lineNum].substring(startChar, stopChar),
        `</code>`,
        s.rawLines[lineNum].substring(stopChar),
      ]
      s.currentLines[lineNum] = sections.join('')
    }
  }
}

const handleNextButtonClick = () => {
  if (s.currentSet < c.sets.length - 1) {
    updateEverything(s.currentSet + 1)
  }
}

const handleNumberButtonClick = (event) => {
  const newIndex = parseInt(event.target.id.split('_')[1])
  updateEverything(newIndex)
}

const handlePreviousButtonClick = () => {
  if (s.currentSet > 0) {
    updateEverything(s.currentSet - 1)
  }
}

const highlightNewLines = () => {
  const lineCheck = c.sets[s.currentSet].addLines
  if (lineCheck) {
    for (let i = 0; i < lineCheck.length; i++) {
      const lineIndex = lineCheck[i]
      s.currentLines[
        lineIndex
      ] = `<code class="newLine">${s.rawLines[lineIndex]}</code>`
    }
  }
}

const loadInitialLines = () => {
  for (let setIndex = 0; setIndex <= s.currentSet; setIndex++) {
    const lineSet = c.sets[setIndex].addLines
    if (lineSet) {
      for (let addIndex = 0; addIndex < lineSet.length; addIndex++) {
        const lineIndex = c.sets[setIndex].addLines[addIndex]
        s.currentLines[lineIndex] = s.rawLines[lineIndex]
      }
    }
  }
}

const loadRawLines = () => {
  s.rawLines = c.source.split('\n')
}

const makeCodeLines = () => {
  for (let i = 0; i < totalLines(); i++) {
    makeElement(
      'pre',
      `stepByStepCodeLine_${i}`,
      ` `,
      'stepByStepCodeLines',
      null,
      null
    )
  }
}
const makeElement = (_type, _id, _html, _childOf, _event, _function) => {
  const newElement = document.createElement(_type)
  newElement.id = _id
  newElement.innerHTML = _html
  window[_childOf].appendChild(newElement)
  if (_event !== null) {
    newElement.addEventListener(_event, _function)
  }
}

const makeAddLineNumbersZeroBased = () => {
  // Moves config numbers from human readable to
  // zero based index
  for (let setsIndex = 0; setsIndex < c.sets.length; setsIndex++) {
    const addData = c.sets[setsIndex].addLines
    if (addData) {
      for (let addIndex = 0; addIndex < addData.length; addIndex++) {
        addData[addIndex] -= 1
      }
    }
  }
}

const makeLineNumberRows = () => {
  for (let i = 0; i < totalLines(); i++) {
    const numberString = i < 9 ? `0${i + 1}` : i + 1
    makeElement(
      'pre',
      `stepByStepLineNumber_${i}`,
      numberString,
      'stepByStepLineNumbers',
      null,
      null
    )
  }
}

const makeNextButton = () => {
  makeElement(
    'button',
    'stepByStepNextButton',
    '-&gt;',
    'stepByStepButtonWrapper',
    'click',
    handleNextButtonClick
  )
}

const makeNumberButtons = () => {
  for (let i = 0; i < c.sets.length; i++) {
    let buttonText = i

    if (i === 0) {
      buttonText = 'Start'
    } else if (i === c.sets.length - 1) {
      buttonText = 'Complete'
    }

    makeElement(
      'button',
      `stepByStepNumberButton_${i}`,
      buttonText,
      'stepByStepButtonWrapper',
      'click',
      handleNumberButtonClick
    )
  }
}

const makeOutputLineNumbers = () => {
  for (let i = 0; i < c.output.length; i++) {
    const theText = i === 0 ? 'out' : ' '
    makeElement(
      'pre',
      `stepByStepOutputLineNumber_${i}`,
      theText,
      'stepByStepOutputNumbers',
      null,
      null
    )
  }
}

const makeOutputLines = () => {
  for (let i = 0; i < c.output.length; i++) {
    makeElement(
      'pre',
      `stepByStepOutputLine_${i}`,
      ' ',
      'stepByStepOutputLines',
      null,
      null
    )
  }
}

const makeOutputLinePointers = () => {
  for (let i = 0; i < c.output.length; i++) {
    const theText = i === 0 ? ':' : ' '
    makeElement(
      'pre',
      `stepByStepOutputPointer_${i}`,
      theText,
      'stepByStepOutputPointers',
      null,
      null
    )
  }
}

const makePointerRows = () => {
  for (let i = 0; i < totalLines(); i++) {
    makeElement(
      'pre',
      `stepByStepPointer_${i}`,
      ` `,
      'stepByStepPointers',
      null,
      null
    )
  }
}

const makePreviousButton = () => {
  makeElement(
    'button',
    'stepByStepPreviousButton',
    '&lt;-',
    'stepByStepButtonWrapper',
    'click',
    handlePreviousButtonClick
  )
}

const prepCurrentLines = () => {
  s.currentLines = []
  for (let i = 0; i < s.rawLines.length; i++) {
    s.currentLines.push(' ')
  }
}

const totalLines = () => {
  return s.rawLines.length
}

const updateButtonHighlights = () => {
  for (let i = 0; i < s.sets.length; i++) {
    if (i === s.currentSet) {
      window[`stepByStepNumberButton_${i}`].classList.add('activeButton')
    } else {
      window[`stepByStepNumberButton_${i}`].classList.remove('activeButton')
    }
  }
}

const updateCodeLines = () => {
  if (c.sets[s.currentSet].fullCode === true) {
    for (let i = 0; i < totalLines(); i++) {
      window[`stepByStepCodeLine_${i}`].innerHTML = s.rawLines[i]
    }
  } else {
    for (let i = 0; i < totalLines(); i++) {
      window[`stepByStepCodeLine_${i}`].innerHTML = s.currentLines[i]
    }
  }
}

const updateEverything = (setIndex) => {
  s.currentSet = setIndex
  prepCurrentLines()
  loadInitialLines()
  highlightNewLines()
  addAltLines()
  addCustomHighlights()
  updateCodeLines()
  updatePointers()
  updateOutputLines()
}

const updateHeader = () => {
  let headerString = `Step ${s.currentSet}`
  if (s.currentSet === 0) {
    headerString = `Full Code Sample`
  } else if (s.currentSet === s.sets.length - 1) {
    headerString = `Final Code Sample`
  }

  window.stepByStepHeader.innerHTML = headerString
}

// const updateNotes = () => {
//   window.stepByStepNotes.innerHTML = s.notes[s.currentSet]
// }

const updateOutputLines = () => {
  for (let i = 0; i < c.output.length; i++) {
    if (s.currentSet === c.sets.length - 1 || s.currentSet === 0) {
      window[`stepByStepOutputLine_${i}`].innerHTML = c.output[i]
    } else {
      // clear output for moving to previous line sets
      window[`stepByStepOutputLine_${i}`].innerHTML = ' '
    }
  }
}

const updatePointers = () => {
  for (let i = 0; i < totalLines(); i++) {
    //   // Set empty to clear prior pointers
    //   let pointerText = ' '
    //   // only mark things that have changed
    //   if (s.sets[s.currentSet][i] === 1) {
    //     // don't mark empty lines
    //     if (s.lines[i][s.currentSet] !== '') {
    //       // don't mark the final change
    //       if (s.lineIndexes[i] !== s.lines[i].length - 1) {
    //         pointerText = '&gt;'
    //       }
    //     }
    //   }
    window[`stepByStepPointer_${i}`].innerHTML = 'x'
  }
}

const init = () => {
  s.currentSet = 0
  makeAddLineNumbersZeroBased()
  loadRawLines()
  makePreviousButton()
  makeNumberButtons()
  makeNextButton()
  makeLineNumberRows()
  makeCodeLines()
  makePointerRows()
  makeOutputLines()
  makeOutputLineNumbers()
  makeOutputLinePointers()
  updateEverything(0)
}

document.addEventListener('DOMContentLoaded', init)
