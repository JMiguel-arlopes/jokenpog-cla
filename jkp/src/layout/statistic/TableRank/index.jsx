import styles from './tablerank.module.css';

export default function ListRank(props) {

    const {rank, name} = props;


    return (
        <table className={styles.table}>
            <tr className={styles.header}>
                <th>Classificação</th>
                <th>Nome</th>
                <th>{name}</th>
            </tr>
            {rank.map((item, index) => {
                const firstItem = index === 0
                const lastItem = index === rank.length - 1
                console.log(item.name.toLowerCase())

                

                return (
                    <tr className={`
                        ${firstItem ? styles.first : ''}
                        ${lastItem ? styles.last : ''}
                    `}>
                        <td className={styles.classification}>
                            <span>{index+1}º </span>
                            lugar
                        </td>
                        <td className={styles.name}>{item.name}</td>
                        <td className={styles.point}>
                            {item.value}
                        </td>
                    </tr>
                )
            })}
        </table>
        
    )
}