import styles from './cardsimplestatistic.module.css';

export default function CardSimpleStatistic(props) {
    
    const {title, value, suffix} = props
    
    return (
        <div className={styles.container_card_simple}>
            <div className={styles.content_title}>
                <h2>{title}</h2>
            </div>
            <div className={styles.content_percent}>
                <p>{value}{suffix}</p>
            </div>
        </div>
    )
}