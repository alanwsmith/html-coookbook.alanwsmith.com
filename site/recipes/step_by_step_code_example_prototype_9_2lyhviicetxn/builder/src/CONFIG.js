// This file can be used to represent
// and data that should be held outside
// of the main script

const c = {
  source: `fn main() { 
  let alfa = String::from("apple"); 
  let charlie = widget(alfa); 
  println!("charlie is {charlie}"); 
} 
 
fn widget(thing: String) -> String { 
  println!("widget got {thing}"); 
  let bravo = String::from("berry"); 
  bravo 
}`,
  sets: [
    {
      lines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      highlights: [],
      overrides: [],
      note: `// Full source code`,
      noteCoords: [1, 40],
    },
    {
      lines: [7, 11],
      highlights: [7, 11],
      overrides: [{ line: 7, text: `fn widget() {` }],
      note: `
// Start by creating a basic \`widget()\` 
// function

`,
      noteCoords: [4, 0],
    },

    {
      lines: [1, 2, 11],
      highlights: [1, 2, 11],
      overrides: [],
      note: `
// Create the \`main()\` function and a
// variable with a String bound to it. 

`,
      noteCoords: [4, 3],
    },
    {
      lines: [1, 2, 3, 11],
      highlights: [2, 3],
      overrides: [],
      note: `
// this is a test
// string for testing`,
      noteCoords: [2, 50],
    },
    {
      lines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      highlights: [],
      overrides: [],
      note: `// Click run to see the output`,
      noteCoords: [1, 40],
    },
  ],
}
