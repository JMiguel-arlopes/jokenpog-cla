import styles from './tablemlbb.module.css';

export default function TableMlbb(props) {

    const {dataBattle} = props

    return (
        <table>
            <tr>
                <th>Rota</th>
                <th>Main</th>
                <th>Titulos</th>
                <th>Win Rate</th>
            </tr>
            <tr>
                <td>{dataBattle.lane}</td>
                <td>{dataBattle.main}</td>
                <td>{dataBattle.titles}</td>
                <td>{dataBattle.winRate}</td>
            </tr>
        </table>
    )
}