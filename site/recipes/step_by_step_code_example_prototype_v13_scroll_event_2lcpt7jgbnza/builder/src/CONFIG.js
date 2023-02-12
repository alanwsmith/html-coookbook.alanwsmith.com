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

fn widget (value: String) -> String {
  println!("widget got {}", value);
  String::from("berry")
}`,
  sets: [
    {
      lines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      highlights: [],
      note: `
      <p>This is an example of a function that takes an argument and returns a value. </p>
      <p>A <code>String</code> is sent from <code>main</code> to <code>widget</code> 
      where it's printed out. <code>widget</code> then passes a string back to 
      <code>main</code> for it to print.
      </p>
      `,
      noteCoords: [1, 40],
    },

    {
      lines: [7, 10],
      highlights: [7, 10],
      overrides: [{ line: 7, text: `fn widget() {` }],
      note: `
      <p>Start creating a <code>widget</code> function.</p>
      `,
      noteCoords: [3, 0],
    },

    {
      lines: [7, 10],
      highlights: [7, 10],
      overrides: [{ line: 7, text: `fn widget(thing: String) {` }],
      note: `
      <p>Set it up to accept a <code>String</code> that gets bound to 
      an internal variable called <code>thing</code> with:</p>
      <pre><code class="language-rust">thing: String</code></pre>
`,
      noteCoords: [3, 0],
    },

    {
      lines: [7, 10],
      highlights: [7, 10],
      overrides: [{ line: 7, text: `fn widget(thing: String) -> String {` }],
      note: `
      <p>Finish the signature by adding a <code>String</code> return type with:</p>

      <pre><code class="language-rust">-&gt; String</code></pre>
`,
      noteCoords: [3, 0],
    },

    {
      lines: [7, 8, 11],
      highlights: [8],
      note: `
      <p>Add a <code>println!()</code> to show the value passed into <code>widget</code></p>
`,
      noteCoords: [3, 0],
    },

    {
      lines: [7, 8, 9, 10, 11],
      highlights: [9],
      note: `
      <p>Add a <code>String</code> as the last thing in the function. </p>
      Using a <code>String</code> here since that's what the function
      is speced to return</p>
      <p><code>String::from()</code> is an expression which means
      it has a value. Since there's no semi-colon after it that
      value is what gets passed back from the function </p>
<p>
`,
      noteCoords: [3, 0],
    },

    {
      lines: [1, 5, 7, 8, 9, 10, 11],
      highlights: [1, 5],
      overrides: [],
      noteCoords: [1, 40],
      note: `
      <p>Start making the <code>main</code> function</p>

`,
    },

    {
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
      lines: [1, 2, 3, 4, 5, 7, 8, 9, 10, 11],
      highlights: [3],
      overrides: [],
      noteCoords: [1, 40],
      fades: [{ line: 3, spans: [1, 2, 3, 4] }],
      note: `
<p>Make a call to <code>widget</code> passing in
a <code>String</code> as an argument with:</p>

<pre><code>widget(String::from("apple"))</code></pre>

`,
    },

    {
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
