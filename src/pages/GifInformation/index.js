import style from './GifInformation.module.css'

function GifInformation(props){
    return(
        <section className= { style.gifBox }>
            <img src={props.src} alt={props.title}/>
        </section>
    )
}

export { GifInformation }