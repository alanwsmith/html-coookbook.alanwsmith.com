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
  // per line. Might add more later,
  // but that's TBD.
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

const s = {
  currentSet: 2,
}

const addAltLines = () => {
  const altData = c.sets[s.currentSet].altLines
  if (altData) {
    for (let i = 0; i < altData.length; i++) {
      s.currentLines[altData[i].line - 1] = altData[i].text
    }
  }
}

const addCustomHighlights = () => {
  const highlightData = c.sets[s.currentSet].highlights
  if (highlightData) {
    for (let i = 0; i < highlightData.length; i++) {
      const parts = highlightData[i].split('|')
      const className = parts[0]
      const lineNum = parseInt(parts[1]) - 1
      const startChar = parseInt(parts[2]) - 1
      const stopChar = parseInt(parts[3])
      const sections = [
        s.currentLines[lineNum].substring(0, startChar),
        `<code class="${className}">`,
        s.currentLines[lineNum].substring(startChar, stopChar),
        `</code>`,
        s.currentLines[lineNum].substring(stopChar),
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

const outputLines = () => {
  for (let i = 0; i < s.currentLines.length; i++) {
    window[`s${i}`].innerHTML = s.currentLines[i]
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

// const makeH1NumbersZeroBased = () => {
//   for (let setsIndex = 0; setsIndex < c.sets.length; setsIndex++) {
//     const h1Data = c.sets[setsIndex].h1
//     if (h1Data) {
//       for (let h1Index = 0; h1Index < h1Data.length; h1Index++) {
//         console.log(h1Data[h1Index])
//         // h1Data[h1Index] -= 1
//       }
//     }
//   }
// }

// TODO: Remove this
const prepConfig = () => {
  // this turns human readeable numbers
  // into zero index based numbers for
  // working with them in code

  for (let setsIndex = 0; setsIndex < c.sets.length; setsIndex++) {
    const addData = c.sets[setsIndex].addLines

    if (addData) {
      for (let addIndex = 0; addIndex < addData.length; addIndex++) {
        addData[addIndex] -= 1
      }
    }

    // const h1Data = c.sets[setsIndex].h1

    // if (h1Data) {
    //   for (let h1Index = 0; h1Index < h1Data.length; h1Index++) {
    //     console.log(h1Data[h1Index])
    //   }
    // }
  }
  console.log(c.sets)
}

const prepCurrentLines = () => {
  s.currentLines = []
  for (let i = 0; i < s.rawLines.length; i++) {
    s.currentLines.push(' ')
  }
}

const init = () => {
  makeAddLineNumbersZeroBased()
  // makeH1NumbersZeroBased()
  // prepConfig()

  loadRawLines()
  prepCurrentLines()
  loadInitialLines()
  highlightNewLines()
  addAltLines()
  addCustomHighlights()
  outputLines()
}

document.addEventListener('DOMContentLoaded', init)
