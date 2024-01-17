import styles from './cardranking.module.css';
import LineRanking from '../../../components/LineRanking';
import img from '../../../assets/ranking/rank.png'
export default function CardRanking(props) {
    const {data, title, suffix, isEven} = props;

    return (
        <div className={styles.container_rank}>
            <div className={styles.header}>
                <img src={img} alt="bandeira"/>
                <h2>{title}</h2>
            </div>
            {data.map((item, index) => {
                return (
                    <LineRanking
                        isEven={isEven}
                        name={item.name}
                        value={item.value}
                        index={index}
                        suffix={suffix}
                        data-content={item.name}
                    />
                )
            })}
        </div>
    )
}