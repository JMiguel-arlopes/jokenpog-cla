import styles from './swipper.module.css';
import CardPlayer from '../users/CardPlayer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, Grid, EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-creative';
import 'swiper/css/grid';

export default function SwipperHall(prop) {

    const {db} = prop;
    const shuffleMembers = db.members.sort(() => Math.random() - 0.5)

    return (
        <section className={styles.container_swipper}>
            <h2>Conheça-nos!</h2>
                <div className={styles.content_slide}>
                    <div>
                        <Swiper
                            slidesPerView={1}
                            speed="500"
                            loop="true"
                            css-mode="true"
                            spaceBetween={40}
                            allow-slide-next="true"
                            centered-slides="true"
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: true,
                                pauseOnMouseEnter: true,
                            }}
                            pagination={{
                                clickable: true,
                                dynamicBullets: true,
                            }}
                            // grid={{
                            //     fill: 'row',
                            //     rows: 2,
                            // }}
                            effect={'creative'}
                            creativeEffect={{
                                prev: {
                                    shadow: true,
                                    translate: [0, 0, -400],
                                    opacity: 0,
                                },
                                next: {
                                    translate: ['115%', 0, 0],
                                },
                            }}
                            modules={[Autoplay, Pagination, Navigation, Grid, EffectCreative]}
                        >   
                            {shuffleMembers.map(data => {
                                return (
                                    <SwiperSlide style={{display: 'flex', justifyContent: 'center', padding: '1rem 0'}}>
                                        <CardPlayer dataPlayer={data}/>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                </div>
        </section>
    )
}