import React from 'react'
import { Carousel } from 'flowbite-react'
const CommonSection = ({title}) => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
            <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white text-4xl">
                {title}
            </div>
            <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white text-xl">
                "I'm a shopaholic on a budget." - Unknown
            </div>
            <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white text-xl">
                "I always say shopping is cheaper than a psychiatrist." - Tammy Faye Bakker
            </div>
        </Carousel>
  </div>
  )
}

export default CommonSection
