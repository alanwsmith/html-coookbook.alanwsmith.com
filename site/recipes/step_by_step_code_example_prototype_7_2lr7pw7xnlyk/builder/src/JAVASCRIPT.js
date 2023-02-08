const s = {
  currentSet: 0,
  maxSet: 4,
}

const handleNextClick = () => {
  console.log(`Next: ${s.currentSet}`)
  if (s.currentSet < s.maxSet) {
    update(s.currentSet + 1)
  }
}

const handlePreviousClick = () => {
  console.log(`Previous: ${s.currentSet}`)
  if (s.currentSet > 0) {
    update(s.currentSet - 1)
  }
}

const update = (setIndex) => {
  console.log(`Updating to: ${setIndex}`)
  s.currentSet = setIndex

  if (s.currentSet === 0) {
    window.line_0.innerHTML = "this is"
    window.line_1.innerHTML = " "
    window.line_2.innerHTML = " "
    window.line_3.innerHTML = " "
    window.textBlock.style.top = '2.3rem'
  } else if (s.currentSet === 1) {
    window.line_0.innerHTML = "this is the line"
    window.line_1.innerHTML = " "
    window.line_2.innerHTML = " "
    window.line_3.innerHTML = " "
    window.textBlock.style.top = '2.3rem'
  } else if (s.currentSet === 2) {
    window.line_0.innerHTML = "this is the line"
    window.line_1.innerHTML = "with some more text"
    window.line_2.innerHTML = " "
    window.line_3.innerHTML = " "
    window.textBlock.style.top = '3.6rem'
  } else if (s.currentSet === 3) {
    window.line_0.innerHTML = "this is the line"
    window.line_1.innerHTML = "with some more text"
    window.line_2.innerHTML = "and the quick brown fox"
    window.line_3.innerHTML = " "
    window.textBlock.style.top = '4.9rem'
  } else if (s.currentSet === 4) {
    window.line_0.innerHTML = "this is the line"
    window.line_1.innerHTML = "with some more text"
    window.line_2.innerHTML = "and the quick brown fox"
    window.line_3.innerHTML = "and the lazy dog"
    window.textBlock.style.top = '6.2rem'
  }
}

const init = () => {
  console.log("init")
  window.previousButton.addEventListener('click', handlePreviousClick)
  window.nextButton.addEventListener('click', handleNextClick)
  update(0)
}

document.addEventListener('DOMContentLoaded', init)
