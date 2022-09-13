import { Link } from 'wouter'
import styles from './GifBox.module.css'

function GifBox(props){
    return (
        <Link className={styles.link} to={`/gif/${props.id}`}>
            <article className={styles.gifCard}>
                <img src={props.src} alt={props.title} key={props.url}/>
                <h3>{props.title}</h3>
            </article>
        </Link>
    )
}

export { GifBox }