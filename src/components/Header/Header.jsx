import styles from './styles.module.scss'

export const Header = ({ closeHandler }) => {
    return (
        <header className={styles.Header}>
            <div className={styles.close} onClick={closeHandler} />
        </header>
    )
}
