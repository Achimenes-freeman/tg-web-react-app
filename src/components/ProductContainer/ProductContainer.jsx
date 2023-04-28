import { ProductCard } from '../../components/ProductCard/ProductCard'
import { data } from '../../data'

import styles from './styles.module.scss'

export const ProductContainer = () => {
    return (
        <div className={styles.ProductContainer}>
            {data.products.burgers.map((item, index) => (
                <ProductCard key={index} {...item} />
            ))}
            {data.products.sandwiches.map((item, index) => (
                <ProductCard key={index} {...item} />
            ))}
        </div>
    )
}
