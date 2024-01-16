import styles from './cardranking.module.css';
import LineRanking from '../../../components/LineRanking';

export default function CardRanking(props) {
    const {data, suffix, isEven} = props;
    
    return (
        <div className={styles.container_rank}>
            <h2>Especialidade de lane</h2>
            {data.map((item, index) => {
                return (
                    <LineRanking
                        isEven={isEven}
                        name={item.name}
                        value={item.value}
                        index={index}
                        suffix={suffix}
                    />
                )
            })}
        </div>
    )
}