// This file can be used to represent
// and data that should be held outside
// of the main script

const c = {
  fadeColor: '#667',
  source: `fn main() {
  println!(
    "main got {}", 
    widget(String::from("apple"))
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
      highlights: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      rowHighlights: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      overrides: [],
      fades: [],
      note: ``,
      noteCoords: [1, 40],
    },

    {
      header: `Create The <code>widget</code> Function`,
      lines: [8, 11],
      highlights: [8],
      rowHighlights: [8, 9, 10, 11],
      overrides: [{ line: 8, text: `fn widget() {` }],
      fades: [],
      note: ``,
      noteCoords: [3, 0],
    },

    {
      header: `Accept An Argument`,
      lines: [8, 11],
      highlights: [8],
      rowHighlights: [8, 9, 10, 11],
      overrides: [{ line: 8, text: `fn widget(value: String) {` }],
      fades: [{ line: 8, spans: [1, 2, 3, 4, 9, 10, 11] }],
      note: ``,
      noteCoords: [3, 0],
    },

    {
      header: `Add A Return Type`,
      lines: [8, 11],
      highlights: [8],
      rowHighlights: [8, 9, 10, 11],
      overrides: [{ line: 8, text: `fn widget(value: String) -> String {` }],
      fades: [{ line: 8, spans: [1, 2, 3, 4, 5, 6, 7, 8, 9, 15] }],
      note: ``,
      noteCoords: [3, 0],
    },

    {
      header: `Show Some Output`,
      lines: [8, 9, 11],
      highlights: [9],
      rowHighlights: [8, 9, 10, 11],
      overrides: [],
      fades: [],
      note: ``,
      noteCoords: [3, 0],
    },

    {
      header: `Return some data`,
      lines: [8, 9, 10, 11],
      highlights: [10],
      rowHighlights: [8, 9, 10, 11],
      overrides: [],
      fades: [],
      note: `
<p>The last expression of a function is what gets returned. 
The <code>String::from("berry")</code> line is an expression 
so it gets returned becaue there's no semi-colon behind it. 
If there was a semi-color the expression would have been, 
terminated and nothing would have been returned</p>

`,
      noteCoords: [3, 0],
    },

    {
      header: `Create <code>main</code> and stub a <code>println!()</code>`,
      lines: [1, 2, 3, 5, 6, 7, 8, 9, 10, 11],
      highlights: [1, 2, 3, 4, 5, 6],
      rowHighlights: [1, 2, 3, 4, 5, 6],
      overrides: [],
      // overrides: [{ line: 7, text: `fn widget(value: String) -> String {` }],
      fades: [],
      noteCoords: [1, 40],
      note: ``,
    },

    {
      header: `Call <code>widget</code>`,
      lines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      highlights: [4],
      rowHighlights: [1, 2, 3, 4, 5, 6],
      overrides: [],
      fades: [{ line: 3, spans: [1, 2, 3, 4] }],
      noteCoords: [1, 40],
      note: `
<p>Call <code>widget</code> passing a <code>String</code></p>
`,
    },

    {
      header: `Check The Output`,
      lines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      highlights: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      rowHighlights: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      overrides: [],
      fades: [],
      note: `<p>The output from the program is:</p>
      <pre><code>widget got apple
main got berry</code></pre>
      `,
      noteCoords: [1, 40],
    },
  ],
}
