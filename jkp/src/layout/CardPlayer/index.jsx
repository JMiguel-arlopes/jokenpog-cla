import Statistics from '../Statistics';
import TableMlbb from '../TableMlbb';
import styles from './cardplayer.module.css';
import img from '../../assets/kagura_png.jpg'
import { useState } from 'react';

export default function CardPlayer(props) {

    const [isBack, setBack] = useState(false)

    function toggleBack() {
        setBack(!isBack);
    }

    const {dataPlayer} = props

    const dataBattle = {
        lane: dataPlayer.lane,
        main: dataPlayer.main,
        titles: dataPlayer.titles,
        winRate: dataPlayer.winRate,
    }

    const {name, elo, statistics, about} = dataPlayer
    
    return (
        <div className={styles.card} onClick={toggleBack}>
            <div className={styles.information}>
                <h2>{!isBack ? elo : name}</h2>
                <h3>{!isBack ? '0 Títulos Nacionais' : '0 Medalhas JKP'}</h3>
            </div>
            {!isBack ? (
                <div className={styles.front}>
                    
                    <div className={styles.mid_card}>
                        <h2 className={styles.nick}>
                            {name}
                        </h2>
                        {/* <img src={kagura} alt="kagura" /> */}
                    </div>
                    <TableMlbb dataBattle={dataBattle}/>
                    <p>*Clique para saber mais</p>
                </div>
            ) : (
                <div className={styles.back}>
                    <div className={styles.img_back}>
                        {/* <img src={img}/> */}
                        <h2>About</h2>
                    </div>
                    <div className={styles.information_back}>
                        {/* <h2>{name}</h2> */}
                        <p>{about}</p>
                    </div>
                    
                    <Statistics statistics={statistics}/>
                </div>
            )}
        </div>
    )
}