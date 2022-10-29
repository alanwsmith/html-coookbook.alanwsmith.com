const kickoff = () => {
    console.log('kickoff')

    const fonts = [
        { key: 'roboto', value: 'Roboto' },
        { key: 'opensans', value: 'OpenSans' },
        { key: 'montserrat', value: 'Montserrat' },
        { key: 'lato', value: 'Lato' },
        { key: 'poppins', value: 'Poppins' },
        { key: 'sourcesanspro', value: 'Source Sans Pro' },
        { key: 'robotocondensed', value: 'Roboto Condensed' },
        { key: 'oswald', value: 'Oswald' },
        { key: 'robotomono', value: 'Roboto Mono' },
        { key: 'raleway', value: 'Raleway' },
        { key: 'inter', value: 'Inter' },
        { key: 'notosans', value: 'Noto Sans' },
        { key: 'ubuntu', value: 'Ubuntu' },
        { key: 'mukta', value: 'Mukta' },
        { key: 'robotoslab', value: 'Roboto Slab' },
        { key: 'nunito', value: 'Nunito' },
        { key: 'playfairdisplay', value: 'Playfair Display' },
        { key: 'ptsans', value: 'PT Sans' },
        { key: 'nunitosans', value: 'Nunito Sans' },
        { key: 'merriweather', value: 'Merriweather' },
        { key: 'rubik', value: 'Rubik' },
        { key: 'notosanskr', value: 'Noto Sans KR' },
        { key: 'worksans', value: 'Work Sans' },
        { key: 'lora', value: 'Lora' },
        { key: 'firasans', value: 'Fira Sans' },
    ]

    MdashAutocomplete.prototype.sources.font = async (query, max) => {
        // 1. Use `query` to fetch, filter, map, find, or whatever your use case is for getting matching results.
        // Note: `max` is the most results that will be shown, which can be helpful to know when dealing with large data sets.

        const matches = []

        fonts.forEach((font) => {
            // console.log(font)
            if (font.value.toLowerCase().includes(query.toLowerCase())) {
                matches.push(font.value)
            }
        })

        console.log(new Date().getTime())

        // const matches = ['apple', 'banana', 'peach'].filter((fruit) => {
        //     fruit.includes(query)
        // })

        // 2. Result must be an object with the original `query` param and a `matches` Array.
        // Note: `matches` elements can be strings or objects with `id` and `value` properties. See Events API above for more details.
        const result = {
            query,
            matches,
        }

        // 3. Return a resolved Promise with the result (async functions do this automatically).
        return result
    }
}

document.addEventListener('DOMContentLoaded', kickoff)
