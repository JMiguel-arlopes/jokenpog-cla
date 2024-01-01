import styles from './statistics.module.css';
import ProgressBar from '../../components/ProgressBar';


export default function Statistics(props) {

    const {statistics} = props

    return (
        <div className={styles.container_statistics}>
            {statistics.map(data_lane => {
                return (
                    <ProgressBar 
                        lane={data_lane.nameLane}
                        width={data_lane.proficiency}
                    />
                )
            })}
        </div>
    )
}