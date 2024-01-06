import styles from './ranks.module.css';
import Container from '../../components/Container'
import { useEffect, useState } from 'react';

export default function Ranks(prop) {

    const {db} = prop;
    const members = db.members;

    const [mediaWR, setMediaWR] = useState(0)
    const [isLanes, setlanes] = useState([])

    const calculateAverageWinRate = () => {
        
        const total = members.reduce((total, itemAtual) => total + itemAtual.winRate, 0)

        const media = (total / members.length).toFixed(2)
        setMediaWR(media)
    }

    const calculateMostUsedLanes = () => {
        const allLanesPlayers = members.map(player => player.lane)
        const contagemLanes = {}
        
        // aqui nós vamos pegar as lanes de todos no banco de dados
        // usamos o forEach para percorrer por todas as lanes
        // pegamos o objeto "contagemLanes" e criamos uma key baseado no item(lane) da array do banco de dados
        // se o item já estiver "registrada" e dentro do "contagem", soma 1
        // caso ainda não tenha, como ocorre inicialmente, ele apenas cria essa key e põe valor como 0
        allLanesPlayers.forEach(lanePlayer => {
            contagemLanes[lanePlayer] = (contagemLanes[lanePlayer] || 0) + 1;
        })

        // Aqui foi usado algo bem diferente.
        // pegamos aquele objeto e transformamos em uma array por meio do "Object.keys"
        // obs: como o nome sugere, essa array contém somente as chaves do item
        // aí fizemos um map com essa nova array e esse map transformamos a array anterior em uma array de objetos
        // cada objeto tem um nameLane e a quantidade e com isso conseguimos agora imprimir na tela
        const laneList = Object.keys(contagemLanes);
        const result = laneList.map(lane => (
            {nameLane: lane, quantidade: contagemLanes[lane]}
        ))

        // aqui nós somente ordenamos a lista para ela ficar na ordem da maior para menor
        const listaOrdenada = result.sort((a, b) => b.quantidade - a.quantidade)
        setlanes(listaOrdenada)
    }

    useEffect(() => {
        calculateAverageWinRate()
        calculateMostUsedLanes()
    }, [members])
    
    
    return (
        <section>
            <Container>
                <div>
                    <h2>Média WinRate do clã</h2>
                    <p>{mediaWR}</p>
                </div>
                <div>
                    <h2>rank de lanes mais usadas</h2>
                    <div>
                        <h4>{}</h4>
                        {isLanes.map((lane, index) => {
                            return (
                                <p>
                                    {index+1}º {lane.nameLane}: {lane.quantidade}
                                </p>
                            )
                        })}
                    </div>
                </div>
                <div>
                    <h2>Terceiro</h2>
                </div>
            </Container>
        </section>
    )
}