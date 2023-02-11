// const multiplier = 0.7

function handleIntersect2(entries, observer) {
  entries.forEach((entry) => {
    const id = entry.target.id
    const clientTop = entry.boundingClientRect.top
    const rootTop = entry.rootBounds.top
    const rootBottom = entry.rootBounds.bottom
    const clientBottom = entry.boundingClientRect.bottom

    if (clientTop < rootTop && clientBottom > rootTop) {
      console.log(
        `-- down - ${id} - ${clientTop} - ${rootTop} - ${clientBottom}`
      )
    }
  })
}

function handleIntersect1(entries, observer) {
  entries.forEach((entry) => {
    const id = entry.target.id
    const clientTop = entry.boundingClientRect.top
    const rootTop = entry.rootBounds.top
    const clientBottom = entry.boundingClientRect.bottom

    if (clientTop < rootTop) {
      console.log(`-- up - ${id} - ${clientTop} - ${rootTop} - ${clientBottom}`)
      // } else if (clientTop < rootTop && clientBottom > rootTop) {
      // console.log(`-- dn - ${id} - ${clientTop} - ${rootTop} - ${clientBottom}`)
    }

    // console.log(
    //   `-- ${entry.target.id} - ${entry.boundingClientRect.top} - ${entry.rootBounds.top} -   ${entry.boundingClientRect.bottom}`
    // )

    //if (
    //  entry.boundingClientRect.top < entry.rootBounds.top &&
    //  entry.boundingClientRect.bottom > entry.rootBounds.top
    //) {
    //  console.log('a')
    //  //window.currentId.innerHTML = entry.target.id
    //} else if (
    //  entry.boundingClientRect.top < entry.rootBounds.top &&
    //  entry.boundingClientRect.bottom > entry.rootBounds.top
    //) {
    //  console.log('b')
    //  // window.currentId.innerHTML = entry.target.nextElementSibling.id
    //}
  })
}

function createObservers() {
  const options1 = {
    root: null,
    rootMargin: '-100px',
    threshold: 1.0,
  }
  const options2 = {
    root: null,
    rootMargin: '-100px',
    threshold: 0,
  }
  const observer1 = new IntersectionObserver(handleIntersect1, options1)
  const observer2 = new IntersectionObserver(handleIntersect2, options2)

  const els = window.contentArea.getElementsByTagName('li')
  for (let i = 0; i < els.length; i++) {
    observer1.observe(els[i])
    observer2.observe(els[i])
  }
}

window.addEventListener('load', createObservers)
