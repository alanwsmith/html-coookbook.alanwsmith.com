const doThing = () => {
  const codeBlock = window.codeBlock
  const item1 = window.item1

  const bottomOfCodeBlock = codeBlock.offsetHeight + codeBlock.offsetTop
  const topOfItemBlock = item1.offsetTop

  console.log(bottomOfCodeBlock)
  console.log(topOfItemBlock)

  if (topOfItemBlock < bottomOfCodeBlock) {
    item1.style.borderLeft = '1px solid green'
  } else {
    item1.style.borderLeft = '1px solid red'
  }

  // console.log(window.scrollY)
}

// const tmp = () => {
//   console.log(b.offsetWidth)
//   console.log(b.offsetHeight)
// }

const init = () => {
  document.addEventListener('scroll', doThing)
  // tmp()
}

document.addEventListener('DOMContentLoaded', init)
