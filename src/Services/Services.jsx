import React from 'react'
import img1 from '../assets/images/freeshipping.jpg'
import img2 from '../assets/images/easyreturn.jpg'
import img3 from '../assets/images/securepayment.jpg'
import img4 from '../assets/images/support.jpg'

const Service = ({img, title, description}) => {
    return (
        <div className="w-1/4 p-4 m-4 bg-gray-200 transform hover:scale-110">
            <div className="flex items-center">
            <div >
                <img className="w-12 h-12 rounded-full mr-4" src = {img}></img>
            </div>
            <div>
                <h2 className="text-lg font-medium">{title}</h2>
                <p className="text-gray-600 text-sm">{description}</p>
            </div>
            </div>
        </div>
    )
}


const Services = () => {
  return (
    <div className="flex flex-row">
        <Service 
            img = {img1}
            title="Free Shipping"
            description="Lorem ipsum dolor sit amet"

        />
        <Service
            img = {img2}
            title="Easy Return"
            description="Lorem ipsum dolor sit amet"
        />
        <Service 
            img = {img3}
            title="Secure Payment"
            description="Lorem ipsum dolor sit amet"

        />
        <Service
            img = {img4}
            title="24/7 Support"
            description="Lorem ipsum dolor sit amet"
        />
    </div>
  )
}

export default Services

