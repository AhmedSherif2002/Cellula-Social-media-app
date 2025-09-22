"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import SearchIcon from '@/components/SearchIcon'
import Notification from '@/components/Notification'

const Notifications: React.FC = () => {

    type NotificationType = { id: number; name: string; time: Date; type: string };
    const [notifications, setNotifications] = useState<NotificationType[]>([
        { id: 1, name: "Marshmello", time: new Date(), type: "type" },
        { id: 2, name: "Marshmello", time: new Date(), type: "type" },
    ]);

    const [reset, setReset] = useState<number>(0);

    const deleteNotification = (id: number) => {
        setNotifications(notifications => notifications.filter(notification => notification.id !== id))
    }

    const markAllAsRead = () => {
        // TODO: Mark all as read on the API
        setNotifications([])
    }

    return (
        <div onClick={e => setReset(reset => (++reset) % 10)}>
            <header className='flex flex-col justify-between border-b-1 border-gray-200 p-5 gap-3'>
                <div className='flex flex-row justify-between items-center'>
                    <div className='image relative h-20 w-20 rounded-full border-2 border-green-500'>
                        <Image 
                            src={"/profile-picture.jpg"}
                            alt=""
                            fill
                            className='object-cover rounded-full p-1'
                            />
                    </div>
                    <SearchIcon/>
                </div>
                <div className='flex flex-row items-center gap-2'>
                        <span className='font-semibold text-xl'>Notifications</span>
                        <span className='bg-green-500 flex justify-center items-center rounded-full w-8 h-8 text-white'>2</span>
                    </div>
            </header>
            <div className='main-content flex flex-col p-5 gap-4 min-h-screen'>
                <div className='flex flex-row justify-between text-gray-400'>
                    <div>Show all</div>
                    <div className='font-semibold cursor-pointer' onClick={markAllAsRead}>Mark all as read</div>
                </div>
                <div className='Notifications flex flex-col gap-6'>
                    {
                        notifications.map(notification => (
                            <Notification key={notification.id} id={notification.id} name={notification.name} type={notification.type} deleteNotification={deleteNotification} reset={reset} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Notifications
