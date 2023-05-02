import styles from './styles.module.scss'

export const ProductCard = ({ title, price, thumbnail }) => {
    return (
        <div className={styles.ProductCard}>
            <div className={styles.picture}>
                <img className={styles.image} src={thumbnail} alt={title} />
                <div className={styles.mask}></div>
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <div className={styles.priceBox}>
                    <p className={styles.price}>
                        {price}
                        <span className={styles.currency}> руб.</span>
                    </p>
                </div>
            </div>
        </div>
    )
}
