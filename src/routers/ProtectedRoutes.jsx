import React from 'react'
import useAuth from '../custom-hooks/useAuth'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoutes = ({ children } ) => {
  const user = useSelector(state => state.auth.user);
  console.log(user)
   return (
    <div>
      {user ? children : <Navigate to="/login" />}
    </div>
   )
}

export default ProtectedRoutes
