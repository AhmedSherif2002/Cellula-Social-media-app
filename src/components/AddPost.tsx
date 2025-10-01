"use client"

import { RootState } from '@/store/store';
import { uploadPost } from '@/utils/api';
import React, { FormEvent, useRef, useState } from 'react'
import { useSelector } from 'react-redux';

function AddPost() {

    const contentRef = useRef<HTMLTextAreaElement | null>(null);
    const userId = useSelector((state: RootState) => state.user.userInfo?.id) as string;
    const [uploaded, setUplaoded] = useState(false);
    
    const upload = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const content = contentRef.current?.value as string;
        try{
            await uploadPost(userId, content);
            setUplaoded(true);
            console.log(`User: ${userId} has published a post successfully`);
        }catch(error) {
            alert("Error publishing post.");
        }
    }

    if(uploaded){
        return (
            <div className='z-10 bg-white fixed rounded w-9/10 p-5 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex justify-center items-center'>
                <h2 className='font-sans text-2xl w-full text-center'>Your post is published.</h2>
            </div>
        )
    }

    return (
    <div className='z-10 font-sans text-xl fixed w-4/5 h-fit bg-white border-1 border-gray-200 rounded top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col jsutify-center items-center gap-5 p-4'>
        <div className='font-bold'>Add post</div>
        <form className='flex flex-col gap-5 w-full h-80' onSubmit={upload}>
            <textarea className='w-full h-4/5 outline rounded' name="content" id="content" ref={contentRef}></textarea>
            <input className='bg-green-500 rounded-xl text-white text-2xl p-3' type="submit" />
        </form>
    </div>
    )
}

export default AddPost
