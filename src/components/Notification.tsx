"use client"

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

interface NotificationPropsInterface { 
    id: number, 
    name: string,
    type: string
    reset: number,
    deleteNotification: (id: number) => void 
}

const Notification: React.FC<NotificationPropsInterface> = ({ id, name, type, reset, deleteNotification }) => {

    const [slide, setSlide] = useState<boolean>(false);
    
    const clickHandler = (e: any) => {
        e.stopPropagation();
        setSlide(slide => !slide);
    }

    const markAsRead = () => {
        // TODO: Update API to mark as read.
        deleteNotification(id);
    }

    useEffect(() => setSlide(false), [reset]);

    return (
    <div className='relative h-[90px] overflow-hidden' onClick={clickHandler}>
        <div className={`flex flex-row gap-3 w-full h-full border-1 border-gray-300 p-3 rounded-lg items-center absolute ${slide ? "-translate-x-1/3" : ""} duration-400`}>
            <div className="profile-picture rounded-full w-16 h-16">
                <Image
                    src={"/profile-picture.jpg"}
                    alt="user-picture"
                    width={100}
                    height={100}
                    className="rounded-full"
                />
            </div>
            <div className='flex flex-col justify-center'>
                <div className='flex flex-row gap-3'>
                    <span className='font-semibold'>{name}</span>
                    <span className='text-gray-400 font-semibold'>Shared your post</span>
                </div>
                <div className='text-gray-400'>2 hours ago</div>
            </div>
        </div>
        <div className={`flex flex-col items-center justify-center h-full w-1/3 pl-3 absolute right-0 ${slide ? "translate-x-0" : "translate-x-full"} duration-400`}>
            <div className='bg-green-500 text-white font-sans rounded-lg cursor-pointer w-full h-full flex flex-col items-center justify-center' onClick={markAsRead}>
                <span className='text-xl font-bold'>&#10003;</span>
                <span>Read</span>
            </div>
        </div>
    </div>
    
    )
}

export default Notification
