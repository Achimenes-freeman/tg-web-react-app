import { Outlet } from 'react-router-dom'
// import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import styles from './styles.module.scss'

export const Layout = () => {
    return (
        <div className={styles.Layout}>
            <div className={styles.container}>
                <Outlet />
            </div>

            <Footer></Footer>
        </div>
    )
}
