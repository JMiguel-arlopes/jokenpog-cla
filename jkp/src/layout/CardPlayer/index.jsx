import styles from './cardplayer.module.css';
import TableMlbb from '../TableMlbb';
import { useState } from 'react';
import HeaderCardMlbb from '../../components/HeaderCardMlbb';
import InformationPlayerBackside from '../../components/InformationPlayerBackside';
import InformationPlayerFrontside from '../../components/InformationPlayerFrontside';

export default function CardPlayer(props) {
    const [isBack, setBack] = useState(false)
    const {dataPlayer} = props

    const {name, elo, statistics, about, lane, category, medal, titles} = dataPlayer
    
    const dataBattle = {
        lane: dataPlayer.lane,
        main: dataPlayer.main,
        matches: dataPlayer.matches,
        winRate: dataPlayer.winRate,
    }

    function toggleBack() {
        setBack(!isBack);
    }

    return (
        <div className={`${styles.card} ${styles[lane]}`} onClick={toggleBack}>
            <HeaderCardMlbb 
                elo={elo}
                category={category}
                titles={titles}
                medal={medal}
                isBack={isBack}
            />

            {!isBack ? (
                <InformationPlayerFrontside
                    name={name}
                    dataBattle={dataBattle}
                />
            ) : (
                <InformationPlayerBackside
                    name={name}
                    about={about}
                    statistics={statistics}
                />
            )}
        </div>
    )
}