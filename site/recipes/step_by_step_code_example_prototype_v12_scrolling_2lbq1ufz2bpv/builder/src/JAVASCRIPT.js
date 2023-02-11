function handleIntersect1(entries, observer) {
  entries.forEach((entry) => {
    const id = entry.target.id
    const clientTop = entry.boundingClientRect.top
    const rootTop = entry.rootBounds.top
    const clientBottom = entry.boundingClientRect.bottom
    if (clientTop < rootTop && clientBottom > rootTop) {
      window.currentId.innerHTML = entry.target.id
    }
  })
}

function handleIntersect2(entries, observer) {
  entries.forEach((entry) => {
    const id = entry.target.id
    const clientTop = entry.boundingClientRect.top
    const rootTop = entry.rootBounds.top
    if (clientTop < rootTop) {
      window.currentId.innerHTML = entry.target.id
    }
  })
}

function createObservers() {
  const options1 = {
    root: null,
    rootMargin: '-200px',
    threshold: 0,
  }
  const options2 = {
    root: null,
    rootMargin: '-200px',
    threshold: 1,
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
