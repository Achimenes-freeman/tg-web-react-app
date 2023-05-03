import { useState } from 'react'
import { NavButton } from '../../generics/NavButton/NavButton'

import styles from './styles.module.scss'

export const ProductsNav = ({ productsCategories }) => {
    const [currentCategory] = useState(productsCategories[0])

    return (
        <nav className={styles.ProductsNav}>
            <ul className={styles.productsList}>
                {productsCategories.map((title, index) => (
                    <NavButton
                        key={index}
                        text={title}
                        currentCategory={currentCategory}
                    />
                ))}
            </ul>
        </nav>
    )
}
