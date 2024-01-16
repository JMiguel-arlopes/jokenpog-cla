import styles from './lineranking.module.css';

export default function LineRanking(props) {
    const {img, name, value, index, suffix, isEven} = props;


    return (
        <div className={`${styles.row} ${isEven == 'true' ? styles.even : ''}`}>
            <span>{index+1}</span>
            {img && (
                <div>
                    <img src={img} alt={name} />
                </div>
            )}
            <div>
                <h2>{name}</h2>
                <h3>{value}{suffix}</h3>
            </div>
        </div>
    )
}