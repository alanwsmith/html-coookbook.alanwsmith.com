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

  sets: [
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
      h1: [
        {
          line: 4,
          range: [7, 15],
        },
        {
          line: 5,
          range: [9, 17],
        },
      ],
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
  currentSet: 7,
}

// // this is inefficient but whatever
// // It get human line numbers not
// // zero based index
// const line = (n) => {
//   return c.source.split('\n')[n - 1]
// }

// const addCodeLines = (lineSet) => {
//   const lineNums = c.sets[lineSet].addLines
//   for (let i = 0; i < lineNums.length; i++) {
//     const lineNum = lineNums[i]
//     // window[`s${lineNum}`].innerHTML = `<code class="newLine">${line(
//     //   lineNum
//     // )}</code>`
//   }
// }

// const updateCodeLines = () => {
//   for (let i = 0; i <= s.currentSet; i++) {
//     addCodeLines(i)
//   }
// }

const highlightNewLines = () => {
  const lineCheck = c.sets[s.currentSet].addLines
  for (let i = 0; i < lineCheck.length; i++) {
    const lineIndex = lineCheck[i]
    s.currentLines[
      lineIndex
    ] = `<code class="newLine">${s.rawLines[lineIndex]}</code>`
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

const prepAddLinesConfig = () => {
  for (let setsIndex = 0; setsIndex < c.sets.length; setsIndex++) {
    const addData = c.sets[setsIndex].addLines
    if (addData) {
      for (let addIndex = 0; addIndex < addData.length; addIndex++) {
        addData[addIndex] -= 1
      }
    }
  }
}

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
  prepAddLinesConfig()
  // prepConfig()

  loadRawLines()
  prepCurrentLines()
  loadInitialLines()
  highlightNewLines()
  outputLines()
}

document.addEventListener('DOMContentLoaded', init)
