const state = {}

const doThing = () => {
  const codeBlock = window.codeBlock
  const bottomOfCodeBlock = codeBlock.offsetHeight + codeBlock.offsetTop

  const activeItems = []

  state.items.forEach((item, itemIndex) => {
    if (item.offsetTop > bottomOfCodeBlock) {
      item.style.borderLeft = '1px solid green'
      activeItems.push(itemIndex)
    } else {
      item.style.borderLeft = '1px solid red'
    }
  })

  if (activeItems.length > 0) {
    console.log(activeItems[0])
    // window.theCode.innerHTML = c.sets[state.activeItems[0]]
  }

  // console.log(bottomOfCodeBlock)
}

const init = () => {
  state.items = document.querySelectorAll('#contentBlock > div')
  state.lines = c.source.split('\n')
  doThing()
  document.addEventListener('scroll', doThing)
}

document.addEventListener('DOMContentLoaded', init)
