import React, {useState} from 'react'
import { FaGoogle } from 'react-icons/fa';
import logo from '../assets/images/logo.jpg'
import { createUserWithEmailAndPassword , updateProfile} from 'firebase/auth';
import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase.config';

import { auth } from '../firebase.config';
import { storage } from '../firebase.config';

import { toast } from "react-toastify"
import { Navigate } from 'react-router-dom';



const Signup = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false);
  const [navigate, setNavigate] = useState(false);


const signup =  async(e) =>{
  
  e.preventDefault();
  setLoading(true);
  try {
    
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    const user = userCredential.user;

    const storageRef = ref(storage, `images/${Date.now()+ username}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on((error)=>{
      toast.error(error.message);
    }, ()=>{
      getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL)=>{
        await updateProfile(auth.currentUser, {
          displayName: username,
          photoURL: downloadURL,
        })
        await setDoc(doc(db, 'users', user.uid), {
          username: username,
          email: email,
          photoURL: downloadURL,
          uid: user.uid,
          createdAt: new Date().toISOString(),
        })
    })
    })

    
    setLoading(false);
    toast.success("Account created successfully");
    navigate('/login')
    
  } catch (error) {
    setLoading(false);
    toast.error("Something went wrong");
  }
}
  


  return (
    //if loading is true then show the loading spinner
    loading ? <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
    </div> :

    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
    <div>
    <img className="mx-auto h-16 w-auto" src={logo} alt="Workflow" />
    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
    Create an Account
    </h2>
    </div>
    <form className="mt-8 space-y-6" action="#" method="POST">
    <input type="hidden" name="remember" value="true" />
    <div className="rounded-md shadow-sm -space-y-px">
        <div>
        <label htmlFor="username" className="sr-only">
        Username
        </label>
        <input id="username" name="username" type="username" autoComplete="username" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Username" value={username} onChange = {e =>setUsername(e.target.value)}/>
        </div>
        <div>
        <label htmlFor="email-address" className="sr-only">
        Email address
        </label>
        <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Email address" value={email} onChange = {e =>setEmail(e.target.value)}/>
        </div>
        <div>
        <label htmlFor="password" className="sr-only">
        Password
        </label>
        <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Password" value={password} onChange = {e=>setPassword(e.target.value)}/>
        </div>
        <div>
        <label htmlFor="file" className="sr-only">
        file
        </label>
        <input type="file" onChange = {(e)=>setFile(e.target.files[0])} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-blue-500 focus:z-10 sm:text-sm" />
        </div>
    </div>
    
          <div>
          <button
            type="submit"
            onClick={signup}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Create an Account
          </button>
        </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 [flex items](poe://www.poe.com/_api/key_phrase?phrase=flex%20items&prompt=Tell%20me%20more%20about%20flex%20items.)-center pl-3 pt-2">
                <FaGoogle size={20} />
              </span>
              Sign in with Google
            </button>
          </div>
        </form>
    
        <div className="text-sm text-center text-gray-500">
          <p>
            Already have an account?{' '}
            <a href="/login" className="font-medium text-blue-600 hover:text-blue-500">
              Sign in here
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default  Signup
