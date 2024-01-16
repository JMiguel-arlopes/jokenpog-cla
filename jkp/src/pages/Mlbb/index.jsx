import Banner_mlbb from '../../sections/Banner';
import Extensions from '../../sections/Extensions';
import Statistics from '../../sections/Statistics';
import db from '../../db.json';
import AboutUs from '../../sections/AboutUs';

export default function Mlbb() {
    const members = db.members;

    const sumValues = (key) => {
        const result = members.reduce((acc, item) => acc + item[key], 0)
        return result
    }

    const calculateAverage = (key) => {
        const total = sumValues(key)

        const media = (total / members.length).toFixed(2)
        return media
    }

    const calculateMostUsedItemInArray = (key) => {
        const arrayToCount = members.map(member => member[key])
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

    return (
        <>
            <Banner_mlbb />
            <AboutUs 
                db={db}
                amountMembers={db.members.length}
                amountMCL={sumValues('mcl')}
                amountMatches={sumValues('matches')}
            />
            <Statistics
                amountMatches={sumValues('matches')}
                amountTitles={sumValues('titles')}
                averageWR={calculateAverage('winRate')}
                averageMCL={calculateAverage('mcl')}
                rankingLane={calculateMostUsedItemInArray('lane')}
                rankingElo={calculateMostUsedItemInArray('elo')}
                rankingMedal={sortPlayersBy('medal')}
            />
            <Extensions />
        </>
    )
}