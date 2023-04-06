import React, {useState, useEffect} from 'react'
import CommonSection from '../components/UI/CommonSection'
import { Dropdown } from 'flowbite-react'
import products from '../assets/data/products'
import ProductList from '../components/UI/ProductList'

const Shop = () => {
  const[productData, setProductData] = useState([])
  useEffect(() => {
    setProductData(products)
  }, [])

  const filterHandler = (e) => {

    const filter = e.target.textContent
    if (filter == "Female"){
      const filteredProducts = products.filter(
        (item) => item.category == "female"
      )
        setProductData(filteredProducts)
    }
    else if(filter == "Male"){
      const filteredProducts = products.filter(
        (item) => item.category == "male"
      )
      setProductData(filteredProducts)
    }
    else if(filter == "Both"){
      const filteredProducts = products.filter(
        (item) => item.category == "both"
      )
      setProductData(filteredProducts)
    }
  }

  const searchHandler = (e) => {
    e.preventDefault()
    const search = e.target.value
    console.log(search)
    if (search !== ""){
      const filteredProducts = products.filter(
        (item) => item.productName.toLowerCase().includes(search.toLowerCase())
      )
      setProductData(filteredProducts)
    }
    else{
      setProductData(products)
    }
  }
  
  return (
    <div >
      <CommonSection title="Shop" />
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4 m-10">
        <Dropdown
          label="Filter by category"
          placement="bottom"
          
        >
              <Dropdown.Item>
               <button onClick={filterHandler}>Female</button>
              </Dropdown.Item>
              <Dropdown.Item>
              <button onClick={filterHandler}>Male</button>
              </Dropdown.Item>
              <Dropdown.Item>
              <button onClick={filterHandler}>Both</button>
              </Dropdown.Item>

        </Dropdown>
        <Dropdown
          label="Sort by"
          placement="bottom"
        >
              <Dropdown.Item >
                Ascending
              </Dropdown.Item>
              <Dropdown.Item>
                Descending
              </Dropdown.Item>

        </Dropdown>
        <div className="w-full md:w-1/3 mx-auto">
          <form className="flex">
            <input onChange={searchHandler} className="w-full rounded-l-lg p-2 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="Search"/>
            <button onClick={searchHandler} className="px-4 rounded-r-lg bg-blue-700 hover:bg-blue-800 text-white p-2 border-blue-800 border-t border-b border-r">
              Search
            </button>
          </form>     
        </div>
        </div>
        
        </div>
        {
          productData.length === 0 ? (
            <h1 className="text-center text-4xl">No products found</h1>) : (
              <ProductList data={productData}/>
            )
        }
        
      </div>
  )
}

export default Shop;