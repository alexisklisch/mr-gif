const API_KEY = '4OQtIl4HlkparAaTSH5zw1q708pIcezP'

const fetchGifs = async ( searchWord ) => {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchWord}&limit=10&offset=0&rating=r&lang=es`

    return fetch(apiURL)
          .then(res => res.json())
          .then(response => {
            const {data} = response
            const gifs = data.map(image => {
                const { id, title, images } = image
                const url = images.downsized_medium.url

                return { id, title, url}
                
            })
            return gifs
        })
}

export { fetchGifs }