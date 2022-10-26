document.addEventListener('DOMContentLoaded', () => {
    console.log('asdf')
    var input = document.getElementById('fonts')
    var options = Array.from(document.getElementById('fontList').options).map(
        function (el) {
            return el.innerHTML
        }
    ) //Optional if you have data
    input.addEventListener('keypress', function (e) {
        console.log('here')
        if (e.keyCode == 13) {
            console.log('ping')
            var relevantOptions = options.filter(function (option) {
                return option.toLowerCase().includes(input.value.toLowerCase())
            }) // filtering the data list based on input query
            if (relevantOptions.length > 0) {
                input.value = relevantOptions.shift() //Taking the first
            }
        }
    })
})
