import React from 'react'
import Image from 'next/image'

interface MessagePropsInterface {
    side: 'me' | 'peer'
    senderImage?: string
    message: string
}

const Message: React.FC<MessagePropsInterface> = ({ side, message }) => {
    return (
    <div className={`flex gap-4 justify-end p-4 ${side === "me" ? "flex-row justify-end" : "flex-row-reverse " }`}>
        <div className={`${side === "me" ? "bg-green-500 text-white rounded-l-2xl rounded-br-2xl" : "bg-white text-black rounded-r-2xl rounded-bl-2xl"} font-sans p-4 max-w-7/10`}>{message}</div>    
        <div className='image relative h-14 w-14 rounded-full'>
            <Image 
                src={"/profile-picture.jpg"}
                alt=""
                fill
                className='object-cover rounded-full'
                />
        </div>
    </div>
    )
}

export default Message
