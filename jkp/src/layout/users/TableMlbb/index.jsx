import styles from './tablemlbb.module.css';

export default function TableMlbb(props) {

    const {dataBattle} = props

    return (
        <table className={styles.table}>
            <tr>
                <th>Rota</th>
                <th>Main</th>
                <th>Partidas</th>
                <th>Win Rate</th>
            </tr>
            <tr>
                <td className={styles[dataBattle.lane]}>{dataBattle.lane}</td>
                <td className={styles[dataBattle.lane]}>{dataBattle.main}</td>
                <td className={styles[dataBattle.lane]}>{dataBattle.matches}</td>
                <td className={styles[dataBattle.lane]}>{dataBattle.winRate}%</td>
            </tr>
        </table>
    )
}