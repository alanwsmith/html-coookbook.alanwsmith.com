function handleIntersect1(entries, observer) {
  entries.forEach((entry) => {
    const id = entry.target.id
    const clientTop = entry.boundingClientRect.top
    const rootTop = entry.rootBounds.top
    const clientBottom = entry.boundingClientRect.bottom
    console.log(`${id} - ${clientTop} - ${rootTop} - ${clientBottom}`)
    if (clientTop < rootTop && clientBottom > rootTop) {
      console.log('scrolling down')
      window.currentCode.innerHTML = entry.target.id
    }
  })
}

function handleIntersect2(entries, observer) {
  entries.forEach((entry) => {
    const id = entry.target.id
    const clientTop = entry.boundingClientRect.top
    const rootTop = entry.rootBounds.top
    const clientBottom = entry.boundingClientRect.bottom
    console.log(`${id} - ${clientTop} - ${rootTop} - ${clientBottom}`)
    if (clientTop <= rootTop) {
      console.log('scrolling up')
      window.currentCode.innerHTML = c.code[entry.target.id]
    }
  })
}

function createObservers() {
  const options1 = {
    root: null,
    rootMargin: '-200px 0px 200px 0px',
    threshold: 0,
  }
  const options2 = {
    root: null,
    rootMargin: '-200px 0px 200px 0px',
    threshold: 1,
  }
  const observer1 = new IntersectionObserver(handleIntersect1, options1)
  const observer2 = new IntersectionObserver(handleIntersect2, options2)

  const els = window.contentArea.getElementsByTagName('div')
  for (let i = 0; i < els.length; i++) {
    observer1.observe(els[i])
    observer2.observe(els[i])
  }
}

const init = () => {
  window.currentCode.innerHTML = c.code.code1
  createObservers()
}

window.addEventListener('load', init)
