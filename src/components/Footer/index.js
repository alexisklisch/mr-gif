import {LogoAlexisKlisch} from '../LogoAlexisKlisch'
import styles from './Footer.module.css'

function Footer(){
    return (
        <footer className={styles.footer}>
            {/* <svg className={styles.footer__separator} viewBox="0 0 321 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 7.53403e-05V20.354H320.999L0 7.53403e-05Z" fill="#EEEEEE"/>
            </svg> */}
            <a className={styles.linkAlexis} href='https://alexisklisch.com'><LogoAlexisKlisch/></a>
        </footer>
    )
}

export { Footer }