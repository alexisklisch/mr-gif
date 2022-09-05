import { useState, useEffect } from 'react'
import { fetchSpecificGif } from '../../services/getSpecificGif'
import style from './GifInformation.module.css'

function GifInformation(props){
    const [ gif, setGif ] = useState('');
    const { id } = props.params

    useEffect(() => {
        fetchSpecificGif(id)
            .then(url => setGif(url))
    }, [gif, id])

    return(
        <section className= { style.gifBox }>
            <img src={gif} alt={props.title}/>
        </section>
    )
}

export { GifInformation }