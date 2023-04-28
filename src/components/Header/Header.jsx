import styles from './styles.module.scss'

import logo from '../../assets/images/logo.png'

export const Header = ({ closeHandler }) => {
    return (
        <header
            className={styles.Header}
            style={{
                background: `url(${logo}) #001065 no-repeat center / contain`,
            }}
        >
            <div className={styles.close} onClick={closeHandler} />
        </header>
    )
}
