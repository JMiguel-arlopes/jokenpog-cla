import styles from './animationbottom.module.css'

export default function AnimationBottom() {
    return (
        <div>
            <div className={`${styles.air} ${styles.air1}`}></div>
            <div className={`${styles.air} ${styles.air2}`}></div>
            <div className={`${styles.air} ${styles.air3}`}></div>
            <div className={`${styles.air} ${styles.air4}`}></div>
        </div>
    )
}