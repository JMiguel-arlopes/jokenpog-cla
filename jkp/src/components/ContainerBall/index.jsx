import styles from './containerball.module.css'

export default function ContainerBall(props) {

    const {data, phrase} = props

    const rounding = () => {
        return data >= 1050 
            ? (data/1000).toFixed(1) + 'K'
            : data
    }

    return (
        <div className={styles.container_ball}>
            <span>+{rounding()}</span>
            <p>{phrase}</p>
        </div>
    )
}