import styles from './swipper.module.css';
import { register } from 'swiper/element/bundle';
import kagura from '../../assets/kagura_png.jpg'
import db from '../../db.json'
import CardPlayer from '../CardPlayer';

export default function SwipperHall() {

    register();

    return (
        <section className={styles.container_swipper}>
            <h2>Membros</h2>
            <div className={styles.content_slide}>
                <swiper-container
                    slides-per-view='3' 
                    speed="500"
                    loop="true"
                    css-mode="true"
                    navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                >   
                    {db.members.map(data => {
                        return (
                            <swiper-slide style={{display: 'flex', justifyContent: 'center'}}>
                                <CardPlayer dataPlayer={data}/>
                            </swiper-slide>
                        )
                    })}





                    {/* <swiper-slide style={{display: 'flex', justifyContent: 'center'}}>
                        
                    </swiper-slide>
                    <swiper-slide style={{display: 'flex', justifyContent: 'center'}}>
                        <div className={styles.card}>
                            <div className={styles.information}>
                                <h2>Glória Mítica</h2>
                                <h3>0 medalhas JKP</h3>
                            </div>
                            <div className={styles.mid_card}>
                                <h2 className={styles.nick}>Nosferatu</h2>
                                <img src={kagura} alt="kagura" />
                            </div>
                            <TableMlbb/>
                            <p>*Clique para saber mais</p>
                        </div>
                    </swiper-slide>
                    <swiper-slide style={{display: 'flex', justifyContent: 'center'}}>
                        <div className={styles.card}>
                            <div className={styles.information}>
                                <h2>Glória Mítica</h2>
                                <h3>0 medalhas JKP</h3>
                            </div>
                            <div className={styles.mid_card}>
                                <h2 className={styles.nick}>Nosferatu</h2>
                                <img src={kagura} alt="kagura" />
                            </div>
                            <TableMlbb/>
                            <p>*Clique para saber mais</p>
                        </div>
                    </swiper-slide> */}
                </swiper-container>
            </div>
        </section>
    )
}