import Button from '../Button';
import styles from './cardmlbb.module.css';
import img_mlbb from '../../assets/lunox.jpg'
import { useNavigate } from "react-router-dom";

export default function CardMlbb() {


    const navigate = useNavigate()
    
    const changeToMLBB = () => {
        navigate("mlbb");
    }

    return (
        <div className={styles.card_mlbb} onClick={changeToMLBB}>
            <div className={styles.container_img}>
                <img src={img_mlbb} alt='lunox'/>
            </div>
            <div className={styles.information_card}>
                <h3>Conheça nossa comunidade KIPLIN</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eos impedit libero amet eius facilis eaque fugiat consequuntur itaque fuga facere,
                    ratione ipsam vel quis corrupti dolorem distinctio dolorum. Expedita, aliquam?
                </p>
                <Button text='Ver mais' link='/'/>
            </div>
        </div>
    )
}