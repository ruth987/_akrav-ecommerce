import React, {useState} from 'react'
import { FaGoogle } from 'react-icons/fa';
import logo from '../assets/images/logo.jpg'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.config'; 




const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false);

  const signin =  async(e) =>{
    e.preventDefault();
    try {
      setLoading(true);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log(user);
      
    } catch (error) {
      
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
    <div>
    <img className="mx-auto h-16 w-auto" src={logo} alt="Workflow" />
    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
    Sign in to your account
    </h2>
    </div>
    <form className="mt-8 space-y-6" action="#" method="POST">
    <input type="hidden" name="remember" value="true" />
    <div className="rounded-md shadow-sm -space-y-px">
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
    </div>
    
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>
    
            <div className="text-sm">
              <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                Forgot your password?
              </a>
            </div>
          </div>
          <div>
          <button
            type="submit"
            onClick={signin}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign in
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
            Don't have an account?{' '}
            <a href="/signup" className="font-medium text-blue-600 hover:text-blue-500">
              Sign up here
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
