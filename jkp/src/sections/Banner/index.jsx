import styles from './bannermlbb.module.css';
import Container from '../../components/Container';
import bg from '../../assets/gif-bg.gif'
import Writer from '../../components/Writer';
import { FaYoutube, FaDiscord } from "react-icons/fa";
import logo from '../../assets/jkp-logo-semFundo.png';

export default function Banner_mlbb() {
    return (
        <section className={styles.container_banner_mlbb}>
            <div className={styles.information_banner}>
                <figure>
                    <img src={logo} alt='logotipo'/>
                    <figcaption>JokenpoG Team</figcaption>
                </figure>
                    
                <div className={styles.content_banner}>
                    <h3>primeiro</h3>
                    <Writer />
                    <p>
                        Nós somos uma comunidade de entretenimento e investimento com foco em jogos virtuais, 
                        investimento e economia.
                    </p>
                    <Container modifier='start'>
                        {/* <a href='/' className={styles.btn}>Get in</a> */}
                        <a href='/' className={styles.btn}>Start</a>
                    </Container>
                </div>
                <div className={styles.follow}>
                    <p>Follow us</p>
                    <FaDiscord/>
                    <FaYoutube/>
                </div>       
            </div>

            <div className={styles.banner_img}>
                <img src={bg} alt="imagem aleatória" />
            </div>
            
            
        </section>
    )
}