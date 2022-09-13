import { useContext, useEffect } from 'react'
import GifsContext from '../../context/GifsContext'
import style from './GifInformation.module.css'

function GifInformation(props){
    const { id } = props.params
    const { gifs } = useContext(GifsContext)
    const arrayContext = gifs.find(item => item.id === id)

    useEffect(() => {
        document.title = arrayContext.title
    }, [arrayContext])

    return(
        <section className= { style.gifBox }>
            <img src={arrayContext.url} alt={arrayContext.title}/>
            <h2>{arrayContext.title}</h2>
            <a rel='noreferrer' target='_blank' href={arrayContext.url}>Link</a>
        </section>
    )
}

export { GifInformation }