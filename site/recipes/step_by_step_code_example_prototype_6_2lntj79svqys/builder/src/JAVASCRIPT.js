const s = {

  currentLineSet: 0,

    sourceLines: [
      [
        ` `,
        `<c-1>use std::env</c-1><c-2>;</c-2>`,
        `use std::env;`,
      ],
      [` `, ` `],
      [` `,
      `<c-1>fn main()</c-1> <c-2>{</c-2>`,
      `fn main() {`,
      ],
      [
        ` `,
        `  <c-1>let key </c-1><c-2>=</c-2>`,
        `  let key = <c-1>&quot;HOME&quot;</c-1><c-2>;</c-2>`,
        `  let <c-3>key</c-3> = &quot;HOME&quot;;`,
        `  let key = &quot;HOME&quot;;`,
      ],
      [
        ` `,
        `  <c-1>let returnValueAsResult </c-1><c-2>=</c-2>`,
        `  let returnValueAsResult = <c-1>env::var<c-1>()<c-2>;</c-2>`,
        `  let returnValueAsResult = env::var(<c-1>key</c-1>);`,
        `  let <c-3>returnValueAsResult</c-3> = env::var(key);`,
        `  let returnValueAsResult = env::var(key);`,
      ],
      [
        ` `,
        `  <c-1>match</c-1> <c-2>{</c-2>`,
        `  match <c-1>returnValueAsResult</c-1> {`,
        `  match returnValueAsResult {`,
      ],
      [
        ` `,
        `    <c-1>Ok() =></c-1> <c-2>{</c-2>`,
        `    Ok(<c-1>value</c-1>) => {` ,
        `    Ok(<c-3>value</c-3>) => {` ,
        `    Ok(value) => {` ,
      ],
      [
        ` `,
        `      <c-1>println!()</c-1><c-2>;</c-2>`,
        `      println!(<c-1>&quot;{} is {}&quot;</c-1>);`,
        `      println!(&quot;{} is {}&quot;<c-2>,</c-2> <c-1>key</c-1>);`,
        `      println!(&quot;{} is {}&quot;, key<c-2>,</c-2> <c-1>value</c-1>);`,
        `      println!(&quot;{} is {}&quot;, key, value);`,
      ],
      [ ` `,
        `    <c-2>}</c-2>`,
        `    }`,
      ],
      [ ` `,
        `    <c-1>Err() => </c-1><c-2>{</c-2>`,
        `    Err(<c-1>error</c-1>) => {`,
        `    Err(<c-3>error</c-3>) => {`,
        `    Err(error) => {`,
      ],
      [
      ` `,
        `      <c-1>println!()</c-1><c-2>;</c-2>`,
        `      println!(<c-1>&quot;{} is {}&quot;</c-1>);`,
        `      println!(&quot;{} is {}&quot;<c-2>,</c-2> <c-1>key</c-1>);`,
        `      println!(&quot;{} is {}&quot;, key<c-2>,</c-2> <c-1>error</c-1>);`,
        `      println!(&quot;{} is {}&quot;, key, error);`,
      ],
      [
        ` `,
        `    <c-2>}</c-2>`,
        `    }`
      ],
      [
        ` `,
        `  <c-2>}</c-2>`,
        `  }`,
      ],
      [
        ` `,
        `<c-2>}</c-2>`,
        `}`
      ]
    ],

    sets: [
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 1
      [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
      [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
      [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
      [0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 5
      [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
      [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
      [0, 0, 0,-1 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
      [0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 1, 0], 
      [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0], // 10
      [0, 0, 0, 0,-1, 0, 0, 0, 0, 0, 0, 0, 0, 0], 

//     1  2  3  4  5  6  7  8  9 10 11 12 13 14

      [0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0], 
      [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0], 
      [0, 0, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0], 
      [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0], // 15 
      [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0], 
      [0, 0, 0,-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
      [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0], 
      [0, 0, 0, 0, 0, 0,-1, 0, 0, 0, 0, 0, 0, 0], 
      [0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0], // 20
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0], 
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0, 0, 0], 
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0], 
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0], 
      [0, 0, 0,-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 25 
      [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0], 
      [0, 0, 0, 0, 0, 0, 0, 0, 0,-1, 0, 0, 0, 0], 
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0], 

//     1  2  3  4  5  6  7  8  9 10 11 12 13 14

    ],

    lineSets: [
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 1
      [2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [2, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
      [2, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
      [2, 0, 2, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 5
      [2, 0, 2, 4, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2],
      [2, 0, 2, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 2],
      [2, 0, 2, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 2],
      [2, 0, 2, 4, 4, 1, 0, 0, 0, 0, 0, 0, 1, 2],
      [2, 0, 2, 4, 4, 2, 1, 0, 1, 0, 0, 0, 2, 2], // 10
      [2, 0, 2, 4, 4, 2, 2, 0, 2, 0, 0, 0, 2, 2],
      [2, 0, 2, 4, 4, 2, 4, 1, 2, 0, 0, 0, 2, 2],
      [2, 0, 2, 4, 4, 2, 4, 2, 2, 0, 0, 0, 2, 2],
      [2, 0, 2, 4, 4, 2, 4, 3, 2, 0, 0, 0, 2, 2],
      [2, 0, 2, 3, 4, 2, 4, 3, 2, 0, 0, 0, 2, 2], // 15
      [2, 0, 2, 4, 4, 2, 4, 4, 2, 0, 0, 0, 2, 2],
      [2, 0, 2, 4, 4, 2, 3, 4, 2, 0, 0, 0, 2, 2],
      [2, 0, 2, 4, 4, 2, 4, 5, 2, 1, 0, 1, 2, 2],
      [2, 0, 2, 4, 4, 2, 4, 5, 2, 2, 0, 2, 2, 2],
      [2, 0, 2, 4, 4, 2, 4, 5, 2, 4, 1, 2, 2, 2], // 20
      [2, 0, 2, 4, 4, 2, 4, 5, 2, 4, 2, 2, 2, 2],
      [2, 0, 2, 4, 4, 2, 4, 5, 2, 4, 3, 2, 2, 2], 
      [2, 0, 2, 3, 4, 2, 4, 5, 2, 4, 3, 2, 2, 2], 
      [2, 0, 2, 4, 4, 2, 4, 5, 2, 4, 4, 2, 2, 2],
      [2, 0, 2, 4, 4, 2, 4, 5, 2, 3, 4, 2, 2, 2], // 25
      [2, 0, 2, 4, 4, 2, 4, 5, 2, 4, 4, 2, 2, 2],
      [2, 0, 2, 4, 4, 2, 4, 5, 2, 4, 4, 2, 2, 2],
      [2, 0, 2, 4, 4, 2, 4, 5, 2, 4, 4, 2, 2, 2],
    ], 

    output: [
      "alfa is apple",
      "alfa is apple again"
    ], 

  content: [
    `<p>Load the <code>std::env</code> library which gives us access to environmental variables</p>`,
    `<p>Create the <code>main()</code> function</p>`,
    `<p>Begin creating an immutable <code>key</code> variable</p>`,
    `
      <p>Bind a string literal with <code>HOME</code> to the <code>key</code> variable</p>
      <p>This matches the <code>HOME</code> environmental variable that's avaialbe in the Code Runners</p>
    `,
    `<p>Start creating a <code>returnValueAsResult</code> immutable variable</p>`,
    `
      <p>The <code>env::var()</code> method is what's used to access individual environmental variables.</p>
      <p>The expression returns a <code>Result</code> value that will handle with the upcoming <code>match</code> statement</p>
    `,
    `<p>Insert the <code>key</code> variable name to finish the expression.</p>`,
    `<p>This is the same <code>key</code> variable from the prio line</p>`,
    `<p>Begin creating the match expression</p>`,
    `<p></p>`,
    `<p></p>`,
    `<p></p>`,
    `<p></p>`,
    `<p></p>`,
    `<p></p>`,
    `<p></p>`,
    `<p></p>`,
    `<p></p>`,
    `<p></p>`,
    `<p></p>`,
    `<p></p>`,
  ]
}

const makeEl = (details) => {
  // format: type, id, innerHTML, childOf, event, eventFunction
  const newEl = document.createElement(details[0])
  newEl.id = details[1]
  newEl.innerHTML = details[2] !== '' ? details[2] : ''
  window[details[3]].appendChild(newEl)
  if (details[4] !== undefined) {
    newEl.addEventListener(details[4], details[5])
  }
}

const makeOutputHolder = () => {
  makeEl(['div', 'outputHolder', '', 'outputArea'])
   for (let i = 0; i < s.output.length; i ++) {
     makeEl(['pre', `outputLine_${i}`, '', 'outputHolder'])
   }
}

const makeOutputGutter = () => {
  makeEl(['div', 'outputGutter', '', 'outputArea'])
   for (let i = 0; i < s.output.length; i ++) {
     makeEl(['pre', `outputGutterLine_${i}`, 'out:', 'outputGutter'])
   }
}


const makeCodeWrapper = () => {
  makeEl(['div', 'codeWrapper', '', 'codeArea'])
   for (let i = 0; i < s.totalLines; i ++) {
     makeEl(['pre', `sourceLine_${i}`, '', 'codeWrapper'])
   }
}

const makeLineNumbersWrapper = () => {
  makeEl(['div', 'lineNumbersWrapper', '', 'codeArea'])
   for (let i = 0; i < s.totalLines; i ++) {
     makeEl(['pre', `lineNumber_${i}`, '', 'lineNumbersWrapper'])
   }
}

const handleNextClick = () => {
  if (s.currentLineSet < s.lineSets.length - 1) {
    updateEverything(s.currentLineSet + 1)
  }
}

const handlePreviousClick = () => {
  if (s.currentLineSet > 0) {
    updateEverything(s.currentLineSet - 1)
  }
}

const handleNumberClick = (event) => {
  const newIndex = parseInt(
    event.target.id.split("_")[1]
  )
  updateEverything(newIndex)
}


const updateContent = () => {
  window.contentArea.innerHTML = 
    s.content[s.currentLineSet]
}

const updateHeader = () => {
  const header = s.currentLineSet === s.lineSets.length - 1 
    ? `<h4>Final Output</h4>` 
    : `<h4>Step ${s.currentLineSet + 1}</h4>`
  window.headerArea.innerHTML = header
}


const updateLineIndexes = () => {
  for (let i = 0; i < s.totalLines; i++) {
    s.lineIndexes[i] = 0
    for (let x = 0; x <= s.currentLineSet; x ++) {
      s.lineIndexes[i] += s.sets[x][i]
    }
  }
  console.log(s.lineIndexes)
}

const updateEverything = (newIndex) => {
  s.currentLineSet = newIndex
  updateLineIndexes()
  updateLineNumbers()
  updateSourceLines()
  updateButtonHighlights()
  updateOutput()
  updateContent()
  updateHeader()
  updateFinalHighlights()
}

const updateButtonHighlights = () => {
   for (let i = 0; i < s.lineSets.length; i ++) {
     if (i === s.currentLineSet) {
      window[`numberButton_${i}`].classList.add('activeButton')
     } else {
      window[`numberButton_${i}`].classList.remove('activeButton')
     }
   }
}

const updateFinalHighlights = () => {
  if (s.currentLineSet === s.lineSets.length - 1) {
    for (let i = 0; i < s.totalLines; i ++) {
      window[`sourceLine_${i}`].classList.add('hljs')
      window[`sourceLine_${i}`].classList.add('language-rust')
      hljs.highlightElement(window[`sourceLine_${i}`])
    }
  } else {
    for (let i = 0; i < s.totalLines; i ++) {
      window[`sourceLine_${i}`].classList.remove('hljs')
      window[`sourceLine_${i}`].classList.remove('language-rust')
    }
  }
}

const updateLineNumbers = () => {
   for (let i = 0; i < s.totalLines; i ++) {
      const checkIndex = s.sourceLines[i].length - 1;
      const currentIndex = s.lineIndexes[i]
      const numberString = i + 1 < 10 ? `0${i + 1}` : `${i + 1}`
      if(currentIndex > 0 && currentIndex < checkIndex) {
       window[`lineNumber_${i}`].innerHTML = 
          `${numberString} <span class="pointer">&gt;</span>`
      } else {
       window[`lineNumber_${i}`].innerHTML = numberString
      }
   }
}

const updateSourceLines = () => {
  for (let i = 0; i < s.totalLines; i ++) {
    const targetNumber = s.lineIndexes[i]
    // console.log(`${i} - ${targetNumber}`)
    window[`sourceLine_${i}`].innerHTML = s.sourceLines[i][targetNumber]
    // window[`sourceLine_${i}`].innerHTML = `x`
  }
}

// const updateSourceLines = () => {
//   for (let i = 0; i < s.totalLines; i ++) {
//     const targetNumber = s.lineSets[s.currentLineSet][i]
//     window[`sourceLine_${i}`].innerHTML = s.sourceLines[i][targetNumber]
//     const codeEls = window[`sourceLine_${i}`].getElementsByTagName('code')
//     for (let eIndex = 0; eIndex < codeEls.length; eIndex ++ ) {
//       codeEls[eIndex].classList.add('hljs')
//       codeEls[eIndex].classList.add('language-rust')
//       hljs.highlightElement(codeEls[eIndex])
//     }
//    }
// }

const makePreviousButton = () => {
  makeEl(['button', 'previousButton', '&lt;-', 'codePreviousWrapper', 'click', handlePreviousClick])
}

const makeNumberButtons = () => {
  for (let i = 0; i < s.lineSets.length; i ++) {
    let buttonText = i === s.lineSets.length -1 ?  "Complete" : i + 1
    makeEl(['button', `numberButton_${i}`, buttonText, 'codeButtonsWrapper', 'click', handleNumberClick])
  }
}

const makeNextButton = () => {
  makeEl(['button', 'nextButton', '-&gt;', 'codeNextWrapper', 'click', handleNextClick])
}

const setLineCount = () => {
  s.totalLines = s.lineSets[0].length
}

const updateOutput = () => {
    for (let i = 0; i < s.output.length; i ++ ) {
      if (s.currentLineSet === s.lineSets.length - 1 ) {
        window[`outputLine_${i}`].innerHTML = s.output[i]
      } else  {
      // clear output for moving to previous line sets
      window[`outputLine_${i}`].innerHTML = ' '
      }
    }
}

const makeAreas = () => {
  makeEl(['div', 'headerArea', '<h4>Step 1</h4>', 'codeExample'])
  makeEl(['div', 'contentArea', 'This is the content area', 'codeExample'])
  makeEl(['div', 'codeArea', '', 'codeExample'])
  makeEl(['div', 'outputArea', '', 'codeExample'])
  makeEl(['div', 'codeButtonsParent', '', 'codeExample'])
  makeEl(['div', 'codePreviousWrapper', '', 'codeButtonsParent'])
  makeEl(['div', 'codeButtonsWrapper', '', 'codeButtonsParent'])
  makeEl(['div', 'codeNextWrapper', '', 'codeButtonsParent'])
}

const setupLineIndexes = () => {
  s.lineIndexes = []
}

const makeCodeExample = () => {
  setLineCount()
  setupLineIndexes()
  makeAreas()
  makeLineNumbersWrapper()
  makeCodeWrapper()
  makeOutputGutter()
  makeOutputHolder()
  makePreviousButton()
  makeNumberButtons()
  makeNextButton()
  updateEverything(0)
}

document.addEventListener('DOMContentLoaded', makeCodeExample)
