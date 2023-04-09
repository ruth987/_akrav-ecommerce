import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { Dropdown } from 'flowbite-react'
import { Avatar } from 'flowbite-react'
import logo from '../../assets/images/logo.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logOut } from '../../redux/slices/authSlice'


const Header = () => {
  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  const isLoggedIn = useSelector(state => state.auth.isLogged)
  const user = useSelector(state=> state.auth.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const navigateToCart = () => {
    navigate('/cart')
  }
  const handleLogout = () => {
    
      dispatch(logOut("sue"))
      navigate('/login')
    
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

    {isLoggedIn ?
      <Dropdown
        arrowIcon={false}
        inline={true}
        label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true}/>}
      >
     
        <Dropdown.Header>
          <span className="block text-sm">
            {user.displayName}
          </span>
          <span className="block truncate text-sm font-medium">
            {user.email}
          </span>
        </Dropdown.Header>

        <Dropdown.Item>
          <button onClick={navigateToCart}>Cart({totalQuantity})</button>

        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>
          <button className='hover:cursor-pointer' onClick={handleLogout}>Logout</button>
        </Dropdown.Item>
      </Dropdown> : <Link to="/login">Login</Link>}
      <Navbar.Toggle />
    </div>
    <Navbar.Collapse>
    <Navbar.Link 
    active = {true}>

    <button onClick={()=> navigate('/home')}>Home</button>
  </Navbar.Link>
      <Navbar.Link >
        <button onClick={()=> navigate('/shop')}>Shop</button>
      </Navbar.Link>
      
      <Navbar.Link onClick={navigateToCart} >
      <button className='hover:cursor-pointer' onClick={navigateToCart}>Cart({totalQuantity})</button>
      </Navbar.Link>
      <Navbar.Link >
        <button onClick={()=> navigate('/services')}>services</button>
      </Navbar.Link>
      <Navbar.Link>
        <button onClick={()=> navigate('/checkout')}>checkout</button>
      </Navbar.Link>
    </Navbar.Collapse>
  </Navbar>
    </div>
  )
}

export default Header