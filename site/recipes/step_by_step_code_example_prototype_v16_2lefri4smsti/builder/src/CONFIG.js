// This file can be used to represent
// and data that should be held outside
// of the main script

const c = {
  fadeColor: '#667',
  source: `fn main() {
  println!(
    "main got {}", widget(String::from("apple"))
  );
}

fn widget(value: String) -> String {
  println!("widget got {}", value);
  String::from("berry")
}`,
  sets: [
    {
      header: `Full Example`,
      lines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      highlights: [],
      note: ``,
      noteCoords: [1, 40],
    },

    {
      header: `Create The <code>widget</code> Function`,
      lines: [7, 10],
      highlights: [7, 10],
      overrides: [{ line: 7, text: `fn widget() {` }],
      note: ``,
      noteCoords: [3, 0],
    },

    {
      header: `Accept An Argument`,
      lines: [7, 10],
      highlights: [7, 10],
      overrides: [{ line: 7, text: `fn widget(value: String) {` }],
      note: ``,
      noteCoords: [3, 0],
    },

    {
      header: `Add A Return Type`,
      lines: [7, 10],
      highlights: [7, 10],
      overrides: [{ line: 7, text: `fn widget(value: String) -> String {` }],
      note: ``,
      noteCoords: [3, 0],
    },

    {
      header: `Show Some Output`,
      lines: [7, 8, 10],
      highlights: [8],
      note: ``,
      noteCoords: [3, 0],
    },

    {
      header: `Return some data`,
      lines: [7, 8, 9, 10],
      highlights: [9],
      note: `
      <p>Return some data</p>

<p>The last expression of a function is what gets returned. The <code>String::from("berry")</code> line is an expression so it gets returned becaue there's no semi-colon behind it. If there there was a semi-color the expression would have been terminated and nothing would have been returned</p>

`,
      noteCoords: [3, 0],
    },

    {
      header: `Stub The <code>main</code> Function`,
      lines: [1, 5, 7, 8, 9, 10, 11],
      highlights: [1, 5],
      overrides: [],
      noteCoords: [1, 40],
      note: `
      <p>Stub the <code>main</code> function</p>
`,
    },

    {
      header: `Stub A <code>println!()`,
      lines: [1, 2, 3, 4, 5, 7, 8, 9, 10, 11],
      highlights: [2, 3, 4],
      overrides: [{ line: 3, text: '    "main got {}"' }],
      noteCoords: [1, 40],
      note: `
      <p>Stub a <code>println!()</code> format string</p>
`,
    },

    {
      header: `Call <code>widget</code>`,
      lines: [1, 2, 3, 4, 5, 7, 8, 9, 10, 11],
      highlights: [3],
      overrides: [],
      noteCoords: [1, 40],
      fades: [{ line: 3, spans: [1, 2, 3, 4] }],
      note: `
<p>Call <code>widget</code> passing a <code>String</code></p>
`,
    },

    {
      header: `Check The Output`,
      lines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      highlights: [],
      overrides: [],
      note: `<p>The output from the program is:</p>
      <pre><code>widget got apple
main got berry</code></pre>
      `,
      noteCoords: [1, 40],
    },
  ],
}
