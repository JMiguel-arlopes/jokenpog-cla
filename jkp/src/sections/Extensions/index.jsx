import styles from './extensions.module.css'
import CardExtension from '../../layout/CardExtension'
import Container from '../../components/Container';
import { GiBattleAxe } from "react-icons/gi";

export default function Extensions() {
    return (
        <section className={styles.container_extensions} id='functionalities'>
            <h2>Funcionalidades</h2>
            <Container modifier='center'>
                <CardExtension
                    text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe id repudiandae asperiores modi impedit'
                    title='calculator Win Rate'
                    icon={<GiBattleAxe/>}
                    vertical='JokenpoG Gamer'
                />

                <CardExtension
                    text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe id repudiandae asperiores modi impedit'
                    title='calculator Win Rate'
                    icon={<GiBattleAxe/>}
                    vertical='JokenpoG Gamer'
                />

                <CardExtension
                    text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe id repudiandae asperiores modi impedit'
                    title='calculator Win Rate'
                    icon={<GiBattleAxe/>}
                    vertical='JokenpoG Gamer'
                />
            </Container>
        </section>
    )
}