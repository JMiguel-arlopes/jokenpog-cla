import styles from './ranks.module.css';
import Container from '../../components/Container'
import { useState } from 'react';

export default function Ranks(prop) {

    const [listMain, setListMain] = useState([])

    const {db} = prop;
    const members = db.members;

    const [mediaWR, setMediaWR] = useState(0)

    const calculateMediaWR = () => {
        
        const total = members.reduce((total, itemAtual) => total + itemAtual.winRate, 0)

        const media = (total / members.length).toFixed(2)
        return media
    }

    const calculateLanes = () => {
        const allLanesPlayers = members.map(player => player.lane)
        const lanes = {}

        allLanesPlayers.forEach(lanePlayer => {

            if(!lanes[lanePlayer]) {
                lanes[lanePlayer] = 0
            }

            lanes[lanePlayer] += 1
        })
        return lanes
    }

    calculateLanes()
    

    console.log(db)
    return (
        <section>
            <Container>
                <div>
                    <h2>Média WinRate do clã</h2>
                    <p>{calculateMediaWR()}</p>
                </div>
                <div>
                    <h2>rank de lanes mais usadas</h2>
                </div>
                <div>
                    <h2>Terceiro</h2>
                </div>
            </Container>
        </section>
    )
}