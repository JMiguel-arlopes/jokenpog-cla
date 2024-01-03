import { useEffect, useState } from 'react'
import TableMlbb from '../../layout/TableMlbb'
import styles from './informationplayerfrontside.module.css'


export default function InformationPlayerFrontside(props) {
    const {name, dataBattle} = props
    const [isImg, setImg] = useState(null)
    
    useEffect(() => {
        const importImg = async () => {
            try {
                const img = await import(`../../assets/png/${dataBattle.main.toLowerCase()}.png`);
                setImg(img.default);
            } catch(error) {
                console.log('erro ao achar a imagem: ', error)
            }
        }

        importImg()

    }, [dataBattle.main])
    
    return (
        <div className={styles.front}>
            <div className={styles.container_presentation}>
                <h2 className={styles[dataBattle.lane]}>
                    {name}
                </h2>
                <img src={isImg} alt={dataBattle.main} />
            </div>
            <TableMlbb dataBattle={dataBattle}/>
            <p>*Clique para saber mais</p>
        </div>
    )
}