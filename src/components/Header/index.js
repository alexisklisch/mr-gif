import {Link, Route} from 'wouter'
import { Logo } from '../Logo'
import styles from './Header.module.css'

function Header(){
    return (
        <header className={`${styles.header} container-2`}>
            <Link to='/'> <Logo/> </Link>
        </header>
    )
}

export { Header }