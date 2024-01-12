import styles from './container.module.css'

export default function Container(props) {

    const {children, modifier, flex, stretch, nowrap} = props

    const style = {
        flex: flex
    }

    return (
        <div 
            style={style} 
            className={`
                ${styles.container}
                ${styles[modifier]}
                ${styles[stretch]}
                ${styles[nowrap]}
            `}>
            {children}
        </div>
    )
}