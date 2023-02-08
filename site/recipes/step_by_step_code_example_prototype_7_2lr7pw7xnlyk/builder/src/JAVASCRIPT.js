const s = {
  currentSet: 0,
  lineIndexes: [],
  lines: [
    [`use std::env;`, `<c-1>use std::env</c-1><c-2>;</c-2>`, `use std::env;`],
    [``, ``],
    [`fn main() {`, ``, `<c-1>fn main()</c-1> <c-2>{</c-2>`, `fn main() {`],
    [
      `  let envVarResult = env::var(&quot;HOME&quot;);`,
      ``,
      `  <c-1>let envVarResult</c-1> <c-2>=</c-2> <c-1>env::var(&quot;HOME&quot;)</c-1><c-2>;</c-2>`,
      `  let envVarResult = env::var(&quot;HOME&quot;);`,
      `  let <c-3>envVarResult</c-3> = env::var(&quot;HOME&quot;);`,
      `  let envVarResult = env::var(&quot;HOME&quot;);`,
    ],
    [
      `  match envVarResult {`,
      ``,
      `  <c-1>match envVarResult</c-1> <c-2>{</c-2>`,
      `  match <c-1>envVarResult</c-1> {`,
      `  match envVarResult {`,
    ],
    [
      `    Ok(item) => {`,
      ``,
      `    <c-1>Ok() =></c-1> <c-2>{</c-2>`,
      `    Ok(<c-1>item</c-1>) => {`,
      `    Ok(<c-3>item</c-3>) => {`,
      `    Ok(item) => {`,
    ],
    [
      `      println!(&quot;got {}&quot;, item);`,
      ``,
      `      <c-1>println!(&quot;got {}&quot;, item)</c-1><c-2>;</c-2>`,
      `      println!(&quot;got {}&quot;, <c-1>item</c-1>);`,
      `      println!(&quot;got {}&quot;, item);`,
    ],
    [`    }`, ``, `    <c-2>}</c-2>`, `    }`],
    [
      `    Err(error) => {`,
      ``,
      `    <c-1>Err() => </c-1><c-2>{</c-2>`,
      `    Err(<c-1>error</c-1>) => {`,
      `    Err(error) => {`,
      `    Err(<c-3>error</c-3>) => {`,
      `    Err(error) => {`,
    ],
    [
      `      println!(&quot;error {}&quot;, error);`,
      ``,
      `      <c-1>println!(&quot;error {}&quot;, error)</c-1>;`,
      `      println!(&quot;error {}&quot;, <c-1>error</c-1>);`,
      `      println!(&quot;error {}&quot;, error);`,
    ],
    [`    }`, ``, `    <c-2>}</c-2>`, `    }`],
    [`  }`, ``, `  <c-2>}</c-2>`, `  }`],
    [`}`, ``, `<c-2>}</c-2>`, `}`],
  ],

  sets: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 1
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1], // 3
    [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0], // 5
    [0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0], // 7
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0], // 9
    [0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0], // 11
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0], // 13
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
  ],

  output: ['checking HOME', 'got /Users/alan'],

  notes: [
    `<p>This is what the full solution looks like.</p><p>Click the buttons below to go through it step by step</p>`,
    `<p>Load the <code>std::env</code> library which gives us access to environmental variables</p>`,
    `<p>Create the <code>main()</code> function that will be used to kick things off in the program</p>`,
    `<p>This line requests an environmental variable named &quot;<code>HOME</code>&quot;. The value returned by <code>env::var</code> is a <code>Result</code> which is bound to the immutable variable <code>env_var_result</code></p>`,
    `
      <p>Bind a string literal with <code>HOME</code> to the <code>key</code> variable</p>
      <p>This matches the <code>HOME</code> environmental variable that's available in the Code Runners</p>
    `,
    `<p>Create an initial <code>println!()</code> statement that is just here to help me test multiple line output in this example</p>`,
    `<p>Add the format string</p>`,
    `<p>And setup to use the value from <code>key</code></p>`,
    `<p>Which comes from the line above it</p>`,
    `<p>Start creating a <code>envVarResult</code> immutable variable</p>`,
    `
      <p>The <code>env::var()</code> method is what's used to access individual environmental variables.</p>
      <p>The expression returns a <code>Result</code> value that will handle with the upcoming <code>match</code> statement</p>
    `,
    `<p>Insert the <code>key</code> variable name to finish the expression and define that we want the <code>HOME</code> environmental variable</p>`,
    `<p>The value for <code>key</code> comes from the variable on line 4</p>`,
    `<p>Begin creating the match expression</p>`,
    `<p>Setup the <code>match</code> expression to examine the <code>envVarResult</code> variable</p>`,
    `<p>This is the same <code>envVarResult</code> variable as the one from the line above</p>`,
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
      <p>In this case, the sample output is from a case then the environmental variable existed and was read in which means <code>envVarResult</code> received a <code>Result</code> with <code>Ok</code> and the value of the environmental variable (which was <code>/Users/alan</code> in this case)</p>
    `,
  ],

  positions: [
    [1, 30, 16, 0],
    [1.8, -25.0, 16.0, 0], // 1
    [3, 0, 0, 0],
    [1.2, 1.4, 0, 0],
    [0, 0, 0, 0],
    [1.2, 0, 0, 0], // 5
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [1.2, 0, 0, 0],
    [0, 0, 0, 0], // 10
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [1.4, 0, -2, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0], // 15
    [2.0, 3.0, -0.4, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0], // 20
    [0, 0, 0, 0],
    [2.5, 2.8, 0, 0],
    [0, 0, 0, 0],
    [1.0, 0, 0, 0],
    [0, 0, 0, 0], //25
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [-15, 18, -14, 0],
  ],
}

const handleNextButtonClick = () => {
  if (s.currentSet < s.sets.length - 1) {
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

const makeElement = (_type, _id, _html, _childOf, _event, _function) => {
  const newElement = document.createElement(_type)
  newElement.id = _id
  newElement.innerHTML = _html
  window[_childOf].appendChild(newElement)
  if (_event !== null) {
    newElement.addEventListener(_event, _function)
  }
}

const makeCodeLineRows = () => {
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
  for (let i = 0; i < s.sets.length; i++) {
    let buttonText = i
    if (i === 0) {
      buttonText = 'Start'
    } else if (i === s.sets.length - 1) {
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
  for (let i = 0; i < s.output.length; i++) {
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
  for (let i = 0; i < s.output.length; i++) {
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
  for (let i = 0; i < s.output.length; i++) {
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

const totalLines = () => {
  return s.lines.length
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
  for (let i = 0; i < totalLines(); i++) {
    const targetNumber = s.lineIndexes[i]
    // add space to make sure empty lines take up space.
    // probably a way to do that with css.
    window[`stepByStepCodeLine_${i}`].innerHTML = s.lines[i][targetNumber] + ' '
  }
}

const updateEverything = (setIndex) => {
  s.currentSet = setIndex
  updateLineIndexes()
  updateHeader()
  updatePointers()
  updatePositions()
  updateNotes()
  updateCodeLines()
  updateOutputLines()
  updateButtonHighlights()
  updateFinalHighlights()
}

const updateFinalHighlights = () => {
  for (let i = 0; i < totalLines(); i++) {
    if (s.currentSet === s.sets.length - 1 || s.currentSet === 0) {
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

const updateLineIndexes = () => {
  for (let i = 0; i < totalLines(); i++) {
    s.lineIndexes[i] = 0
    for (let x = 0; x <= s.currentSet; x++) {
      s.lineIndexes[i] += s.sets[x][i]
    }
  }
}

const updateNotes = () => {
  window.stepByStepNotes.innerHTML = s.notes[s.currentSet]
}

const updateOutputLines = () => {
  for (let i = 0; i < s.output.length; i++) {
    if (s.currentSet === s.sets.length - 1 || s.currentSet === 0) {
      window[`stepByStepOutputLine_${i}`].innerHTML = s.output[i]
    } else {
      // clear output for moving to previous line sets
      window[`stepByStepOutputLine_${i}`].innerHTML = ' '
    }
  }
}

const updatePointers = () => {
  for (let i = 0; i < totalLines(); i++) {
    // Set empty to clear prior pointers
    let pointerText = ' '

    // only mark things that have changed
    if (s.sets[s.currentSet][i] === 1) {
      // don't mark empty lines
      if (s.lines[i][s.currentSet] !== '') {
        // don't mark the final change
        if (s.lineIndexes[i] !== s.lines[i].length - 1) {
          pointerText = '&gt;'
        }
      }
    }

    window[`stepByStepPointer_${i}`].innerHTML = pointerText
  }
}

const updatePositions = () => {
  let positionTop = 0
  let positionLeft = 0
  let positionWidth = 0
  for (let i = 0; i <= s.currentSet; i++) {
    positionTop += s.positions[i][0]
    positionLeft += s.positions[i][1]
    positionWidth += s.positions[i][2]
  }
  window.stepByStepNotesSpacer.style.top = `${positionTop}rem`
  window.stepByStepNotesSpacer.style.left = `${positionLeft}rem`
  window.stepByStepNotesSpacer.style.width = `${positionWidth}rem`
}

const init = () => {
  makeLineNumberRows()
  makePointerRows()
  makeCodeLineRows()
  makePreviousButton()
  makeNumberButtons()
  makeNextButton()
  makeOutputLineNumbers()
  makeOutputLinePointers()
  makeOutputLines()
  updateEverything(0)
}

document.addEventListener('DOMContentLoaded', init)
