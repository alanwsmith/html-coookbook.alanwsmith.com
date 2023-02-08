const config = {
  source: `use std::env; 
 
fn main() { 
  let envVarResult = env::var("HOME"); 
  match envVarResult { 
    Ok(item) => { 
      println!("got {}", item); 
    } 
    Err(error) => { 
      println!("error {}", error); 
    } 
  } 
}`,

  sets: [
    {
      lines: [1],
    },
  ],
}

const init = () => {
  console.log('init')
}

document.addEventListener('DOMContentLoaded', init)
