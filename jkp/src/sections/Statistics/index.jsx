import styles from './ranks.module.css';
import InformationBase from '../../components/informationBase';
import img from '../../assets/emblem/exp.png'
import CardRanking from '../../layout/statistic/CardRanking';

export default function Ranks(props) {

    const {amountMatches, amountTitles, averageWR, averageMCL, rankingLane, rankingElo, rankingMedal} = props
    return (
        <section className={styles.rank_container} id='statistics'>
            <div className={styles.rank_content}>
                <div className={styles.container_cards}>
                    <h2>Sobre nós</h2>
                    <InformationBase 
                        data={amountMatches} 
                        message='Partidas totais'
                    />
                    <InformationBase 
                        data={averageWR}
                        suffix='%'
                        message='win rate (média geral)'
                    />
                    <InformationBase 
                        data={amountTitles}
                        message='Titulos Nacionais'
                    />
                    <InformationBase 
                        data= {averageMCL}
                        message="MCL's por membro"
                    />
                    <InformationBase 
                        data= {
                            rankingLane.length > 0 
                            ? rankingLane[0].name 
                            : '--'
                        }
                        message='rota mais visitada pelos Membros'
                    />
                    <InformationBase 
                        data= {
                            rankingElo.length > 0 
                            ? rankingElo[0].name 
                            : '--'
                        }
                        message='patente majoritária'
                    />
                </div>
            </div>
            <div className={styles.ranking}>
                <CardRanking data={rankingLane} suffix=' membros'/>
                <CardRanking data={rankingElo} suffix=' membros' isEven='true'/>
                <CardRanking data={rankingMedal} suffix=' medalha'/>
            </div>
        </section>
    )
}