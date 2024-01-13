import styles from './aboutus.module.css'
import SwipperHall from '../../layout/SwipperHall';
import { FaCoins, FaPeopleGroup } from "react-icons/fa6";
import { IoLogoGameControllerB } from "react-icons/io";

export default function AboutUs({db}) {
    return (
        <section className={styles.container_aboutus} id='aboutus'>
            <div className={styles.information_aboutus}>
                <h3>Quem somos?</h3>
                <p>
                    Criado em Junho de 2020, JokenpoG surgiu com intenção de criar uma comunidade de Yu-Gi-Oh,
                    atraindo pessoas da região de Três Lagoas - MS para jogar o jogo de cartas.
                    Ao Longo do tempo o grupo se expandiu para uma comunidade virtual com variáveis jogos mobile,
                    se destacando dentre vários jogos, Call Of Duty: mobile e Mobile legends: Bang Bang.
                </p>
                <p>
                    Em 2022 foi criado uma ramificação para investimento em ações e economia financeira para os
                    interessados.
                </p>
                <div className={styles.btnContainer}>
                    <FaCoins />
                    <IoLogoGameControllerB/>
                    <FaPeopleGroup/>
                </div> 
            </div>
            <div className={styles.img_aboutus} id='members'>
                <SwipperHall db={db} />
            </div>
        </section>
    )
}