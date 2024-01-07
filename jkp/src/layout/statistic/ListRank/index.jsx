import styles from './listrank.module.css';

export default function ListRank(props) {

    const {rank} = props;

    return (
        <ol className={styles.list}>
            {rank.map((item, index) => {
                return (
                    <li className={styles.item}>
                        <span>{index+1}°</span>
                        <h4>{item.name}</h4>
                        <h5>{item.value}</h5>
                    </li>
                )
            })}
        </ol>
        
    )
}