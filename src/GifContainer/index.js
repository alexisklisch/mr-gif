import { GifBox } from "../GifBox";
import style from './GifContainer.module.css'

function GifContainer(props){
    return (
        <section className={`${style.gifsCardContainer} container-1`}>
            {props.listGifmap.map(singleGif => <GifBox src={singleGif.url} alt={singleGif.title} key={singleGif.id} title={singleGif.title} />)}
        </section>
    )
}

export { GifContainer }