"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import BackwardButton from '@/components/BackwardButton'

const Login: React.FC = () => {

    const [showEmail, setShowEmail] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const emailFocusHandler = () => setShowEmail(true);
    const emailUnfocusHandler = () => setShowEmail(false); 
    const passwordFocusHandler = () => setShowPassword(true);
    const passwordUnfocusHandler = () => setShowPassword(false);

    return (
    <div className='flex flex-col gap-13 m-4'>
        <BackwardButton/>
        <div className='flex flex-col justify-center items-center gap-1'>
            <div className='text-5xl font-bold font-sans'>Hello Again!</div>
            <div className='text-gray-500 font-sans'>Sign in to your account</div>
        </div>
        <div className='flex flex-col gap-4'>
            <div className='flex flex-col justify-center h-18 border-1 border-green-500 rounded p-2 gap-1' tabIndex={0} onFocus={emailFocusHandler} onBlur={emailUnfocusHandler}>
                <label htmlFor="email" className={`text-green-500 font-sans ${showEmail ? "flex" : "hidden"}`}>Email address</label>
                <input type="email" name='email' id='email' placeholder='Enter your email' className='outline-none' />
            </div>
            <div className='flex flex-col justify-center h-18 border-1 border-green-500 rounded p-2 gap-1' tabIndex={0} onFocus={passwordFocusHandler} onBlur={passwordUnfocusHandler}>
                <label htmlFor="password" className={`text-green-500 font-sans ${showPassword ? "flex" : "hidden"}`}>Password</label>
                <input type="password" name='password' id='password' placeholder='Enter your password' className='outline-none' />
            </div>
            <Link className='text-green-500 underline hover:text-green-600 text-sm' href="">Forgot your password?</Link>
        </div>
        <button className='bg-green-500 text-white p-5 rounded-md text-xl cursor-pointer hover:bg-green-600'>Sign in</button>
        <div className='relative border-t-1 border-dashed border-gray-500 flex flex-col items-center gap-3'>
            <span className='-translate-y-1/2 bg-white px-2 text-gray-400 font-semibold'>Or with</span>
            <div className='flex flex-row justify-center items-center gap-2 border-1 border-gray-300 w-full p-5 rounded-md cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
                    <path d="M 15.003906 3 C 8.3749062 3 3 8.373 3 15 C 3 21.627 8.3749062 27 15.003906 27 C 25.013906 27 27.269078 17.707 26.330078 13 L 25 13 L 22.732422 13 L 15 13 L 15 17 L 22.738281 17 C 21.848702 20.448251 18.725955 23 15 23 C 10.582 23 7 19.418 7 15 C 7 10.582 10.582 7 15 7 C 17.009 7 18.839141 7.74575 20.244141 8.96875 L 23.085938 6.1289062 C 20.951937 4.1849063 18.116906 3 15.003906 3 z"></path>
                </svg>
                <span>Sign in with google</span>
            </div>
            <div className='flex flex-row justify-center items-center gap-2 border-1 border-gray-300 w-full p-5 rounded-md cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                    <path d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"></path>
                </svg>
                <span>Sign in with twitter</span>
            </div>
        </div>
        <span className='text-sm text-gray-400 text-center'>Don&#39;t have account? Let&#39;s <Link href="signup" className='text-green-500 underline hover:text-green-600'>Sign up</Link></span>
    </div>
    )
}

export default Login
