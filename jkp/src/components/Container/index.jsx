import styles from './container.module.css'

export default function Container(props) {

    const {children, modifier, flex} = props

    const style = {
        flex: flex
    }

    return (
        <div style={style} className={`${styles.container} ${styles[modifier]}`}>
            {children}
        </div>
    )
}