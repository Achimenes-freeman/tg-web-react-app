import styles from './styles.module.scss'

export const ProductCard = ({ title, price, description, thumbnail }) => {
    return (
        <div className={styles.ProductCard}>
            <div className={styles.picture}>
                <img className={styles.image} src={thumbnail} alt={title} />
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                <p className={styles.price}>price: {price}</p>
            </div>
        </div>
    )
}
