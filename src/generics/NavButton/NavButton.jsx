import classNames from 'classnames'
import styles from './styles.module.scss'

export const NavButton = ({ text, currentCategory }) => {
    return (
        <button
            className={classNames(
                styles.NavButton,
                currentCategory === text ? styles.active : null
            )}
        >
            {text}
        </button>
    )
}
