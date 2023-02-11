const visiblePercent = 0

function handleIntersect(entries, observer) {
  entries.forEach((entry) => {
    console.log('asdf')
    if (
      entry.boundingClientRect.top < entry.rootBounds.top &&
      entry.intersectionRatio < visiblePercent
    ) {
      if (entry.target.nextElementSibling) {
        window.display1.innerHTML = `Currently on ${entry.target.nextElementSibling.id}`
      }
    } else if (
      entry.boundingClientRect.top < entry.rootBounds.top &&
      entry.intersectionRatio >= visiblePercent
    ) {
      window.display1.innerHTML = `Currently on ${entry.target.id}`
    }
  })
}

function createObserver() {
  const options = {
    root: window.scrollableArea1,
    rootMargin: '0px',
    threshold: visiblePercent,
  }
  const observer = new IntersectionObserver(handleIntersect, options)
  const els = document.getElementsByTagName('li')
  for (let i = 0; i < els.length; i++) {
    observer.observe(els[i])
  }
}

window.addEventListener('load', createObserver)
