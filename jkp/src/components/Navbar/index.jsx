import styles from './navbar.module.css'
import logo from '../../assets/logo.jpg'
import { useState } from 'react'

export default function Navbar() {

    const [actived, setActived] = useState(false)

    function toggleActived() {
        setActived(!actived)
    }


    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <img src={logo} />
            </div>

            <h2 className={`${styles.jkp} ${styles.hide}`} onClick={toggleActived}>BUTTON</h2>

            {actived && (
                <div className={styles.links}>
                    <a href="/">Sobre nós</a>
                    <a href="/">Membros</a>
                    <a href="/">Estatisticas</a>
                    <a href="/">Funcionalidades</a>
                </div>
            )}
            
            <h2 
                className={`
                    ${styles.jkp}
                    ${styles.show}
                `}
            >
                JKP
            </h2>
        </nav>
    )
}