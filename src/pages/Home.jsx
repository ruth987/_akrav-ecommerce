import React,{useState, useEffect} from 'react'
import { Button } from 'flowbite-react'
import { Link } from 'react-router-dom'
import homeImg from '../assets/images/home.jpg'
import Services from '../Services/Services'
import ProductList from '../components/UI/ProductList'
import products from '../assets/data/products'
import Adv from '../Adv/Adv'
const Home = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const filteredProducts = products.filter((product) => product.status === "Trending")
    setData(filteredProducts)
  }, [])

  return (
    <>
      <div className='bg-gray-100'>
        <div className="flex flex-row flex-wrap">
        <div className="w-1/2 px-4 py-8 text-center pt-20">
          <h1 className="text-4xl font-bold mb-4">Welcome to AK-shop</h1>
          <p className="text-lg mb-4">"Whoever said money can't buy happiness simply didn't know where to go shopping."</p>
          <p className="text-md mb-4 text-right pr-16">- Bo Derek</p>
          <div className=' mt-90 flex justify-center'>
            <Button
              outline={true}
              gradientDuoTone="greenToBlue"
              className='transform hover:scale-110'
            >
            <Link to="/shop">Shop Now</Link> 
            </Button>
          </div>
          </div>
          <div className="w-1/2 pr-8">
            <img src={homeImg} alt="Example image" className="w-full h-auto object-cover" />
          </div>
      </div>
      </div>
      <div>
        <Services />
      </div>
      <h1 className='text-center text-4xl m-14'>Trending Products</h1>
      <ProductList data={data}/>
      <h1 className='text-center text-4xl m-14'>Best Sales</h1>
      
      <h1 className='text-center text-4xl m-14'>New Arrivals</h1>
      <h1 className='text-center text-4xl m-14'>Popular</h1>
      <Adv />
    </>
  )
}

export default Home