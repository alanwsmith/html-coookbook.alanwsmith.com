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
      noteCoords: [3, 0],
    },

    {
      lines: [7, 11],
      highlights: [7],
      overrides: [{ line: 7, text: `fn widget(thing: String) {` }],
      note: `
// Setup \`widget\` to accept a \`String\` 
// argument and bind it to the local 
// variable \`thing\`

`,
      noteCoords: [3, 0],
    },

    {
      lines: [7, 11],
      highlights: [7],
      overrides: [{ line: 7, text: `fn widget(thing: String) -> String {` }],
      note: `
// Add a \`String\` return type



`,
      noteCoords: [3, 0],
    },

    {
      lines: [7, 8, 11],
      highlights: [8],
      note: `
// Create a \`println!()\` output that shows
// the \`thing\` variable that gets passed
// into the function

`,
      noteCoords: [3, 0],
    },

    {
      lines: [7, 8, 9, 10, 11],
      highlights: [9, 10],
      note: `
// Create a \`bravo\` variable and assign it a 
// \`String\` so it matches the return type then 
// return it as the last expression of the function

`,
      noteCoords: [3, 0],
    },

    {
      lines: [1, 2, 5, 7, 8, 9, 10, 11],
      highlights: [1, 2, 5],
      overrides: [],
      noteCoords: [1, 40],
      note: `
// Create the \`main()\` function and a
// variable named \`alfa\` with a \`String\` 
// bound to it. 

`,
    },

    {
      lines: [1, 2, 3, 5, 7, 8, 9, 10, 11],
      highlights: [3],
      overrides: [],
      noteCoords: [1, 40],
      note: `
// Add a variable named \`charlie\` that 
// passes the \`alfa\` variable to \`widget\`

`,
    },

    {
      lines: [1, 2, 3, 4, 5, 7, 8, 9, 10, 11],
      highlights: [4],
      overrides: [],
      noteCoords: [1, 40],
      note: `
// Finally print out the value in 
// \`charlie\` to show the value it
// received from \`widget\`

`,
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
