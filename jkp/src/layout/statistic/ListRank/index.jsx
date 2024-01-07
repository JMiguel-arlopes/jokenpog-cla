import styles from './listrank.module.css';

export default function ListRank(props) {

    const {rank} = props;

    return (
        // <ol className={styles.list}>
        <table className={styles.table}>
            <tr className={styles.header}>
                <th>Classificação</th>
                <th>Nome</th>
                <th>Medalhas</th>
            </tr>
            {rank.map((item, index) => {
                const firstItem = index === 0
                const lastItem = index === rank.length - 1


                return (
                    <tr className={`
                        ${firstItem ? styles.first : ''}
                        ${lastItem ? styles.last : ''}
                    `}>
                        <td className={styles.classification}>{index+1}º</td>
                        <td className={styles.name}>{item.name}</td>
                        <td className={styles.point}>{item.value}</td>
                    </tr>
                    



                    // <li 
                    //     className={`
                    //         ${styles.item}
                    //         ${firstItem ? styles.first : ''}
                    //         ${lastItem ? styles.last : ''}
                    //     `}
                    // >
                    //     <span>{index+1}°</span>
                    //     <h4>{item.name}</h4>
                    //     <h5>{item.value}</h5>
                    // </li>
                )
            })}
        </table>
        // </ol>
        
    )
}