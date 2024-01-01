import styles from './cardextension.module.css';
import Container from '../../components/Container'
import png from '../../assets/ghost.png'

export default function CardExtension(props) {

    const {text, title, icon, vertical} = props


    return (
        <div className={styles.card_extension}>
            <div className={styles.information_extension}>
                <div className={styles.content_img}>
                    {icon}
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
            <div className={styles.vertical}>
                <p>{vertical}</p>
            </div>
        </div>
    )
}