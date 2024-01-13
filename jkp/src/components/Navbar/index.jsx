import styles from './navbar.module.css'
import logo from '../../assets/logo.jpg'
import { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { FaX } from "react-icons/fa6";

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

            {!actived ?
                <IoMenu 
                    className={styles.hide}
                    size={56}
                    onClick={toggleActived}
                />
                : <FaX 
                    className={styles.hide}
                    size={48}
                    onClick={toggleActived}
                />
            }

            <div className={`${styles.links} ${styles.show}`}>
                <a href="/">Sobre nós</a>
                <a href="/">Membros</a>
                <a href="/">Estatisticas</a>
                <a href="/">Funcionalidades</a>
            </div>

            {actived && (
                <div className={`${styles.links} ${styles.hide}`}>
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