import ListRank from '../ListRank';
import styles from './cardrankstatistic.module.css';

export default function CardRankStatistic(props) {

    const {title, rank} = props

    return (
        <div className={styles.container_rank}>
            <div className={styles.rank_header}>
                <h2>{title}</h2>
            </div>
            <div className={styles.rank}>
                <ListRank rank={rank}/>
            </div>
        </div>
    )
}