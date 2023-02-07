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
        `  <c-1>println!()</c-1><c-2>;</c-2>`,
        `  println!(<c-1>"checking {}"</c-1>);`,
        `  println!("checking {}"<c-2>,</c-2> <c-1>key</c-1>);`,
        `  println!("checking {}", <c-1>key</c-1>);`,
        `  println!("checking {}", key);`,
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
        `    Ok(<c-1>item</c-1>) => {` ,
        `    Ok(<c-3>item</c-3>) => {` ,
        `    Ok(item) => {` ,
      ],
      [
        ` `,
        `      <c-1>println!()</c-1><c-2>;</c-2>`,
        `      println!(<c-1>&quot;got {}&quot;</c-1>);`,
        `      println!(&quot;got {}&quot;<c-2>,</c-2> <c-1>item</c-1>);`,
        `      println!(&quot;got {}&quot;, <c-1>item</c-1>);`,
        `      println!(&quot;got {}&quot;, item);`,
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
        `      println!(<c-1>&quot;error {}&quot;</c-1>);`,
        `      println!(&quot;error {}&quot;<c-2>,</c-2> <c-1>error</c-1>);`,
        `      println!(&quot;error {}&quot;, <c-1>error</c-1>);`,
        `      println!(&quot;error {}&quot;, error);`,
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
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 1
      [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
      [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
      [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
      [0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 5
      [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
      [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
      [0, 0, 0,-1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
      [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
      [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 10
      [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
      [0, 0, 0,-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
      [0, 0, 0, 1, 0, 2, 1, 0, 0, 0, 0, 0, 0, 1, 0], 
      [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0], 
//     1  2  3  4  5  6  7  8  9 10 11 12 13 14 15
      [0, 0, 0, 0, 0,-1, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 15
      [0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0], 
      [0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0], 
      [0, 0, 0, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0], 
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0], 
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0], // 20
      [0, 0, 0, 0, 0, 0, 0,-1, 1, 0, 0, 0, 0, 0, 0], 
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0], 
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0, 0, 0], 
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0], // 25
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0], 
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1, 1, 0, 0, 0], 
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0], 
//     1  2  3  4  5  6  7  8  9 10 11 12 13 14 15

    ],

    output: [
      "checking HOME",
      "got /Users/alan"
    ], 

  content: [
    `<p>Load the <code>std::env</code> library which gives us access to environmental variables</p>`,
    `<p>Create the <code>main()</code> function</p>`,
    `<p>Begin creating an immutable <code>key</code> variable</p>`,
    `
      <p>Bind a string literal with <code>HOME</code> to the <code>key</code> variable</p>
      <p>This matches the <code>HOME</code> environmental variable that's available in the Code Runners</p>
    `,
    `<p>Create an initial <code>println!()</code> statement that is just here to help me test multiple line output in this example</p>`,
    `<p>Add the format string</p>`,
    `<p>And setup to use the value from <code>key</code></p>`,
    `<p>Which comes from the line above it</p>`,
    `<p>Start creating a <code>returnValueAsResult</code> immutable variable</p>`,
    `
      <p>The <code>env::var()</code> method is what's used to access individual environmental variables.</p>
      <p>The expression returns a <code>Result</code> value that will handle with the upcoming <code>match</code> statement</p>
    `,
    `<p>Insert the <code>key</code> variable name to finish the expression and define that we want the <code>HOME</code> environmental variable</p>`,
    `<p>The value for <code>key</code> comes from the variable on line 4</p>`,
    `<p>Begin creating the match expression</p>`,
    `<p>Setup the <code>match</code> expression to examine the <code>returnValueAsResult</code> variable</p>`,
    `<p>This is the same <code>returnValueAsResult</code> variable as the one from the line above</p>`,
    `<p>Now we start creating the <code>Ok()</code> expression which is the first of the two required arms of the <code>match</code> expression when used with a Result value</p>`,
    `<p>The <code>Ok()</code> portion of a <code>Result</code> contains a value that we can pull out. We're doing that here by assigning the incoming value to a variable named <code>item</code></p>`,
    `<p>Next we start to fill out the code we want to run if the <code>Result</code> is <code>Ok()</code>. Here were using a <code>println!()</code> expression but we could also call a function or return a value (TODO: Verify values can be returned)</p>`,
    `<p>Here we're adding two placeholder to the format string that will be used for output if the <code>Ok</code> value is matched because it's what was returned in <code>Result</code></p>`,
    `<p>Next, setup to use the <code>item</code> variable</p>`,
    `<p><code>item</code> comes from the variable we set with the value that came in with <code>Ok</code></p>`,
    `<p>Next we start the second arm of the <code>match</code> statement called <code>Err()</code></p>`,
    `<p>The <code>Err()</code> arm receives a value in the same way the <code>Ok()</code> arm does. We'll pull this value into a variable named <code>error</code></p>`,
    `<p>We'll create another <code>println()</code> expression for the <code>Err()</code> arm</p>`,
    `<p>Next, setup a basic format string similar to the one we did for the <code>Ok()</code> arm</p>`,
    `<p>And here we'll add the <code>error<code> variable</p>`,
    `<p>Which we got as the incoming value for the <code>Err()</code> arm</p>`,
    `
      <p>Putting it all together, we get our final output.</p>
      <p>In this case, the sample output is from a case then the environmental variable existed and was read in which means <code>returnValueAsResult</code> received a <code>Result</code> with <code>Ok</code> and the value of the environmental variable (which was <code>/Users/alan</code> in this case)</p>`
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
  if (s.currentLineSet < s.sets.length - 1) {
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
  const header = s.currentLineSet === s.sets.length - 1 
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
   for (let i = 0; i < s.sets.length; i ++) {
     if (i === s.currentLineSet) {
      window[`numberButton_${i}`].classList.add('activeButton')
     } else {
      window[`numberButton_${i}`].classList.remove('activeButton')
     }
   }
}

const updateFinalHighlights = () => {
  if (s.currentLineSet === s.sets.length - 1) {
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
    window[`sourceLine_${i}`].innerHTML = s.sourceLines[i][targetNumber]
  }
}

const makePreviousButton = () => {
  makeEl(['button', 'previousButton', '&lt;-', 'codePreviousWrapper', 'click', handlePreviousClick])
}

const makeNumberButtons = () => {
  for (let i = 0; i < s.sets.length; i ++) {
    let buttonText = i === s.sets.length -1 ?  "Complete" : i + 1
    makeEl(['button', `numberButton_${i}`, buttonText, 'codeButtonsWrapper', 'click', handleNumberClick])
  }
}

const makeNextButton = () => {
  makeEl(['button', 'nextButton', '-&gt;', 'codeNextWrapper', 'click', handleNextClick])
}

const setLineCount = () => {
  s.totalLines = s.sets[0].length
}

const updateOutput = () => {
    for (let i = 0; i < s.output.length; i ++ ) {
      if (s.currentLineSet === s.sets.length - 1 ) {
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


