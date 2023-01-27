const els = {}

const loadElements = () => {
  const treeWalker = document.createTreeWalker(document.body)

  let currentNode = treeWalker.currentNode
  while (currentNode) {
    if (currentNode.id !== undefined && currentNode.id !== '') {
      els[currentNode.id] = currentNode
    }
    currentNode = treeWalker.nextNode()
  }
}

const updateValues = () => {
  els.alfa.innerHTML = 'alfa has been updated'
  els.bravo.innerHTML = 'bravo has been updated'
}

const init = () => {
  loadElements()
  updateValues()
}

document.addEventListener('DOMContentLoaded', init)
