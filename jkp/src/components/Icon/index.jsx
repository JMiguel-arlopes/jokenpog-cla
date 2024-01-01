import styles from './icon.module.css';

export default function Icon(props) {

    const {icon, color} = props;

    const style = {
        color: color
    }

    return (
        <div style={style} className={styles.iconContainer}>
            {icon}
        </div>
    )
} 