import styles from './GifBox.module.css'

function GifBox(props){
    return (
        <article className={styles.gifCard}>
            <img src={props.src} alt={props.title}/>
            <h3>{props.title}</h3>
        </article>
    )
}

export { GifBox }