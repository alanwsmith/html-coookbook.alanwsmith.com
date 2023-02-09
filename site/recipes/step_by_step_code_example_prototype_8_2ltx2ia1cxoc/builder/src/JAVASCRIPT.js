const c = {
  source: `use std::env; 
 
fn main() { 
  let alfa = env::var("HOME"); 
  match alfa { 
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
      coords: [2, 38, 32],
      notes: `<p>This is the full source code example.</p><p>Click through the buttons below to explinations of for each part of the code.</p>`,
    },
    {
      addLines: [1],
      coords: [3, 5, 32],
      notes: `<p>Start by loading <code>std::env</code> which provides Rust programs with access to the Environmental Variables it runs in</p>`,
    },
    {
      addLines: [3, 13],
      coords: [5, 5, 32],
      notes: `<p>Create the <code>main</code> function that Rust uses as the entry point for the program</p>`,
    },
    {
      addLines: [4],
      coords: [6, 7, 32],
      notes: `<p>Create a new immutalbe variable called <code>alfa</code> and bind the value returned by <code>env::var(&quot;HOME&quot;)</code> to it. That value is a <code>Result</code></p>`,
    },
    {
      addLines: [5, 12],
      coords: [7, 7, 32],
      notes: `<p>Begin creating the <code>match</code> expression that we'll use to process the <code>Result</code> value that was returned from <code>env::var(&quot;HOME&quot;)</code></p>`,
    },
    {
      highlights: ['h2, 4, 7, 11', 'h1, 5, 9, 13'],
      coords: [7, 7, 32],
      notes: `<p>Note that the value <code>match</code> is working on come from the <code>alfa</code> variable</p><p>TODO: See if match transfers ownership</p>`,
    },
    {
      addLines: [6, 8],
      coords: [8, 10, 32],
      notes: `<p><code>Result</code> values are <code>enums</code> that can contain either an <code>Ok</code> or a <code>Err</code> value. Here we're creating the first arm of the <code>match</code> expression that handles an <code>Ok</code></p>`,
    },
    {
      addLines: [7],
      coords: [9, 10, 38],
      notes: `<p>When the <code>Result</code> value in <code>alfa</code> contains an <code>Ok</code> the code inside its code block gets executed. In this case we're printing out the value that got passed in via <code>Ok</code></p>`,
    },
    {
      highlights: ['h2, 6, 8, 11', 'h1, 7, 26, 29'],
      coords: [9, 10, 32],
      notes: `<p>Note the <code>item</code> value we're getting came packeged with the <code>Ok</code> from <code>Result</code></p>`,
    },
    {
      addLines: [9, 11],
      coords: [9, 22, 26],
      notes: `<p>Next we create the <code>Err</code> arm for the match expression</p>`,
    },
    {
      addLines: [10],
      coords: [10, 37, 32],
      notes: `<p>Finally we add the code to run if the <code>Result</code> from <code>env::var(&quot;HOME&quot;)</code> is an <code>Err</code></p>`,
    },
    {
      fullCode: true,
      coords: [2, 38, 32],
      notes: `<p>Put togehter, the full program looks like this.</p><p>Note: The output for this prototype contain two hard coded lines. The real version will just have one from the actual program</p>`,
    },
  ],

  output: ['got /Users/alan', 'this is a stub to check two lines of output'],
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
      // Also update the pointer
      window[`stepByStepPointer_${lineNum}`].innerHTML = '&gt;'
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
    const numberString = i < 9 ? ` 0${i + 1}` : ` ${i + 1}`
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
  for (let i = 0; i < c.sets.length; i++) {
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
  updatePointers()
  addCustomHighlights()
  updateCodeLines()
  updateOutputLines()
  updateButtonHighlights()
  updateFullHighlights()
  updatePositions()
  updateNotes()
}

const updateFullHighlights = () => {
  for (let i = 0; i < totalLines(); i++) {
    if (s.currentSet === c.sets.length - 1 || s.currentSet === 0) {
      window[`stepByStepCodeLine_${i}`].classList.add('hljs')
      window[`stepByStepCodeLine_${i}`].classList.add('language-rust')
      hljs.highlightElement(window[`stepByStepCodeLine_${i}`])
    } else {
      window[`stepByStepCodeLine_${i}`].classList.remove('hljs')
      window[`stepByStepCodeLine_${i}`].classList.remove('language-rust')
    }
  }
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

const updateNotes = () => {
  window.stepByStepNotes.innerHTML = c.sets[s.currentSet].notes
}

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
  // clear the lines then add in the ones that need it
  for (let i = 0; i < totalLines(); i++) {
    window[`stepByStepPointer_${i}`].innerHTML = ' '
  }

  const addData = c.sets[s.currentSet].addLines

  if (addData) {
    for (let i = 0; i < addData.length; i++) {
      window[`stepByStepPointer_${addData[i]}`].innerHTML = '&gt;'
    }
  }
}

const updatePositions = () => {
  const coords = c.sets[s.currentSet].coords
  const theTop = coords[0] - 1
  const theLeft = coords[1] + 8
  window.stepByStepNotesSpacer.style.top = `${theTop}rem`
  window.stepByStepNotesSpacer.style.left = `${theLeft}ch`
  window.stepByStepNotesSpacer.style.width = `${coords[2]}ch`
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
