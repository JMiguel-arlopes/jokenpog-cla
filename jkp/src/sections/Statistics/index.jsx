import styles from './ranks.module.css';
import Container from '../../components/Container'
import { useEffect, useState } from 'react';
import CardSimpleStatistic from '../../layout/statistic/CardSimpleStatistic';
import CardRankStatistic from '../../layout/statistic/CardRankStatistic';

export default function Ranks(prop) {

    const {db} = prop;
    const members = db.members;
    const allLanesPlayers = members.map(player => player.lane)

    const [averageWR, setAverageWR] = useState(0)
    const [totalMatches, setTotalMatches] = useState(0)
    const [totalTitle, setTotalTitles] = useState(0)
    const [rankLane, setRankLane] = useState([])
    const [rankMedal, setRankMedal] = useState([])

    const calculateAverageWinRate = () => {
        
        const total = members.reduce((total, itemAtual) => total + itemAtual.winRate, 0)

        const media = (total / members.length).toFixed(2)
        setAverageWR(media)
    }

    const sumValues = (key) => {
        const result = members.reduce((acc, item) => acc + item[key], 0)
        return result
    }

    const calculateMostUsedItemInArray = (arrayToCount) => {
        const contagem = {}
        
        // aqui nós vamos pegar as lanes de todos no banco de dados
        // usamos o forEach para percorrer por todas as lanes
        // pegamos o objeto "contagemLanes" e criamos uma key baseado no item(lane) da array do banco de dados
        // se o item já estiver "registrada" e dentro do "contagem", soma 1
        // caso ainda não tenha, como ocorre inicialmente, ele apenas cria essa key e põe valor como 0
        arrayToCount.forEach(itemArray => {
            contagem[itemArray] = (contagem[itemArray] || 0) + 1;
        })

        // Aqui foi usado algo bem diferente.
        // pegamos aquele objeto e transformamos em uma array por meio do "Object.keys"
        // obs: como o nome sugere, essa array contém somente as chaves do item
        // aí fizemos um map com essa nova array e esse map transformamos a array anterior em uma array de objetos
        // cada objeto tem um nameLane e a quantidade e com isso conseguimos agora imprimir na tela
        const ListKeys = Object.keys(contagem);
        const result = ListKeys.map(key => (
            {name: key, value: contagem[key]}
        ))

        // aqui nós somente ordenamos a lista para ela ficar na ordem da maior para menor
        return result.sort((a, b) => b.value - a.value)
    }

    const sortPlayersBy = (key) => {
        const selection = members.map(player => (
            {name: player.name, value: player[key]}
        ))
        
            
        const ranking = selection.filter(item => item.value > 0)
        const shuffle = ranking.sort(() => Math.random() - 0.5);
        return shuffle.sort((a, b) => b.value - a.value)
    }

    useEffect(() => {
        setRankLane(calculateMostUsedItemInArray(allLanesPlayers))
        setRankMedal(sortPlayersBy('medal'))
        setTotalMatches(sumValues('matches'))
        setTotalTitles(sumValues('titles'))
        
        calculateAverageWinRate()
    }, [members])
    
    return (
        <section className={styles.rank_container}>
            <div className={styles.rank_content}>
                <div className={styles.container_cards}>
                    <CardSimpleStatistic
                        title='Partidas totais'
                        value={totalMatches}
                        suffix=' Partidas'
                    />
                    <CardSimpleStatistic
                        title='Win Rate Geral'
                        value={averageWR}
                        suffix='%'
                    />
                    <CardSimpleStatistic
                        title='Titulos Nacionais'
                        value={totalTitle}
                        suffix=' Titulos'
                    />
                </div>
                <div className={styles.container_cards}>
                    <CardRankStatistic
                        rank={rankLane}
                        title={'Mains por Lane'}
                        name='Players'
                    />
                    <CardRankStatistic
                        rank={rankMedal}
                        title={'Campeões JKP'}
                        name='Medalhas'
                    />
                </div>
            </div>
        </section>
    )
}