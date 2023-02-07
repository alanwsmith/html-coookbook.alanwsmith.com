const s = {
  currentLineSet: 0,
    sourceLines: [
      [
        `<code>fn main() {</code>`,
        `fn main() {`
      ],
      [
        `  <code>let alfa =</code>`, 
        `  let alfa = <code>String::from("apple")</code>;`,
        `  let alfa = String::from("apple");`,
      ],
      [
        `  <code>println!()</code>;`,
        `  println!(<code>"alfa is {}"</code>);`,
        `  println!(<code>"alfa is {alfa}"</code>);`,
        `  println!("alfa is {alfa}");`
      ],
      [
        `<code>}</code>`,
        `}`
      ]
    ],
    lineSets: [
      [0, -1, -1, 0],
      [1, 0, -1, 1],
      [1, 1, -1, 1],
      [1, 2, 0, 1],
      [1, 2, 1, 1],
      [1, 2, 2, 1],
      [1, 2, 3, 1],
    ]
}

const makeLines = () => {
  const codeSourcesEl = document.createElement("div")
  const codeLinesEl= document.createElement("div")
  for (let i = 0; i < s.totalLines; i ++) {
    const codeSourceEl = document.createElement("div");
    codeSourceEl.id = `codeSource_${i}`
    const codeLineEl = document.createElement("div");
    codeLineEl.id = `codeLine_${i}`

     codeSourcesEl.appendChild(codeSourceEl);
     codeLinesEl.appendChild(codeLineEl);
  }
    window.codeExample.appendChild(codeLinesEl);
     window.codeExample.appendChild(codeSourcesEl);

  const placeholderEl = document.createElement("div");
     window.codeExample.appendChild(placeholderEl);

  const codeButtonsEl = document.createElement("div");
  codeButtonsEl.id = "codeButtons"
  window.codeExample.appendChild(codeButtonsEl);
}

const handleNextClick = () => {
  if (s.currentLineSet < s.totalLines - 1) {
    s.currentLineSet += 1;
    outputLines();
  }
}

const handlePreviousClick = () => {
  if (s.currentLineSet > 0) {
    s.currentLineSet -= 1;
    outputLines();
  }
}

const outputLines = () => {
  for (let i = 0; i < s.totalLines ; i ++) {
    const targetNumber = s.lineSets[s.currentLineSet][i]
    if (targetNumber !== -1) {
      window[`codeSource_${i}`].innerHTML = 
        s.sourceLines[i][targetNumber]
      window[`codeLine_${i}`].innerHTML = 
        i + 1
    }
    else {
      window[`codeSource_${i}`].innerHTML = "&nbsp;"
      window[`codeLine_${i}`].innerHTML = 
        i + 1
    }
  }
}

const makeButtons = () => {
  const previousButtonEl = document.createElement("button")
  previousButtonEl.innerHTML ="Previous"
  previousButtonEl.addEventListener("click",handlePreviousClick)
  window.codeButtons.appendChild(previousButtonEl)

  const nextButtonEl = document.createElement("button")
  nextButtonEl.innerHTML ="Next"
  nextButtonEl.addEventListener("click",handleNextClick)
  window.codeButtons.appendChild(nextButtonEl)
}

const setLineCount = () => {
  s.totalLines = s.lineSets[0].length
}

const makeCodeExample = () => {
  setLineCount()
  makeLines()
  makeButtons()
  outputLines()
}

document.addEventListener('DOMContentLoaded', makeCodeExample)
