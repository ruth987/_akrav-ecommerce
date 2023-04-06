import React from 'react'
import { Carousel } from 'flowbite-react'
import img1 from "../assets/images/ad1.jpg"
import img2 from "../assets/images/ad2.jpg"
import img3 from "../assets/images/ad3.jpg"
import img4 from "../assets/images/ad4.jpg"

import { Button } from 'flowbite-react'
function Adv() {
  return (
    <div>
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
            <img
                src={img1}
                alt="..."
            />
            <img
                src={img2}
                alt="..."
            />
            <img
                src={img3}
                alt="..."
            />
            <img
                src={img4}
                alt="..."
            />
        </Carousel>
  </div>
    </div>
  )
}

export default Adv
