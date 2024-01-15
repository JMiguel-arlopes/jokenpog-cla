import styles from './informationbase.module.css';

export default function InformationBase(props) {

    const {data, message, suffix} = props
    return (
        <div className={styles.information_container}>
            <h3>{data}{suffix}</h3>
            <h4>{message}</h4>
        </div>
    )
}