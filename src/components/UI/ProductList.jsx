import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({data}) => {
  return (
    <div className="flex mb-64">
      {data.map((product) => (
        <ProductCard key = {product.id} product={product} />
      ))}
    </div>
  )
}
export default ProductList
