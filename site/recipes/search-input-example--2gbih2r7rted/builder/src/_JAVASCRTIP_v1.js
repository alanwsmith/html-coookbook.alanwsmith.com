var input = document.querySelector('input')
var options = Array.from(document.querySelector('datalist').options).map(
    function (el) {
        return el.innerHTML
    }
) //Optional if you have data
input.addEventListener('keypress', function (e) {
    if (e.keyCode == 13) {
        var relevantOptions = options.filter(function (option) {
            return option.toLowerCase().includes(input.value.toLowerCase())
        }) // filtering the data list based on input query
        if (relevantOptions.length > 0) {
            input.value = relevantOptions.shift() //Taking the first
        }
    }
})

const watchIt = (event) => {
    const dl = document.getElementById('ice-cream-flavors')
    const i = event.target
    console.log(i)
    console.log(i.value)
    // console.log(i.dataset)

    // console.log(i.which)
    // console.log(i.detail)
    // console.log(dl)
    // console.log(dl.selectionStart)
    // console.log(dl.selectionEnd)
    // console.log(dl.textContext)
    // console.log(dl.setp)
    // console.log(dl.options)
    // console.log(event)
    // console.log(dl.part.value)
    // console.log(dl.nodeValue)
    // console.log(dl.slot)
    // console.log(dl.tabIndex)
    // console.log(dl.innerText)
    // console.log(dl.outerText)
    // console.log(dl.outerText)
    // console.log(dl.toString())
    // console.log(dl.valueOf())
    // // console.log(dl.dateset.toString())
    // // console.log(dl.dateset.valueOf())
    // console.log(event.target.getTargetRanges())
    // console.log(event.getTargetRanges())
    // console.log(dl.getNamedItem())
}

const kickoff = () => {
    // console.log('kickoff')
    // const dl_prep = document.getElementById('ice-cream-flavors')
    // dl_prep.ariaCurrent = true
    // dl_prep.ariaSelected = true
    // dl_prep.ariaValueText = true
    // dl_prep.assignedSlot = true
    // document
    //     .getElementById('ice-cream-choice')
    //     .addEventListener('input', watchIt)
    // dl_prep.addEventListener('change', () => {
    //     console.log('YUIIYIUIY')
    // })
    // dl_prep.addEventListener('input', () => {
    //     console.log('YUIIYIUIY')
    // })
}

document.addEventListener('DOMContentLoaded', kickoff)
