import style from './GifInformation.module.css'

function GifInformation(props){
    const { id } = props.params
    return(
        <section className= { style.gifBox }>
            {/* <img src={props.src} alt={props.title}/> */}
            <p>Estás en el gif: {id}</p>
        </section>
    )
}

export { GifInformation }