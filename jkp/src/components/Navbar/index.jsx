import styles from './navbar.module.css'
import logo from '../../assets/logo.jpg'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <img src={logo} />
            </div>

            <div className={styles.links}>
                <a href="/">primeiro</a>
                <a href="/">segundo</a>
                <a href="/">terceiro</a>
            </div>
            <h2>JKP</h2>
        </nav>
    )
}