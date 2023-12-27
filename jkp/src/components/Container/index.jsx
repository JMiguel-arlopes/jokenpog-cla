import styles from './container.module.css'

export default function Container(props) {

    const {children, modifier} = props

    return (
        <div className={`${styles.container} ${styles[modifier]}`}>
            {children}
        </div>
    )
}