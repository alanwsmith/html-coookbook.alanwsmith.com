const c = {
  source: `use std::env; 
 
fn main() { 
  let envVarResult = env::var("HOME"); 
  match envVarResult { 
    Ok(item) => { 
      println!("got {}", item); 
    } 
    Err(error) => { 
      println!("error {}", error); 
    } 
  } 
}`,

  // NOTE: Only one hightlight works
  // per line right now
  sets: [
    {
      addLines: [1],
    },
    {
      addLines: [3, 13],
    },
    {
      addLines: [4],
      altLines: [
        {
          line: 5,
          text: 'the quick brown fox jumps over the lazy dog',
        },
      ],
      highlights: ['h1|4|4|7'],
    },
    {
      addLines: [5, 12],
    },
    {
      highlights: ['h1|3|4|7'],
    },
    {
      addLines: [6, 8],
    },
    {
      addLines: [7],
    },
    {
      addLines: [9, 11],
    },
    {
      addLines: [10],
    },
  ],
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
      const parts = highlightData[i].split('|')
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

// const outputLines = () => {
//   for (let i = 0; i < s.currentLines.length; i++) {
//     window[`s${i}`].innerHTML = s.currentLines[i]
//   }
// }

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

const prepCurrentLines = () => {
  s.currentLines = []
  for (let i = 0; i < s.rawLines.length; i++) {
    s.currentLines.push(' ')
  }
}

const totalLines = () => {
  return s.rawLines.length
}

const updateCodeLines = () => {
  for (let i = 0; i < totalLines(); i++) {
    window[`stepByStepCodeLine_${i}`].innerHTML = s.currentLines[i]
  }
}

const updateEverything = (setIndex) => {
  s.currentSet = setIndex
  highlightNewLines()
  addAltLines()
  addCustomHighlights()
  updateCodeLines()
}

const init = () => {
  s.currentSet = 0
  makeAddLineNumbersZeroBased()
  loadRawLines()
  makeCodeLines()
  prepCurrentLines()
  loadInitialLines()
  updateEverything(0)
}

document.addEventListener('DOMContentLoaded', init)
