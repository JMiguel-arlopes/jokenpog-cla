import styles from './progressbar.module.css';

export default function ProgressBar(props) {

    const {lane, width} = props;

    const percentProgress = width * 10 + '%';
    const timingProgress = width * 0.55 + 's';

    const widthProgress = {
        width: percentProgress,
        animationDuration: timingProgress
    }

    return (
        <div className={styles.container}>
            <h2 className={`${styles.text_lane} ${styles[lane]}`}>
                {lane} lane
            </h2>
            <div className={styles.container_progress}>
                <div style={widthProgress} className={`${styles.progress_bar} ${styles[lane]}`}>
                    <div className={`${styles.brilho}`}></div>
                </div>
            </div>
        </div>

        
    )
}