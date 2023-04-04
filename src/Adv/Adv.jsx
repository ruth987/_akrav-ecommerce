import React from 'react'
import { Carousel } from 'flowbite-react'
import home2 from '../assets/images/home2.jpg'

function Adv() {
  return (
    <div>
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
            <img
                src={home2}
                alt="..."
            />
            <img
                src={home2}
                alt="..."
            />
            <img
                src={home2}
                alt="..."
            />
            <img
                src={home2}
                alt="..."
            />
        </Carousel>
  </div>
    </div>
  )
}

export default Adv
