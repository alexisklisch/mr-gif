import { useGifs } from "../../hooks/useGifs";
import { GifBox } from "../GifBox";
import style from './GifContainer.module.css'

function GifContainer(props){
    const { keyword } = props.params;
    const { gifs } = useGifs({ keyword })

    return (
        <section className={`${style.gifsCardContainer} container-1`}>
            {gifs.map(singleGif => <GifBox src={singleGif.url} alt={singleGif.title} id={singleGif.id} title={singleGif.title} />)}
        </section>
    )
}

export { GifContainer }