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
  for (let i = 0; i < s.lineCount ; i ++) {
    const newLineEl = document.createElement("div");
    newLineEl.id = `codeExampleLine_${i}`
    window.codeExample.appendChild(newLineEl);
  }
}

const outputLines = () => {

}


const setLineCount = () => {
  s.lineCount = s.lineSets[0].length
}

const makeCodeExample = () => {
  console.log('makeCodeExample')
  setLineCount()
  makeLines()
  outputLines()
}

document.addEventListener('DOMContentLoaded', makeCodeExample)
