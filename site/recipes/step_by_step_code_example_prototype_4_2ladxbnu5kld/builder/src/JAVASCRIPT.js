const rawSourceCode = `fn main() {
  println!("here"); //   println!(<code class="language-rust">&quot;there&quot;</code>); //   println!(&quot;there&quot;);
  widget();
}

fn widget() { 
  println!("there");
}`.split('\n')

// const sourceCodeLines = []
// rawSourceCode.forEach((rawLine) => {
//   // add an empty slot for empty
//   // stuff on the first render
//   sourceCodeLines.push(['', rawLine])
// })

/*
const sourceCode = `fn main() {
  println!("here");
  widget();
}

fn widget() {
  println!("there");
}`.split('\n')
*/

const loadSourceCode = () => {
  s.sourceCode = []

  rawSourceCode.forEach((rawLine) => {
    const lineSplit = rawLine.split(' // ')
    // add an empty slot for empty
    // stuff on the first render
    s.sourceCode.push([...lineSplit])
  })

  // console.log(s.sourceCode)
}

const s = {
  currentLineSet: 1,
  lineMarkers: [],
}

const lineSets = [
  {
    status: [0, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    status: [1, 0, 0, 1, 1, 1, 0, 1],
  },
]

const log = (msg) => {
  console.log(msg)
}

// const prepLineMarkers = () => {
//   sourceCode.forEach(() => {
//     s.lineMarkers.push(0)
//   })
// }

const updateLines = () => {
  // for (let lineIndex = 0; lineIndex < sourceCode.length; lineIndex++) {
  //   s.lineMarkers[lineIndex] +=
  //     lineSets[s.currentLineSet].lineUpdates[lineIndex]
  // }
  // for (let lineIndex = 0; lineIndex < sourceCode.length; lineIndex++) {
  //   window[`preLine${lineIndex}`].innerHTML =
  //     s.sourceCode[lineIndex][s.lineMarkers[lineIndex]]
  // }
}

const makePreLines = () => {
  for (let lineIndex = 0; lineIndex < s.sourceCode.length; lineIndex++) {
    const codeLineEl = document.createElement('div')
    codeLineEl.id = `codeLineWrapper${lineIndex}`
    window.codeBlock.appendChild(codeLineEl)
  }
}

const makeBaseLines = () => {
  s.sourceCode.forEach((sourceLineBatch, batchIndex) => {
    sourceLineBatch.forEach((sourceLine, lineIndex) => {
      const newLineRust = document.createElement('pre')
      newLineRust.classList.add('language-rust')
      newLineRust.id = `codeLine_${batchIndex}_${lineIndex}_rust`
      newLineRust.innerHTML = `<code>${sourceLine}</code> `
      window[`codeLineWrapper${batchIndex}`].appendChild(newLineRust)

      // const newLinePlain = document.createElement('pre')
      // newLinePlain.id = `codeLine_${batchIndex}_${lineIndex}_plain`
      // newLinePlain.innerHTML = `<code>${sourceLine}</code> `
      // window[`codeLineWrapper${batchIndex}`].appendChild(newLinePlain)

      const newLineCustom = document.createElement('pre')
      newLineCustom.id = `codeLine_${batchIndex}_${lineIndex}_custom`
      newLineCustom.innerHTML = `${sourceLine} `
      window[`codeLineWrapper${batchIndex}`].appendChild(newLineCustom)
    })
  })

  for (let lineIndex = 0; lineIndex < s.sourceCode.length; lineIndex++) {
    // const lineStatus = lineSets[s.currentLineSet].status[lineIndex]
    // log(lineStatus)
    // window[
    //   `codeLine${lineIndex}`
    // ].innerHTML = `<pre><code class="language-rust">${s.sourceCode[lineIndex][lineStatus]}</code> </pre>`
  }
}

const init = () => {
  loadSourceCode()
  makePreLines()
  makeBaseLines()
  // prepLineMarkers()
  // updateLines()
}

document.addEventListener('DOMContentLoaded', init)

// const lineSets = [
//   {
//     lines: [1, 0, 0, 0, 1, 1, 1, 0, 1],
//   },
//   {
//     lines: [2, 1, 1, 1, 2, 2, 2, 1, 2],
//   },
//   {
//     lines: [2, 2, 2, 1, 2, 2, 2, 1, 2],
//   },
//   {
//     lines: [2, 2, 3, 1, 2, 2, 3, 1, 2],
//   },
//   {
//     lines: [2, 2, 3, 1, 2, 2, 4, 2, 2],
//   },
//   {
//     lines: [2, 2, 3, 2, 2, 2, 4, 3, 2],
//   },
//   {
//     lines: [2, 2, 3, 3, 2, 2, 4, 3, 2],
//   },
// ]

// const handleNextButtonClick = () => {
//   console.log('Got Next Button Click')
//   if (s.currentLineSet < lineSets.length - 1) {
//     s.currentLineSet += 1
//   }
//   updateLines()
// }

// const updateLines = () => {
//   const lineDivs = []
//   const lineDivEls = window.codeStuff.getElementsByTagName('div')
//   for (let lineIndex = 0; lineIndex < lineDivEls.length; lineIndex++) {
//     const preElements = []
//     const preToParse = lineDivEls[lineIndex].getElementsByTagName('pre')
//     for (let i = 0; i < preToParse.length; i++) {
//       preElements.push(preToParse[i])
//     }
//     lineDivs.push(preElements)
//   }
//   // hide everything:
//   lineDivs.forEach((lineDiv) => {
//     lineDiv.forEach((el) => {
//       el.classList.add('hideit')
//     })
//   })
//   for (let alfa = 0; alfa < lineSets[s.currentLineSet].lines.length; alfa++) {
//     lineDivs[alfa][lineSets[s.currentLineSet].lines[alfa]].classList.remove(
//       'hideit'
//     )
//     // const bravo = lineSets[0].lines[alfa]
//     // lineDivs[bravo[0]][bravo[1]].classList.remove('hideit')
//   }
//   // lineDivs[0][0].classList.add('hideit')
//   // lineDivs[0][1].classList.remove('hideit')
//   // lineDivs[1][0].classList.add('hideit')
//   // lineDivs[1][1].classList.remove('hideit')
//   // lineDivs[4][0].classList.add('hideit')
//   // lineDivs[4][1].classList.remove('hideit')
//   // lineDivs[6][0].classList.add('hideit')
//   // lineDivs[6][1].classList.remove('hideit')
//   // lineDivs[8][0].classList.add('hideit')
//   // lineDivs[8][1].classList.remove('hideit')
//   // console.log(lineDivs)
//   // lines[0].classList.add('hideit')
//   // lines[1].classList.remove('hideit')
//   // lines[10].classList.add('hideit')
//   // lines[11].classList.remove('hideit')
// }

// const init = () => {
//   // window.nextView.addEventListener('click', handleNextButtonClick)
//   // updateLines()
// }
