import React, { Children } from 'react'
import useAuth from '../custom-hooks/useAuth'
import { Navigate } from 'react-router-dom'

const ProtectedRoutes = ({Children}) => {
    const {currentUser} = useAuth()

  return currentUser ? ( Children ) : ( <Navigate to="/login" />
  )
}

export default ProtectedRoutes
