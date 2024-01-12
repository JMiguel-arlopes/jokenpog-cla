import styles from './cardextension.module.css';

export default function CardExtension(props) {

    const {text, title, icon, vertical} = props

    return (
        <div className={styles.card_extension}>
            <div className={styles.information_extension}>
                <div className={styles.content_title}>
                    <figure className={styles.content_img}>
                        {icon}
                    </figure>
                    <figcaption>{title}</figcaption>
                </div>
                
                <p>{text}</p>
            </div>
            <div className={styles.vertical}>
                <p>{vertical}</p>
            </div>
        </div>
    )
}