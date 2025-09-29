"use client"

import SearchIcon from '@/components/SearchIcon';
import { RootState } from '@/store/store';
import { UserState } from '@/store/user/userSlice'
import React from 'react'
import { useSelector } from 'react-redux'
import CameraIcon from '@/icons/CameraIcon';
import Post from '@/components/Post';

function page() {

    const username = useSelector((state: RootState) => state.user.userInfo?.name);

    return (
    <div>
        <header className='flex flex-col justify-between border-b-1 border-gray-200 p-5 gap-3'>
            <div className='flex flex-row justify-between items-center'>
                <CameraIcon />
                <SearchIcon />
            </div>
            <span className='font-semibold text-xl'>Timeline</span>
        </header>
        <div className='posts'>
            <Post />
            <Post />
        </div>
    </div>
    )
}

export default page
