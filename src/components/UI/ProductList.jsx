import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({data}) => {
  return (
    <div className=' flex flex-wrap justify-around'>
      {data.map((product, index) => (
        <ProductCard key = {index} product={product} />
      ))}
    </div>
  )
}
export default ProductList
