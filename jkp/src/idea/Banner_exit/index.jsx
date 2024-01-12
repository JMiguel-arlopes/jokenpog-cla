import styles from './banner.module.css'
import logo from '../../assets/jkp-logo-semFundo.png'
import Button from '../../components/Button'

export default function Banner() {
    return (
        <section className={styles.container_banner}>
            <div className={styles.informationBanner}>
                <h2>Jokenpog Team</h2>
                <p>
                    Nós somos uma comunidade de entretenimento e investimento com foco em jogos virtuais, 
                    investimento e economia.
                </p>
                <div className={styles.buttonsRow}>
                    <Button 
                        text='Discord'
                        link='/'
                    />
                    <Button 
                        text='YouTube'
                        link='/'
                    />
                </div>
            </div>
            <div className={styles.informationBanner}>
                <img src={logo}/>
            </div>

        </section>
    )
}