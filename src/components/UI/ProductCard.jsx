import React from 'react'
import { Card } from 'flowbite-react'
import { Button } from 'flowbite-react'
import { Link } from 'react-router-dom'

const ProductCard = (item) => {
  return (
    
    <div className="max-w-sm w-1/5 flex m-8 ">
      {
        
        item?(
          <Card
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={item.product.imgUrl} className = " transform hover:scale-110">
          <div className=''>
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          <Link to={`/shop/${item.product.id}`}>{item.product.productName}</Link>
          </h5>
          <small className='text-gray-500'>{item.product.category}</small>
          <p>${item.product.price} </p>
          <div>
              <Button
              color="dark"
              pill={true}
              >
              Add
              </Button>
        </div>
        </div>  
      </Card>
        ):
        (
          <Card
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          <Link to="/shop/id">product name</Link>
          </h5>
          <small className='text-gray-500'>product type</small>
          <p>product price </p>
          <div>
              <Button
              color="dark"
              pill={true}
              >
              Add
              </Button>
        </div>
      </Card>
        )
      }
    </div>
  )
}

export default ProductCard
