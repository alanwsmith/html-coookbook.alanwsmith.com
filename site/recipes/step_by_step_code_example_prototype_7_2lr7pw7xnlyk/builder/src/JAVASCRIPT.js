const s = {
  currentSet: 0,
  maxSet: 6,
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
}

const handleNextClick = () => {
  console.log(`Next: ${s.currentSet}`)
  if (s.currentSet < s.maxSet) {
    update(s.currentSet + 1)
  }
}

const handlePreviousClick = () => {
  console.log(`Previous: ${s.currentSet}`)
  if (s.currentSet > 0) {
    update(s.currentSet - 1)
  }
}

const update = (setIndex) => {
  console.log(`Updating to: ${setIndex}`)
  s.currentSet = setIndex

  window.stepByStepNotes.innerHTML = s.notes[s.currentSet]

  if (s.currentSet === 0) {
    window.stepByStepLine_0.innerHTML = s.lines[0][1]
    window.stepByStepLine_1.innerHTML = ' '
    window.stepByStepLine_2.innerHTML = ' '
    window.stepByStepLine_3.innerHTML = ' '
    window.stepByStepNotesSpacer.style.top = '2.3rem'
  } else if (s.currentSet === 1) {
    window.stepByStepLine_0.innerHTML = s.lines[0][2]
    window.stepByStepLine_1.innerHTML = ' '
    window.stepByStepLine_2.innerHTML = s.lines[2][1]
    window.stepByStepLine_3.innerHTML = ' '
    window.stepByStepNotesSpacer.style.top = '4.9rem'
  } else if (s.currentSet === 2) {
    window.stepByStepLine_0.innerHTML = 'this is the line'
    window.stepByStepLine_1.innerHTML = 'with some more text'
    window.stepByStepLine_2.innerHTML = ' '
    window.stepByStepLine_3.innerHTML = ' '
    window.stepByStepNotesSpacer.style.top = '3.6rem'
  } else if (s.currentSet === 3) {
    window.stepByStepLine_0.innerHTML = 'this is the line'
    window.stepByStepLine_1.innerHTML = 'with some more text'
    window.stepByStepLine_2.innerHTML = 'and the quick brown fox'
    window.stepByStepLine_3.innerHTML = ' '
    window.stepByStepNotesSpacer.style.top = '4.9rem'
  } else if (s.currentSet === 4) {
    window.stepByStepLine_0.innerHTML = 'this is the line'
    window.stepByStepLine_1.innerHTML = 'with some more text'
    window.stepByStepLine_2.innerHTML = 'and the quick brown fox'
    window.stepByStepLine_3.innerHTML = 'and the lazy dog'
    window.stepByStepNotesSpacer.style.top = '6.2rem'
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

const makeLineNumbers = () => {
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

const totalLines = () => {
  return s.lines.length
}

const init = () => {
  makeLineNumbers()
  console.log('init')
  window.previousButton.addEventListener('click', handlePreviousClick)
  window.nextButton.addEventListener('click', handleNextClick)
  update(0)
}

document.addEventListener('DOMContentLoaded', init)
