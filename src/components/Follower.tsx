import React from 'react'
import Image from 'next/image'

interface followersProps {
    userId: number,
    userName: string,
    userTag: string
}

const Follower: React.FC<followersProps> = ({ userId, userName, userTag }) => {
  return (
    <div className='flex flex-row p-5 border-b-1 border-gray-200 items-center justify-between'>
        <div className='profile flex flex-row flex-1 gap-5 items-center'>
            <div className='image relative h-20 w-20 rounded-full'>
                <Image 
                    src={"/profile-picture.jpg"}
                    alt=""
                    fill
                    className='object-cover rounded-full'
                    />
            </div>
            <div className='flex flex-col'>
                <span className='font-semibold'>{userName}</span>
                <span className='text-sm text-gray-400'>@{userTag}</span>
            </div>
        </div>
        <button className='bg-green-500 px-7 py-2 rounded-3xl text-white'>Follow</button>
    </div>
  )
}

export default Follower


