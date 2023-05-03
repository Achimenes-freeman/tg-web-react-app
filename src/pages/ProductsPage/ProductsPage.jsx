import { useState } from 'react'
import { ProductContainer } from '../../components/ProductContainer/ProductContainer'
import { ProductsNav } from '../../components/ProductsNav/ProductsNav'

export const ProductsPage = (props) => {
    const { data } = props

    const [products] = useState(Object.values(data.category)[0].products)

    return (
        <>
            <ProductsNav
                productsCategories={Object.values(data.category).map(
                    (category) => category.title
                )}
            />

            <ProductContainer products={products} />
        </>
    )
}
