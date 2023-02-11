function handleIntersect(entries, observer) {
  entries.forEach((entry) => {
    if (entry.boundingClientRect.top < entry.rootBounds.top) {
      window.currentId.innerHTML = entry.target.nextElementSibling.id
    } else if (entry.boundingClientRect.top < entry.rootBounds.top) {
      window.currentId.innerHTML = entry.target.id
    }
  })
}

function createObserver() {
  const options = {
    root: window.scrollArea,
    rootMargin: '0px',
    threshold: 0,
  }
  const observer = new IntersectionObserver(handleIntersect, options)
  const els = document.getElementsByTagName('li')
  for (let i = 0; i < els.length; i++) {
    observer.observe(els[i])
  }
}

window.addEventListener('load', createObserver)
