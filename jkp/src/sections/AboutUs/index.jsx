import styles from './aboutus.module.css'
import SwipperHall from '../../layout/SwipperHall';
import ContainerBall from '../../components/ContainerBall';
import Container from '../../components/Container';

export default function AboutUs(props) {

    const {db, amountMatches, amountMCL, amountMembers} = props


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
                    <Container modifier='center'>
                        <ContainerBall 
                            data={amountMatches}
                            phrase={'Partidas dos membros'}
                        />
                        <ContainerBall 
                            data={amountMembers}
                            phrase={'membros da jokenpog'}
                        />
                        <ContainerBall 
                            data={amountMCL}
                            phrase={"MCL's totais"}
                        />
                    </Container>
                </div> 
            </div>
            <div className={styles.img_aboutus} id='members'>
                <SwipperHall db={db} />
            </div>
        </section>
    )
}