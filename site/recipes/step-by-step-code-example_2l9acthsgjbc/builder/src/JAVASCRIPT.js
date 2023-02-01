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
    window.codeExample.append(newLineOutputEl)
  }
}

const addPaddingLines = () => {
  for (
    let padNum = lineSets[s.currentLineSet].nums.length;
    padNum < s.totalLines;
    padNum++
  ) {
    log(`Padding line: ${padNum}`)
    const padLineEl = document.createElement('div')
    padLineEl.innerHTML = `<pre class="padLine"><code>&nbsp;</code></pre>`
    window.codeExample.append(padLineEl)
  }
}

const countTotalLines = () => {
  lineSets.forEach((lineSet) => {
    if (lineSet.nums.length > s.totalLines) {
      s.totalLines = lineSet.nums.length
    }
  })
}

const s = {
  currentLineSet: 0,
  totalLines: 1,
}

const init = () => {
  countTotalLines()
  makeOutput()
  addPaddingLines()
}

document.addEventListener('DOMContentLoaded', init)
