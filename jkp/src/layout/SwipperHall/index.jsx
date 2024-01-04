import styles from './swipper.module.css';
import { register } from 'swiper/element/bundle';
import db from '../../db.json';
import CardPlayer from '../CardPlayer';

export default function SwipperHall() {

    register();

    const shuffleMembers = db.members.sort(() => Math.random() - 0.5)

    return (
        <section className={styles.container_swipper}>
            <h2>Membros</h2>
                <div className={styles.content_slide}>
                    <div>
                        <swiper-container
                            slides-per-view='3' 
                            speed="500"
                            loop="true"
                            css-mode="true"
                            allow-slide-next="true"
                            navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                        >   
                            {shuffleMembers.map(data => {
                                return (
                                    <swiper-slide style={{display: 'flex', justifyContent: 'center'}}>
                                        <CardPlayer dataPlayer={data}/>
                                    </swiper-slide>
                                )
                            })}
                        </swiper-container>
                    </div>
                </div>
        </section>
    )
}