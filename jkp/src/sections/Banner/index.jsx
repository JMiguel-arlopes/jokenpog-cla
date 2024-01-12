import styles from './bannermlbb.module.css';
import Container from '../../components/Container';
import bg from '../../assets/gif-bg.gif'
import { FaYoutube, FaDiscord } from "react-icons/fa";
import { IoMdDisc } from "react-icons/io";
import Writer from '../../components/Writer';

export default function Banner_mlbb() {
    return (
        <section className={styles.container_banner_mlbb}>
            <div className={styles.information_banner}>
                <Container modifier='start'>
                    <IoMdDisc className={styles.disc}/>
                    <h3>JokenpoG Team</h3>
                </Container>
                    
                <div className={styles.content_banner}>
                    <h3>primeiro</h3>
                    <Writer />
                    <p>
                        Nós somos uma comunidade de entretenimento e investimento com foco em jogos virtuais, 
                        investimento e economia.
                    </p>
                    <Container modifier='start'>
                        <a href='/' className={styles.btn}>Get in</a>
                        <a href='/' className={styles.btn}>Start</a>
                    </Container>
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