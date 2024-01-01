import styles from './bannermlbb.module.css';
import Container from '../../components/Container';
import bg from '../../assets/gif-bg.gif'
import { FaYoutube, FaDiscord } from "react-icons/fa";
import { IoMdDisc } from "react-icons/io";

export default function Banner_mlbb() {
    return (
        <section className={styles.container_banner_mlbb}>
            <div className={styles.information_banner}>
                <Container modifier='center start'>
                    <IoMdDisc className={styles.disc}/>
                    <h3>Lorem Ipsum</h3>
                </Container>
                    

                <div className={styles.content_banner}>
                    <h3>primeiro</h3>
                    <h2>segundo</h2>
                    <div className={styles.padding}>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vel voluptas, repellendus excepturi numquam omnis vitae
                        aperiam, pariatur assumenda repudiandae similique est
                        odit praesentium architecto et id quis adipisci dolorem
                        recusandae!
                        </p>
                        <Container modifier='start'>
                            <a href='/' className={styles.btn}>Get in</a>
                            <a href='/' className={styles.btn}>Start</a>
                        </Container>
                    </div>
                </div>
                <div className={styles.follow}>
                    <p>Follow us</p>
                    <FaDiscord/>
                    <FaYoutube/>
                </div>       
            </div>

            <Container flex={1.75} modifier='center'>
                <img src={bg} alt="imagem aleatória" />
            </Container>
            
            
        </section>
    )
}