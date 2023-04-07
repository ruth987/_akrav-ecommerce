import React from 'react'
import CommonSection from "../components/UI/CommonSection"
import { Table } from 'flowbite-react'
import { useSelector, useDispatch } from 'react-redux'
import {cartActions} from '../redux/slices/cartSlices'
import { toast } from 'react-toastify'
import { Navigate, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Button } from 'flowbite-react'




const Cart = () => {
  const cartItems = useSelector(state => state.cart.cartItems)
  const totalAmount = useSelector(state => state.cart.totalAmount)

  return (
    <div>
    <CommonSection/>
    <Table striped={true}>
      <Table.Head>
        <Table.HeadCell>
          Image
        </Table.HeadCell>
        <Table.HeadCell>
          Title
        </Table.HeadCell>
        <Table.HeadCell>
          Price
        </Table.HeadCell>
        <Table.HeadCell>
          Quantity
        </Table.HeadCell>
        <Table.HeadCell>
          <span className="sr-only">
            Delete
          </span>
        </Table.HeadCell>
        </Table.Head>

        {
          cartItems.length === 0 ? (
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <h1>Cart is empty</h1>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          ) : (
            <Table.Body className="divide-y">
            {
              cartItems.map((item, index) => (
                <TableRows key={index} item={item}/>
                )  )
            }
            </Table.Body>
          )
        }

        </Table>
        <h6 className='p-10 text-center mr-28 text-xl'>Subtotal : ${totalAmount}</h6>
        <div className='flex m-20 item-center ml-64 '>
            <Button
            className='w-1/3'
            outline={true}
            gradientDuoTone="greenToBlue"
          >
          <Link to='/shop'>Continue Shopping</Link>
          </Button>
          <Button
          className='ml-10 w-1/3'
          outline={true}
          gradientDuoTone="greenToBlue"
        >
        <Link to='/checkout'>Checkout</Link>
        </Button>
      </div>
    </div>
    

  
  )
}

const TableRows = ({item}) => {
  const dispatch = useDispatch()
  const removeFromCart = () => {
    dispatch(cartActions.removeFromCart(item.id))
    toast.success('Product removed from cart')
  }

  const Navigate = useNavigate()
  const navigateToProductDetail = () => {
    Navigate('/product-detail')
  } 

  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
     <button onClick={navigateToProductDetail}>
     <img className='w-16 h-16 rounded shadow-md hover:cursor-pointer'  src={item.imgUrl}/>
     </button> 
    </Table.Cell>
    <Table.Cell>
    {item.productName}
    </Table.Cell>
    <Table.Cell>
     {item.quantity}
    </Table.Cell>
    <Table.Cell>
      {item.price}
    </Table.Cell>
    <Table.Cell>
      <button
        onClick={removeFromCart}
        className="font-medium text-blue-600 hover:underline hover:cursor-pointer dark:text-blue-500"
      >
        Delete
      </button>
    </Table.Cell>
  </Table.Row>
  )}
  
export default Cart
