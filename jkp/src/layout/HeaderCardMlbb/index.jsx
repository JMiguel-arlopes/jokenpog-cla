import styles from './headercardmlbb.module.css';

export default function HeaderCardMlbb(props) {

    const {isBack, elo, category, medal, titles} = props;

    return (
        <div className={styles.container_bg}>
            <div className={styles.information}>
                <h2>{!isBack ? category : elo}</h2>
                <h3>
                    <span>
                        {!isBack ? titles : medal}
                    </span> 
                    {!isBack ? ' Titulos Nacionais' : ' Medalha JKP'}
                </h3>
            </div>
        </div>
        
    )
}