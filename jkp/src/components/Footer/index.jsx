import Icon from '../Icon';
import styles from'./footer.module.css';
import { FaDiscord, FaYoutube } from "react-icons/fa6";

export default function Footer() {
    return (
        <section className={styles.footer}>
            <div className={styles.icons}>
                <Icon icon={<FaDiscord/>} color='rgb(81, 81, 188)'/>
                <Icon icon={<FaYoutube/>} color='red'/>
            </div>
            <div className={styles.links}>
                <a href="">link1</a>
                <a href="">link2</a>
                <a href="">link3</a>
                <a href="">link4</a>
                <a href="">link5</a>
            </div>
            <p>Feito pro <span>João Miguel A. Lopes</span> | rights partially reserved</p>
            <h2>Grupo JokenpoG</h2>
        </section>
    )
}