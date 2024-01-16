import { useEffect, useState } from 'react';
import styles from './cardplayer.module.css';
import HeaderCardMlbb from '../users/HeaderCardMlbb';
import InformationPlayerBackside from '../users/InformationPlayerBackside';
import InformationPlayerFrontside from '../users/InformationPlayerFrontside';
// --dark-blue-bg: rgb(29, 18, 80);
//   --blue-bg: rgb(48, 26, 153);
//   --light-blue-bg: rgb(44, 44, 199);
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
        <div 
            className={`${styles.card} ${styles[lane]}`} 
            onClick={toggleBack}
        >
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