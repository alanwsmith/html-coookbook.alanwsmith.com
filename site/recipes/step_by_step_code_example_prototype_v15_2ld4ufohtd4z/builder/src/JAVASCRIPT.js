const makeElement = (
  _type,
  _id,
  _html,
  _childOf,
  _event,
  _function,
  _classes
) => {
  const newElement = document.createElement(_type)
  newElement.id = _id
  newElement.innerHTML = _html
  window[_childOf].appendChild(newElement)
  if (_event !== null) {
    newElement.addEventListener(_event, _function)
  }
  if (_classes) {
    newElement.classList.add(_classes)
  }
}

const makeNotes = () => {
  c.sets.forEach((setData, setIndex) => {
    makeElement(
      'div',
      `set${setIndex}`,
      setData.note,
      'contentBlock',
      null,
      null
    )
  })
}

const updateEverything = () => {
  console.log('updating')
}

const init = () => {
  c.rawLines = c.source.split('\n')
  makeNotes()
  updateEverything()
  document.addEventListener('scroll', updateEverything)
}

document.addEventListener('DOMContentLoaded', init)
