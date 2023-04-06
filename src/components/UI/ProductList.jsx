import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({data}) => {
  return (
    <div className="flex mb-64 m-10">
      {data.map((product, index) => (
        <ProductCard key = {index} product={product} />
      ))}
    </div>
  )
}
export default ProductList
