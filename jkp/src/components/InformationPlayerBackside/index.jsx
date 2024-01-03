import styles from './informationplayerbackside.module.css';
import Statistics from '../../layout/Statistics';

export default function InformationPlayerBackside(props) {

    const {name, about, statistics} = props

    return (
        <div className={styles.back}>
            <div className={styles.container_name}>
                <h2>{name}</h2>
            </div>
            <div className={styles.about_back}>
                <p>{about}</p>
            </div>
            
            <Statistics statistics={statistics}/>
        </div>
    )
}