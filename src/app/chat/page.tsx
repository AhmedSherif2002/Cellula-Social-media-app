import React from 'react'
import BackwardButton from '@/components/BackwardButton'
import Message from '@/components/Message'

const Chat: React.FC = () => {
    return (
    <div className='flex flex-col min-h-screen'>
        <header className='header bg-white sticky top-0 z-10 flex flex-row justify-between items-center border-b-1 border-gray-200 p-5'>
            <div className='flex flex-row gap-3 items-center'>
                <BackwardButton />
                <div className='flex flex-col'>
                    <div className='flex flex-row items-center gap-2'>
                        <div className='w-3 h-3 bg-green-600 rounded-full'></div>
                        <div className='font-sans font-semibold'>@Putin</div>
                    </div>
                    <div className='text-sm text-gray-400 font-sans'>Last active: 10 sec ago</div>
                </div>
            </div>
            <div className='w-14 p-3 bg-green-100 rounded-full shadow-md shadow-green-200'>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Icons" viewBox="0 0 32 32">
                    <path
                        d="M18.9,18.2c-0.5,0.5-0.9,1.1-1.3,1.8c-2-1.7-3.9-3.5-5.6-5.6c0.7-0.3,1.3-0.8,1.8-1.3c2.3-2.3,1.5-5.3-0.8-7.6  S7.7,2.3,5.4,4.6s-2.7,6.6-0.8,9.3C7.9,19,13,24.1,18.1,27.5c2.7,1.8,7,1.5,9.3-0.8s1.5-5.3-0.8-7.6S21.3,15.8,18.9,18.2z"
                        fill="none"
                        stroke="#08a900ac"
                        strokeWidth={2}
                        strokeLinejoin="round"
                        strokeMiterlimit={10}
                    />
                </svg>
            </div>
        </header>
        <div className='main bg-gray-100 flex-1 overflow-auto'>
            <Message side={"me"} message={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, ipsam sed laudantium quasi similique animi odio."}/>
            <Message side={"peer"} message={"Hi"}/>
            <Message side={"peer"} message={"How u doing"}/>
            <Message side={"me"} message={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, ipsam sed laudantium quasi similique animi odio."}/>
            <Message side={"me"} message={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, ipsam sed laudantium quasi similique animi odio."}/>
            <Message side={"me"} message={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, ipsam sed laudantium quasi similique animi odio."}/>
            <Message side={"me"} message={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, ipsam sed laudantium quasi similique animi odio."}/>
        </div>
        <div className='footer sticky bottom-0 flex flex-row items-center justify-center gap-2 z-10 bg-white w-full p-5 border-t-2 border-gray-200'>
            <textarea className='text-xl p-4 border-1 w-4/5 border-gray-300 h-16 overflow-auto no-scrollbar font-sans rounded-lg' placeholder='Say something' />
            <button className='bg-green-500 rounded-full p-4'>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-8 h-8' viewBox="0 0 24 24" fill="none">
                    <path d="M10.3009 13.6949L20.102 3.89742M10.5795 14.1355L12.8019 18.5804C13.339 19.6545 13.6075 20.1916 13.9458 20.3356C14.2394 20.4606 14.575 20.4379 14.8492 20.2747C15.1651 20.0866 15.3591 19.5183 15.7472 18.3818L19.9463 6.08434C20.2845 5.09409 20.4535 4.59896 20.3378 4.27142C20.2371 3.98648 20.013 3.76234 19.7281 3.66167C19.4005 3.54595 18.9054 3.71502 17.9151 4.05315L5.61763 8.2523C4.48114 8.64037 3.91289 8.83441 3.72478 9.15032C3.56153 9.42447 3.53891 9.76007 3.66389 10.0536C3.80791 10.3919 4.34498 10.6605 5.41912 11.1975L9.86397 13.42C10.041 13.5085 10.1295 13.5527 10.2061 13.6118C10.2742 13.6643 10.3352 13.7253 10.3876 13.7933C10.4468 13.87 10.491 13.9585 10.5795 14.1355Z" stroke="#ffffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
        </div>
    </div>
    )
}

export default Chat
