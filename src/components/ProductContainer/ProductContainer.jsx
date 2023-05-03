import { ProductCard } from '../../components/ProductCard/ProductCard'

import styles from './styles.module.scss'

export const ProductContainer = ({ products }) => {
    return (
        <div className={styles.ProductContainer}>
            {products.map((item, index) => (
                <ProductCard key={index} {...item} />
            ))}
        </div>
    )
}
