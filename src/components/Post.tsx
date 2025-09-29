import React from 'react'
import Image from 'next/image'
import ShareIcon from '@/icons/ShareIcon'
import ChatIcon from '@/icons/MessageIcon'
import HeartIcon from '@/icons/HeartIcon'

function Post() {
    return (
    <div className='flex flex-col items-center gap-3 font-sans p-4 border-b-1 border-gray-200'>
        <div className='flex flex-row w-full justify-between items-center'>
            <div className='flex flex-row gap-3 items-center'>
                <div className='image relative h-17 w-17 rounded-full'>
                    <Image 
                        src={"/profile-picture.jpg"}
                        alt=""
                        fill
                        className='object-cover rounded-full p-1'
                        />
                    <div className='bg-green-600 w-4 h-4 rounded-full relative top-12 left-11 border-1 border-white'></div>
                </div>
                <div className='flex flex-col'>
                    <div className='font-semibold'>username</div>
                    <div className='text-sm text-gray-400'>22 minutes ago</div>
                </div>
            </div>
            <div className='bg-green-500 px-4 py-2 rounded-3xl text-white'>Follow</div>
        </div>
        {true && <div className='image relative w-full h-90 rounded-xl'>
            <Image 
                src={"/profile-picture.jpg"}
                alt=""
                fill
                className='object-contain p-1 rounded-xl'
                />
        </div>}
        <div className='text-gray-400 px-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat cum recusandae, perferendis obcaecati deserunt totam facere autem dolor soluta ipsam repellendus incidunt? Cupiditate voluptate corporis, magnam consequatur repudiandae exercitationem modi.</div>
        <div className='flex flex-row justify-between items-center w-full'>
            <div className='flex flex-row items-center gap-2'>
                <ShareIcon />
                <span>10</span>
            </div>
            <div className='flex flex-row justify-center gap-3'>
                <div className='flex flex-row items-center gap-2'>
                    <div className='w-7'>
                        <ChatIcon />
                    </div>
                    <span>10</span>
                </div>
                <div className='flex flex-row items-center gap-2'>
                    <div className='w-7'>
                        <HeartIcon />
                    </div>
                    <span>10</span>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Post
