import styles from './button.module.css'

export default function Button(props) {
    const {text, link, background, color} = props

    return (
        <a className={`${styles.btn} ${styles[background]} ${styles[color]}`} href={link}>{text}</a>
    )
}