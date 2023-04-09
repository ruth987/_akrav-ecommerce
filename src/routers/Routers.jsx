import {Routes, Route, Navigate} from 'react-router-dom'

import Home from '../pages/Home'
import Shop from '../pages/Shop'
import ProductDetail from '../pages/ProductDetail'
import Signup from '../pages/Signup'
import Cart from '../pages/Cart'
import Login from '../pages/Login'
import Checkout from '../pages/Checkout'
import Services from '../Services/Services.jsx' 
import ProtectedRoutes from './ProtectedRoutes'


const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/shop/:id" element={<ProductDetail />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/checkout" element={
        <ProtectedRoutes>
          <Checkout />
        </ProtectedRoutes>
      } />
      <Route path="/services" element={<Services />} />"

    </Routes>
  )
}

export default Routers
