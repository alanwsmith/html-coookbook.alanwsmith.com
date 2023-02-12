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
      header: `Goal`,
      lines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      highlights: [],
      note: `
      <p>Full code example. Scroll down for step by step details</p>
      `,
      noteCoords: [1, 40],
    },

    {
      header: `Create The <code>widget</code> Function`,
      lines: [7, 10],
      highlights: [7, 10],
      overrides: [{ line: 7, text: `fn widget() {` }],
      note: `
      <p>Start by stubbing out a basic <code>widget</code> fuction. This is what the main process will send data to and receive data from.</p>
      `,
      noteCoords: [3, 0],
    },

    {
      header: `Accept An Argument`,
      lines: [7, 10],
      highlights: [7, 10],
      overrides: [{ line: 7, text: `fn widget(value: String) {` }],
      note: `
      <p>Accept a <code>String</code> that gets bound to <code>value</code></p>
`,
      noteCoords: [3, 0],
    },

    {
      header: `Add A Return Type`,
      lines: [7, 10],
      highlights: [7, 10],
      overrides: [{ line: 7, text: `fn widget(value: String) -> String {` }],
      note: `
      <p>Add a <code>-&gt; String</code> for the return type </p>
`,
      noteCoords: [3, 0],
    },

    {
      header: `Show Some Output`,
      lines: [7, 8, 10],
      highlights: [8],
      note: `
      <p>Add a <code>println!()</code> to show the value that gets passed in</p>
`,
      noteCoords: [3, 0],
    },

    {
      header: `Return Some Data`,
      lines: [7, 8, 9, 10],
      highlights: [9],
      note: `
      <p>Add a <code>String</code> to return</p>
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
      <p>Start making the <code>main</code> function</p>

`,
    },

    {
      header: `Stub A <code>println!()`,
      lines: [1, 2, 3, 4, 5, 7, 8, 9, 10, 11],
      highlights: [2, 3, 4],
      overrides: [{ line: 3, text: '    "main got {}"' }],
      noteCoords: [1, 40],
      note: `
      <p>Stub out a <code>println!()</code> with  
      a format string</p>
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
<p>Make a call to <code>widget</code> passing in a <code>String</code></p>
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
