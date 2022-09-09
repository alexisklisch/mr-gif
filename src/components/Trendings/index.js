import { Link } from 'wouter'
import styles from './Trendings.module.css'

function Trendings(){
    return(
        <section className={styles.linksContainer}>
            <Link to="/search/buenos aires">Buenos Aires 🇦🇷</Link>
            <Link to="/search/porto">Porto 🇵🇹</Link>
            <Link to="/search/wyoming">Wyoming 🇺🇸</Link>
        </section>
    )
}

export { Trendings }