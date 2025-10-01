"use client"

import SearchIcon from '@/components/SearchIcon';
import { RootState } from '@/store/store';
import { UserState } from '@/store/user/userSlice'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CameraIcon from '@/icons/CameraIcon';
import Post from '@/components/Post';
import AddIcon from '@/icons/AddIcon';
import AddPost from '@/components/AddPost';
import { getPosts } from '@/utils/api';
import { PostType } from '@/types/Post';

function page() {

    const [showAddPost, setShowAddPost] = useState(false);
    const [posts, setPosts] = useState<PostType []>([]);    

    useEffect(() => {
        const fetchPosts = async () => {
            try{
                const posts = await getPosts();
                console.log(posts)
                setPosts(posts);
            }catch(error){
                console.log("Error fetching posts");
            }
        }

        fetchPosts();
    }, [])

    return (
        <>
        <div>
            <header className='flex flex-col justify-between border-b-1 border-gray-200 p-5 gap-3'>
                <div className='flex flex-row justify-between items-center'>
                    <CameraIcon />
                    <SearchIcon />
                </div>
                <span className='font-semibold text-xl'>Timeline</span>
            </header>
            <div className='posts'>
                {posts.map(post => (
                    <Post key={post.id} post={post}/>
                ))}
            </div>
            { showAddPost && <div className='bg-black opacity-50 fixed top-0 left-0 w-full h-full' onClick={() => setShowAddPost(false)}></div> }
        </div>
        <div className='fixed bottom-10 right-2 w-16 h-16 bg-green-500 rounded-full shadow-lg shadow-gray-500' onClick={() => setShowAddPost(value => !value)}>
            <AddIcon />
        </div>
        { showAddPost && <AddPost/> }
    </>
    )
}

export default page
