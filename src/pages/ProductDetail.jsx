import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../assets/data/products'
import CommonSection from '../components/UI/CommonSection'
import { Button } from 'flowbite-react'
import { Rating } from 'flowbite-react'
import { cartActions } from '../redux/slices/cartSlices'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'


const ProductDetail = () => {
  const { id } = useParams()
  const product = products.find((item) => item.id === id)
  const dispatch = useDispatch()
  const addToCart = () => {
    dispatch(cartActions.addToCart({
      id: product.id,
      productName: product.productName,
      imageUrl: product.imageUrl,
      price: product.price,
      quantity: 1,
      totalPrice: product.price,
    }))

    toast.success('Product added to cart')
  }

  return (


    <div>
      <CommonSection title="Product Detail" />

      <div className='bg-gray-100'>
        <div className="flex flex-row flex-wrap">
          <div className="w-1/2 pr-8">
            <img src={product.imgUrl} alt="Example image" className="w-full h-96 object-cover py-2 px-2 my-8 rounded-md" />
          </div>
        <div className="w-1/2 px-4 py-8 text-center pt-20">
          <h3 className="text-2xl font-bold mb-4">{product.productName}</h3>
          <div className="flex justify-center">
          <Rating>
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star filled={false} />
          </Rating>
          </div>
          <span className = 'text-gray-400'>({product.avgRating})</span>
          <p className="text-lg mb-4">${product.price}</p>
          <p className=" mb-4">{product.description}</p>
          <div className=' mt-90 flex justify-center' onClick={addToCart}>
            <Button
              outline={true}
              gradientDuoTone="greenToBlue"
              className='transform hover:scale-110 w-1/2'
              
            >
            Add to cart
            </Button>
          </div>
          </div>

          </div>
      </div>
    <div/>
    </div>
  ) 

}

export default ProductDetail;
