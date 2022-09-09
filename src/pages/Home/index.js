import { GifBox } from "../../components/GifBox"
import { SearchForm } from "../../components/SearchForm"
import { Trendings } from "../../components/Trendings"
import { useGifs } from "../../hooks/useGifs"
import style from "../../components/GifContainer/GifContainer.module.css"

const words = ['game worms', 'american truck simulator', 'tini', 'gato siames']
const randomPosition = Math.floor(Math.random() * words.length )


function Home(){
    const { gifs } = useGifs({keyword:words[randomPosition]})

    return(
        <>
            <SearchForm/>
            <Trendings/>
            <section className={`${style.gifsCardContainer} container-1`}>
                {gifs.map(singleGif => <GifBox src={singleGif.url} alt={singleGif.title} id={singleGif.id} title={singleGif.title} />)}
            </section>
        </>
    )
}

export { Home }