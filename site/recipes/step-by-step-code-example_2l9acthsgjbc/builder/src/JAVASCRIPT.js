let sourceCode = `fn main() {
  let mut alfa = String::from("apple");
  widget(&mut alfa);
  println!("alfa is {alfa}");
}

fn widget(thing: &mut String) {
  thing.push_str("pie");
}

/// Temp stuff below

fn widget() {
`.split('\n')

// add spacer to match line numbers
sourceCode = ['', ...sourceCode]

///////////////////////////////////////////////////

const log = (msg) => {
  console.log(msg)
}

const lineSets = [
  {
    nums: [1, 5, 6, 13, 9],
    text: `<p>Start with empty <code>main</code> and <code>widget</code>
  functions</p>`,
  },
  {
    nums: [1, 2, 5, 6, 13, 9],
    text: `<p>Create a mutable <code>alfa</code> varaible bound to 
  our <code>String</code></p>`,
  },
  {
    nums: [1, 2, 3, 5, 6, 13, 9],
    text: `<p>Add a call to the <code>widget</code> function using
  with a mutable reference to <code>alfa</code> as an argument.
  </p>`,
  },
  {
    nums: [1, 2, 3, 5, 6, 7, 9],
    text: `<p>Update the <code>widget</code> function to accept the
  mutable refernce and bind it to a local variable named
  <code>thing</code></p>`,
  },
  {
    nums: [1, 2, 3, 5, 6, 7, 8, 9],
    text: `<p>Make an update to the refernce</p>`,
  },
  {
    nums: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    text: `<p>Output the value of <code>alfa</code> to show it's changed<p>`,
  },
]

const makeOutput = () => {
  let priorLines = []
  if (s.currentLineSet > 0) {
    priorLines = lineSets[s.currentLineSet - 1].nums
  }
  // log(priorLines)

  for (let lineNumber of lineSets[s.currentLineSet].nums) {
    // log(`lineNumber: ${lineNumber}`)
    const newLineOutputEl = document.createElement('div')
    let lineClass = 'existingLine'
    if (!priorLines.includes(lineNumber)) {
      // log(`newLine class: ${lineNumber}`)
      lineClass = 'newLine'
    }
    newLineOutputEl.innerHTML = `<pre class="${lineClass}"><code>${sourceCode[lineNumber]}</code></pre>`
    window.codeExample.appendChild(newLineOutputEl)
  }
}

const addPaddingLines = () => {
  for (
    let padNum = lineSets[s.currentLineSet].nums.length;
    padNum < s.totalLines;
    padNum++
  ) {
    // log(`Padding line: ${padNum}`)
    const padLineEl = document.createElement('div')
    padLineEl.innerHTML = `<pre class="padLine"><code>&nbsp;</code></pre>`
    window.codeExample.appendChild(padLineEl)
  }
}

const countMaxLines = () => {
  lineSets.forEach((lineSet) => {
    if (lineSet.nums.length > s.totalLines) {
      s.totalLines = lineSet.nums.length
    }
  })
  log(`Max lines: ${s.totalLines}`)
}

const makeButtons = () => {
  const buttonRowEl = document.createElement('div')
  buttonRowEl.id = 'buttonRow'

  // log('Making buttons')
  const previousButtonEl = document.createElement('button')
  previousButtonEl.id = 'previousSet'
  previousButtonEl.innerHTML = '&nbsp;&nbsp;&nbsp;--&nbsp;&nbsp;&nbsp;'

  // log('Making buttons')
  const nextButtonEl = document.createElement('button')
  nextButtonEl.id = 'nextSet'
  nextButtonEl.innerHTML = '&nbsp;&nbsp;Next&nbsp;&nbsp;'

  buttonRowEl.appendChild(previousButtonEl)
  buttonRowEl.appendChild(nextButtonEl)
  window.codeExample.appendChild(buttonRowEl)

  previousButtonEl.addEventListener('click', handlePreviousClick)
  nextButtonEl.addEventListener('click', handleNextClick)
}

const handlePreviousClick = (event) => {
  //
}

const handleNextClick = (event) => {
  //
}

const makeEmptyLines = () => {
  for (let num = 1; num <= s.totalLines; num++) {
    const emptyLineEl = document.createElement('div')
    emptyLineEl.id = `codeLineWrapper${num}`
    emptyLineEl.classList.add('codeLineWrapper')
    emptyLineEl.innerHTML = `<pre id="codeLinePre${num}"><code id="codeLine${num}">&nbsp;</code></pre>`
    window.codeExample.appendChild(emptyLineEl)
  }
}

const s = {
  currentLineSet: 0,
  totalLines: 0,
}

const updateLines = () => {
  // console.log('updateLines')
  let targetLine = 1
  for (let sourceLine of lineSets[s.currentLineSet].nums) {
    // log(sourceLine)
    // log(sourceCode[sourceLine])
    // adding `&nbsp;` for now to make sure line has height
    window[
      `codeLine${targetLine}`
    ].innerHTML = `${sourceCode[sourceLine]}&nbsp;`
    targetLine += 1
  }
}

const init = () => {
  countMaxLines()
  makeEmptyLines()
  updateLines()

  // makeOutput()
  // addPaddingLines()
  // makeButtons()
}

document.addEventListener('DOMContentLoaded', init)
