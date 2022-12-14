import { Link } from 'wouter'
import styles from './Trendings.module.css'

function Trendings(){
    return(
        <section className={styles.linksContainer}>
            <Link to="/search/buenos aires">Buenos Aires π¦π·</Link>
            <Link to="/search/porto">Porto π΅πΉ</Link>
            <Link to="/search/wyoming">Wyoming πΊπΈ</Link>
        </section>
    )
}

export { Trendings }