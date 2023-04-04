import React from 'react'
import ProductCard from './ProductCard'

const ProductList = () => {
  return (
    <div className='flex flex-wrap '>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
    </div>
  )
}

export default ProductList
