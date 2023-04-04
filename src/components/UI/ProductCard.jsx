import React from 'react'
import { Card } from 'flowbite-react'
import { Button } from 'flowbite-react'

const ProductCard = () => {
  return (
    <div className="max-w-sm w-1/5 flex m-8 ">
        <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            name of the product
            </h5>
            <small className='text-gray-500'>product type</small>
            <p className="font-normal text-gray-700 dark:text-gray-400">
            product short description
            </p>
            <div>
                <Button
                color="dark"
                pill={true}
                >
                Add
                </Button>
          </div>
        </Card>
    </div>
  )
}

export default ProductCard
