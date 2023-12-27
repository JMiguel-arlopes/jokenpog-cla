import styles from './directionbtn.module.css';
import Button from '../Button'

export default function DirectionBtn(props) {
    const {text, status, urlImage} = props;
    console.log(urlImage)

    const style = {background: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9GOKuKv0vHzOY1hliDT_0f66aK9Yw18kAIuRSH4DDXXNjxPBC2jDBliMAcGI1j6nKRZQ&usqp=CAU)`}

    return (
        <>
            <div className={styles.containerDirection}>
                <div>
                    <img 
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9GOKuKv0vHzOY1hliDT_0f66aK9Yw18kAIuRSH4DDXXNjxPBC2jDBliMAcGI1j6nKRZQ&usqp=CAU'
                        alt={text} 
                    />
                </div>
                <div className={styles.informationCard}>
                    <h3>
                        {status == 'sucess' 
                            ? text 
                            : 'Em desenvolvimento..'
                        }
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, architecto sequi, omnis blanditiis iure vero minus, et dicta nulla ea debitis distinctio est aspernatur laborum! Vero iste ullam accusantium voluptatum?
                    </p>
                    <Button 
                        text='Entre aqui'
                    />
                </div>
            </div>
        </>
    )
}   