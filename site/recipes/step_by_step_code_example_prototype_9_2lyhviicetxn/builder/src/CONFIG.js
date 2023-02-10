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
      lines: [1],
    },
    {
      lines: [3],
    },
  ],
}
