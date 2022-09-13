import { useEffect } from "react"
import { GifResults } from "../../components/GifResults"
import { Trendings } from "../../components/Trendings"
import { useGifs } from "../../hooks/useGifs"

const words = ['worms armageddon', 'starbucks', 'tini stoessel', 'gato siames', 'cerdito rosa', 'charmander']
const randomPosition = Math.floor(Math.random() * words.length )

function Home(){
    const { gifs, loading } = useGifs({keyword:words[randomPosition]})

    useEffect(() => {
        document.title = "Find your favorites GIF and share with your friends!"
    }, [])

    return(
        <>
            <Trendings/>
            <GifResults gifs={gifs} loading={loading}/>
        </>
    )
}

export { Home }