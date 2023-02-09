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
      addLines: [1, 3, 13],
    },
    {
      addLines: [7],
    },
  ],
}

const s = {
  currentSet: 1,
  currentLines: [],
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

// this turns human readeable numbers
// into zero index based numbers for
// working with them in code
const prepConfig = () => {
  for (let setsIndex = 0; setsIndex < c.sets.length; setsIndex++) {
    for (
      let addIndex = 0;
      addIndex < c.sets[setsIndex].addLines.length;
      addIndex++
    ) {
      c.sets[setsIndex].addLines[addIndex] -= 1
    }
  }
}

const loadRawLines = () => {
  s.rawLines = c.source.split('\n')
}

const loadInitialLines = () => {
  for (let setIndex = 0; setIndex <= s.currentSet; setIndex++) {
    const lineSet = c.sets[setIndex].addLines
    for (let addIndex = 0; addIndex < lineSet.length; addIndex++) {
      const lineIndex = c.sets[setIndex].addLines[addIndex]
      s.currentLines[lineIndex] = s.rawLines[lineIndex]
    }
  }
}

const init = () => {
  prepConfig()
  loadRawLines()
  loadInitialLines()
  console.log(s.currentLines)
}

document.addEventListener('DOMContentLoaded', init)
