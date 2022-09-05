const API_KEY = '4OQtIl4HlkparAaTSH5zw1q708pIcezP'

const fetchSpecificGif = async ( idGif ) => {
    const apiURL = `https://api.giphy.com/v1/gifs/${idGif}?api_key=${API_KEY}`

    return fetch(apiURL)
        .then(res => res.json())
        .then(response => {
            const {data} = response
            const url = data.images.downsized_medium.url
            console.log(url);
            return url
        })
}

export { fetchSpecificGif }