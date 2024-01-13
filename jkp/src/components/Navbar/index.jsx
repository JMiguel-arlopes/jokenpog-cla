import styles from './navbar.module.css'
import logo from '../../assets/logo.jpg'
import { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { FaX } from "react-icons/fa6";
import { Link, animateScroll as scroll } from 'react-scroll';

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
                <div className={`${styles.links} ${styles.hide}`}>
                    <Link to="aboutus" smooth={true} duration={800} spy={true}>
                        Sobre nós
                    </Link>
                    <Link to="members" smooth={true} duration={800} spy={true}>
                        Membros
                    </Link>
                    <Link to="statistics" smooth={true} duration={800} spy={true}>
                        Estatísticas
                    </Link>
                    <Link to="functionalities" smooth={true} duration={800} spy={true}>
                        Funcionalidades
                    </Link>
                </div>
            </div>

            {actived && (
                <div className={`${styles.links} ${styles.hide}`}>
                    <Link to="aboutus" smooth={true} duration={500} spy={true}>
                        Sobre nós
                    </Link>
                    <Link to="members" smooth={true} duration={500} spy={true}>
                        Membros
                    </Link>
                    <Link to="statistics" smooth={true} duration={500} spy={true}>
                        Estatísticas
                    </Link>
                    <Link to="functionalities" smooth={true} duration={500} spy={true}>
                        Funcionalidades
                    </Link>
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