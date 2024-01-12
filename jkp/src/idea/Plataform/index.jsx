import styles from './plataform.module.css';
import mlbbImg from '../../assets/logo.png';
import AnimationBottom from '../../components/AnimationBottom';
import CardMlbb from '../../components/CardMlbb';
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Plataform() {
    return (
        <section className={styles.container_plataform}>
            <div className={styles.content_plataform}>
                <div className={styles.flex}>
                    <img src={mlbbImg} alt="" />
                    <p className={styles.paragrath_plataform}>Entre e conheça o Clã JKP no game <span>Mobile Legends: Bang Bang</span></p>
                    <p className={styles.paragrath_plataform}>Clique no <span>card</span> ao lado para entrar <FaLongArrowAltRight /></p>
                </div>
                
                <div className={styles.flex}>
                    <CardMlbb/>
                </div>
                
            </div>
            <AnimationBottom/>
        </section>
    )
}