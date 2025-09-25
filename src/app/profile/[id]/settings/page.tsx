"use client"

import React from 'react'
import Image from 'next/image'
import { useSelector, UseSelector } from 'react-redux'
import { UserState } from '@/store/user/userSlice';
import Link from 'next/link';
import { RootState } from '@/store/store';

const Settings: React.FC = () => {

    const user = useSelector((state: RootState) => state.user.userInfo) as UserState["userInfo"];

    console.log(user);

    return !user ?
        (
        <div className='h-screen flex justify-center items-center'>
            <Link className='text-white text-3xl bg-green-600 p-5 rounded-sm' href="/login">Login</Link>
        </div>
    ) :
    (
    <div className='flex flex-col gap-10 min-h-screen'>
        <div className='header flex flex-row justify-between items-center border-b-1 border-gray-200 p-5'>
            <div className='profile flex flex-row flex-1 gap-5 items-center'>
                <div className='image relative h-20 w-20 rounded-full border-2 border-green-500'>
                    <Image 
                        src={"/profile-picture.jpg"}
                        alt=""
                        fill
                        className='object-cover rounded-full p-1'
                        />
                </div>
                <div className='flex flex-col'>
                    <span className='font-semibold'>{user?.name || "Ahmed"}</span>
                    <span className='text-sm text-gray-400'>@{"ahmed"}</span>
                </div>
            </div>
            <div className='border-1 border-gray-400 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer hover:bg-gray-100'>&gt;</div>
        </div>
        <div className='flex flex-col items-center gap-10 flex-1 px-5'>
            <div className="flex flex-row gap-5 w-full justify-between sm:w-1/2 sm:justify-between items-center">
                <div className="flex flex-col items-center border-1 border-gray-300 p-4 rounded-md w-25">
                    <span className="text-2xl">6.3K</span>
                    <span className="text-gray-400">Followers</span>
                </div>
                <div className="flex flex-col items-center border-1 border-gray-300 p-4 rounded-md w-25">
                    <span className="text-2xl">600</span>
                    <span className="text-gray-400">Posts</span>
                </div>
                <div className="flex flex-col items-center border-1 border-gray-300 p-4 rounded-md w-25">
                    <span className="text-2xl">2.3K</span>
                    <span className="text-gray-400">Following</span>
                </div>
            </div>
            <div className='flex flex-row  w-full justify-between items-center'>
                <div className='flex flex-col gap-1'>
                    <div className='font-semibold'>Notification</div>
                    <div className='text-gray-400 text-sm'>See your recent activity</div>
                </div>
                <div className='flex flex-row gap-3'>
                    <div className='bg-green-500 flex justify-center items-center rounded-full w-9 h-9 text-white'>35</div>
                    <div className='border-1 border-gray-400 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer hover:bg-gray-100'>&gt;</div>

                </div>
            </div>
            <div className='flex flex-row  w-full justify-between items-center'>
                <div className='flex flex-col gap-1'>
                    <div className='font-semibold'>Friends</div>
                    <div className='text-gray-400 text-sm'>Freindlist totals</div>
                </div>
                <div className='flex flex-row gap-3'>
                    <div className='border-1 border-gray-400 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer hover:bg-gray-100'>&gt;</div>
                </div>
            </div>
            <div className='flex flex-row  w-full justify-between items-center'>
                <div className='flex flex-col gap-1'>
                    <div className='font-semibold'>Messages</div>
                    <div className='text-gray-400 text-sm'>Message your friends</div>
                </div>
                <div className='flex flex-row gap-3'>
                    <div className='bg-green-500 flex justify-center items-center rounded-full w-9 h-9 text-white'>2</div>
                    <div className='border-1 border-gray-400 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer hover:bg-gray-100'>&gt;</div>

                </div>
            </div>
            <div className='flex flex-row  w-full justify-between items-center'>
                <div className='flex flex-col gap-1'>
                    <div className='font-semibold'>Albums</div>
                    <div className='text-gray-400 text-sm'>Save or post your albums</div>
                </div>
                <div className='flex flex-row gap-3'>
                    <div className='border-1 border-gray-400 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer hover:bg-gray-100'>&gt;</div>

                </div>
            </div>
            <div className='flex flex-row  w-full justify-between items-center'>
                <div className='flex flex-col gap-1'>
                    <div className='font-semibold'>Favorites</div>
                    <div className='text-gray-400 text-sm'>Friends you love</div>
                </div>
                <div className='flex flex-row gap-3'>
                    <div className='border-1 border-gray-400 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer hover:bg-gray-100'>&gt;</div>
                </div>
            </div>
        </div>
        <div className="footer flex flex-col gap-6 px-5 py-9 border-t-1 border-gray-200">
            <div className='flex flex-row w-full justify-between items-center'>
                <div className='flex flex-col gap-1'>
                    <div className='font-semibold'>Privacy Policy</div>
                    <div className='text-gray-400 text-sm'>Protect your privacy</div>
                </div>
                <div className='flex flex-row gap-3'>
                    <div className='border-1 border-gray-400 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer hover:bg-gray-100'>&gt;</div>
                </div>
            </div>
            <button className='text-green-500 font-semibold font-sans bg-green-100 border-1 border-green-300 rounded-lg p-6'>Log Out</button>
        </div>
    </div>
    )
}

export default Settings
