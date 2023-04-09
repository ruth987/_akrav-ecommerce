import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar } from 'flowbite-react'
import { Dropdown } from 'flowbite-react'
import { Avatar } from 'flowbite-react'
import logo from '../../assets/images/logo.jpg'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  const navigate = useNavigate()
  const navigateToCart = () => {
    navigate('/cart')
  }

  return (
    <div className='shadow-lg'>
    <Navbar
    fluid={true}
    rounded={true}
  >
    <Navbar.Brand href="https://flowbite.com/">
      <img
        src={logo}
        className="mr-3 h-6 sm:h-9"
        alt="Flowbite Logo"
      />
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        akrav-ecommerce
      </span>
    </Navbar.Brand>
    <div className="flex md:order-2">
      <Dropdown
        arrowIcon={false}
        inline={true}
        label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true}/>}
      >
        <Dropdown.Header>
          <span className="block text-sm">
            Bonnie Green
          </span>
          <span className="block truncate text-sm font-medium">
            name@flowbite.com
          </span>
        </Dropdown.Header>
        <Dropdown.Item>
          Dashboard
        </Dropdown.Item>
        <Dropdown.Item>
          Settings
        </Dropdown.Item>
        <Dropdown.Item>
          <button onClick={navigateToCart}>Cart({totalQuantity})</button>

        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>
          Sign out
        </Dropdown.Item>
      </Dropdown>
      <Navbar.Toggle />
    </div>
    <Navbar.Collapse>
      <Navbar.Link
        href="/home"
        active={true}
      >
        Home
      </Navbar.Link>
      <Navbar.Link href="/shop">
        Shop
      </Navbar.Link>
      
      <Navbar.Link onClick={navigateToCart} >
      <button className='hover:cursor-pointer' onClick={navigateToCart}>Cart({totalQuantity})</button>
      </Navbar.Link>
      <Navbar.Link href="/services">
        Services
      </Navbar.Link>
      <Navbar.Link href="/checkout">
        Checkout
      </Navbar.Link>
    </Navbar.Collapse>
  </Navbar>
    </div>
  )
}

export default Header