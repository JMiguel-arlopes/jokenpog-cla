import { useEffect, useState } from 'react';
import styles from './lineranking.module.css';

export default function LineRanking(props) {
    const { name, value, index, suffix, isEven } = props;
    const podium = ['first', 'second', 'third'];

    const [classification, setClassification] = useState('');
    const [img, setImg] = useState(null);

    const position = () => {
        podium.forEach((item, idx) => {
            if (idx === index) {
                setClassification(item);
            }
        });
    };

    useEffect(() => {
        position();
        const importImg = async () => {
            try {
                const img = await import(`../../assets/ranking/${classification}.png`);
                setImg(img.default);
            } catch (error) {
                console.log(`imagem não encontrada com nome: ${classification}`, error);
            }
        };

        if (classification) {
            importImg();
        }
    }, [classification, index]);

    return (
        <div className={`${styles.row} ${isEven === 'true' ? styles.even : ''}`}>
            <span>
                {img ? <img src={img} alt={classification} className={styles.img_ranking} /> : index + 1}
            </span>
            <div>
                <h2 className={styles[classification]}>{name}</h2>
                <h3>
                    {value}
                    {suffix}
                </h3>
            </div>
        </div>
    );
}
