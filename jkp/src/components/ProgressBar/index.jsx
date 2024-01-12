import { useEffect, useState } from 'react';
import styles from './progressbar.module.css';

export default function ProgressBar(props) {

    const {lane, width} = props;
    const [isLane, setLane] = useState('')

    const percentProgress = width * 10 + '%';
    const timingProgress = width * 0.55 + 's';

    const widthProgress = {
        width: percentProgress,
        animationDuration: timingProgress
    }

    const putLaneIn = ['gold', 'exp', 'mid']

    useEffect(() => {
        putLaneIn.forEach(item => {
            if(lane == item) {
                setLane(' Lane')
            }
        })
    })

    return (
        <div className={styles.container}>
            <h2 className={`${styles.text_lane} ${styles[lane]}`}>
                {lane} 
                {isLane && (
                    isLane
                )}
            </h2>
            <div className={styles.container_progress}>
                <div style={widthProgress} className={`${styles.progress_bar} ${styles[lane]}`}>
                    <div className={`${styles.brilho}`}></div>
                </div>
            </div>
        </div>

        
    )
}