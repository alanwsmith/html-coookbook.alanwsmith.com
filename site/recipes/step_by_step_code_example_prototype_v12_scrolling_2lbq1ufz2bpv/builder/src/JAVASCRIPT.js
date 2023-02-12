function handleIntersect1(entries, observer) {
  entries.forEach((entry) => {
    const id = entry.target.id
    const clientTop = entry.boundingClientRect.top
    const rootTop = entry.rootBounds.top
    const clientBottom = entry.boundingClientRect.bottom
    if (clientTop < rootTop && clientBottom > rootTop && entry.isIntersecting) {
      console.log('scrolling down')
      console.log(`-- ${id} - ${clientTop} - ${rootTop} - ${clientBottom}`)
      window.currentCode.innerHTML = c.code[entry.target.id]
    }
  })
}

function handleIntersect2(entries, observer) {
  entries.forEach((entry) => {
    const id = entry.target.id
    const clientTop = entry.boundingClientRect.top
    const rootTop = entry.rootBounds.top
    const clientBottom = entry.boundingClientRect.bottom
    if (clientTop <= rootTop && entry.isIntersecting === false) {
      const nextSibling = entry.target.nextElementSibling
      if (nextSibling) {
        const nextId = nextSibling.id
        console.log('scrolling up')
        console.log(`-- ${id} - ${clientTop} - ${rootTop} - ${clientBottom}`)
        window.currentCode.innerHTML = c.code[nextId]
        // console.log(entry.isIntersecting)
      }
    }
  })
}

function handleIntersect3(entries, observer) {
  entries.forEach((entry) => {
    const id = entry.target.id
    const clientTop = entry.boundingClientRect.top
    const rootTop = entry.rootBounds.top
    const clientBottom = entry.boundingClientRect.bottom
    if (clientTop <= rootTop) {
      const theElement = entry.isIntersecting
        ? entry.target
        : entry.target.nextElementSibling
      if (theElement) {
        console.log(theElement.id)
        window.currentCode.innerHTML = c.code[theElement.id]
      }

      // if (entry.isIntersecting) {
      // } else {
      //   const nextSibling = entry.target.nextElementSibling
      //   if (nextSibling) {
      //     const nextId = nextSibling.id
      //     console.log('scrolling up')
      //     console.log(`-- ${id} - ${clientTop} - ${rootTop} - ${clientBottom}`)
      //     window.currentCode.innerHTML = c.code[nextId]
      //     console.log(entry.isIntersecting)
      //   }
      // }
    }
  })
}

function createObservers() {
  const options1 = {
    root: null,
    rootMargin: '-200px 0px 200px 0px',
    threshold: 0.9,
    // moving this to 1 didn't work with current setup
    // could probalby shuffle the other handler checks,
    // but this works
  }
  const options2 = {
    root: null,
    rootMargin: '-200px 0px 200px 0px',
    threshold: 0.6,
  }
  const observer1 = new IntersectionObserver(handleIntersect1, options1)
  const observer2 = new IntersectionObserver(handleIntersect2, options2)
  const els = window.contentArea.getElementsByTagName('div')
  for (let i = 0; i < els.length; i++) {
    observer1.observe(els[i])
    observer2.observe(els[i])
  }
}

function _createObservers_v2() {
  const options3 = {
    root: null,
    rootMargin: '-200px 0px 200px 0px',
    threshold: 0.6,
  }
  const observer3 = new IntersectionObserver(handleIntersect3, options3)
  const els = window.contentArea.getElementsByTagName('div')
  for (let i = 0; i < els.length; i++) {
    observer3.observe(els[i])
  }
}
const init = () => {
  window.currentCode.innerHTML = c.code['code1']
  createObservers()
}

window.addEventListener('load', init)
