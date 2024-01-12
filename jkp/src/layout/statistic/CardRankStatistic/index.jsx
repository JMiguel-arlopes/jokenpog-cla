import styles from './cardrankstatistic.module.css';
import ListRank from '../TableRank';


export default function CardRankStatistic(props) {

    const {title, rank, name} = props


    return (
        <div className={styles.container_rank}>
            <div className={styles.rank_header}>
                <h2>{title}</h2>
            </div>
            <div className={styles.rank}>
                <ListRank rank={rank} name={name}/>
            </div>
        </div>
    )
}