const s = {
  currentSet: 0,
  lineIndexes: [],
  lines: [
    [` `, `<c-1>use std::env</c-1><c-2>;</c-2>`, `use std::env;`],
    [` `, ` `],
    [` `, `<c-1>fn main()</c-1> <c-2>{</c-2>`, `fn main() {`],
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
      `    Ok(<c-1>item</c-1>) => {`,
      `    Ok(<c-3>item</c-3>) => {`,
      `    Ok(item) => {`,
    ],
    [
      ` `,
      `      <c-1>println!()</c-1><c-2>;</c-2>`,
      `      println!(<c-1>&quot;got {}&quot;</c-1>);`,
      `      println!(&quot;got {}&quot;<c-2>,</c-2> <c-1>item</c-1>);`,
      `      println!(&quot;got {}&quot;, <c-1>item</c-1>);`,
      `      println!(&quot;got {}&quot;, item);`,
    ],
    [` `, `    <c-2>}</c-2>`, `    }`],
    [
      ` `,
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
    [` `, `    <c-2>}</c-2>`, `    }`],
    [` `, `  <c-2>}</c-2>`, `  }`],
    [` `, `<c-2>}</c-2>`, `}`],
  ],

  sets: [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 1
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 5
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, -1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 10
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 2, 1, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
    //     1  2  3  4  5  6  7  8  9 10 11 12 13 14 15
    [0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 15
    [0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0], // 20
    [0, 0, 0, 0, 0, 0, 0, -1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0], // 25
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    //     1  2  3  4  5  6  7  8  9 10 11 12 13 14 15
  ],

  output: ['checking HOME', 'got /Users/alan'],

  notes: [
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
      <p>In this case, the sample output is from a case then the environmental variable existed and was read in which means <code>returnValueAsResult</code> received a <code>Result</code> with <code>Ok</code> and the value of the environmental variable (which was <code>/Users/alan</code> in this case)</p>
    `,
  ],

  positions: [
    [2.8, 5.0, 32.0, 4.6], // 1
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
    [2.5, 2.8, 0, -0.6],
    [0, 0, 0, 0],
    [1.0, 0, 0, 0],
    [0, 0, 0, 0], //25
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [-14, 19, -14, 16],
  ],
}

const handleNextClick = () => {
  if (s.currentSet < s.sets.length - 1) {
    updateEverything(s.currentSet + 1)
  }
}

const handlePreviousClick = () => {
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
    newEl.addEventListener(_event, _function)
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

const totalLines = () => {
  return s.lines.length
}

const updateCodeLines = () => {
  for (let i = 0; i < totalLines(); i++) {
    const targetNumber = s.lineIndexes[i]
    window[`stepByStepCodeLine_${i}`].innerHTML = s.lines[i][targetNumber]
  }
}

const updateEverything = (setIndex) => {
  s.currentSet = setIndex
  updateHeader()
  updateLineIndexes()
  updatePointers()
  updatePositions()
  updateNotes()
  updateCodeLines()
  updateFinalHighlights()
}

const updateFinalHighlights = () => {
  for (let i = 0; i < totalLines(); i++) {
    if (s.currentSet === s.sets.length - 1) {
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
  window.stepByStepHeader.innerHTML = `Step ${s.currentSet + 1}`
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

const updatePointers = () => {
  for (let i = 0; i < totalLines(); i++) {
    // can probably refactor this a little
    const checkIndex = s.lines[i].length - 1
    const currentIndex = s.lineIndexes[i]
    if (currentIndex > 0 && currentIndex < checkIndex) {
      window[`stepByStepPointer_${i}`].innerHTML = '*'
    } else {
      window[`stepByStepPointer_${i}`].innerHTML = ' '
    }
  }
}

const updatePositions = () => {
  let positionTop = 0
  let positionLeft = 0
  let positionWidth = 0
  let positionHeight = 0
  for (let i = 0; i <= s.currentSet; i++) {
    positionTop += s.positions[i][0]
    positionLeft += s.positions[i][1]
    positionWidth += s.positions[i][2]
    positionHeight += s.positions[i][3]
  }
  window.stepByStepNotesSpacer.style.top = `${positionTop}rem`
  window.stepByStepNotesSpacer.style.left = `${positionLeft}rem`
  window.stepByStepNotesSpacer.style.width = `${positionWidth}rem`
  // window.stepByStepNotesSpacer.style.height = `${positionHeight}rem`
}

const init = () => {
  makeLineNumberRows()
  makePointerRows()
  makeCodeLineRows()
  window.previousButton.addEventListener('click', handlePreviousClick)
  window.nextButton.addEventListener('click', handleNextClick)
  updateEverything(0)
}

document.addEventListener('DOMContentLoaded', init)
