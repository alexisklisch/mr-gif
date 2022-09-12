import { GifResults } from "../../components/GifResults"
import { Trendings } from "../../components/Trendings"
import { useGifs } from "../../hooks/useGifs"

const words = ['worms armageddon', 'american truck simulator', 'tini stoessel', 'gato siames', 'alfajor']
const randomPosition = Math.floor(Math.random() * words.length )



function Home(){
    const { gifs, loading } = useGifs({keyword:words[randomPosition]})

    return(
        <>
            <Trendings/>
            <GifResults gifs={gifs} loading={loading}/>
        </>
    )
}

export { Home }