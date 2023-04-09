import React, {useState, useEffect} from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase.config'
import { useSelector } from 'react-redux'

const useAuth = () => {
    const currentUser = useSelector((state)=>state.auth.user)
    return {currentUser};
}

export default useAuth
