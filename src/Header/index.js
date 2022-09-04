import { Logo } from '../Logo'
import styles from './Header.module.css'

function Header(){
    return (
        <header className={`${styles.header} container-2`}>
            <Logo/>
        </header>
    )
}

export { Header }