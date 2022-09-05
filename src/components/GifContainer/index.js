import {useState, useEffect} from 'react'
import { fetchGifs } from '../../services/getGifs'
import { GifBox } from "../GifBox";
import style from './GifContainer.module.css'

function GifContainer(props){

    const [gifs, setGifs] = useState(['bigote'])
    const { keyword } = props.params;

    useEffect(() => {
      fetchGifs(keyword).then(gifs => setGifs(gifs))
    },[keyword])

    return (
        <section className={`${style.gifsCardContainer} container-1`}>
            {gifs.map(singleGif => <GifBox src={singleGif.url} alt={singleGif.title} key={singleGif.id} title={singleGif.title} />)}
        </section>
    )
}

export { GifContainer }