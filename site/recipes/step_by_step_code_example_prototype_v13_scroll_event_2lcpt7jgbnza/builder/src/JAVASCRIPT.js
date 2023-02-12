const state = {}

const doThing = () => {
  const codeBlock = window.codeBlock
  const item1 = window.item1
  const bottomOfCodeBlock = codeBlock.offsetHeight + codeBlock.offsetTop

  state.items.forEach((item, itemIndex) => {
    if (item.offsetTop < bottomOfCodeBlock) {
      item.style.borderLeft = '1px solid red'
    } else {
      item.style.borderLeft = '1px solid green'
    }
  })
  console.log(bottomOfCodeBlock)
}

const init = () => {
  state.items = document.querySelectorAll('#contentBlock > div')
  console.log(state)
  document.addEventListener('scroll', doThing)
}

document.addEventListener('DOMContentLoaded', init)
