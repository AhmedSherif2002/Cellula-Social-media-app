import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import ShareIcon from '@/icons/ShareIcon'
import ChatIcon from '@/icons/MessageIcon'
import HeartIcon from '@/icons/HeartIcon'
import { PostType } from '@/types/Post'
import { fetchUser } from '@/utils/api'
import { isFollowing } from '@/utils/helper'
import useUser from '@/hooks/useUser'

interface PostPropsInterface {
    post: PostType
}

function Post({ post } : PostPropsInterface) {

    const [username, setUsername] = useState();
    const [timeSincePostPublished, setTimeSincePostPublished] = useState<string>();
    const [isFollowingUser, setIsFollowing] = useState<boolean>();

    const { myId } = useUser()

    const getTimeSincePostPublished = () => {
        const currentDate = Date.now();
        const publishDate = new Date(post.created_at).getTime()
        const time = currentDate - publishDate;
        const timeInSeconds = Math.floor(time / 1000);
        if (timeInSeconds < 60) {
        return setTimeSincePostPublished(`${timeInSeconds} sec ago`);
        }

        const timeInMinutes = Math.floor(timeInSeconds / 60);
        if (timeInMinutes < 60) {
        return setTimeSincePostPublished(`${timeInMinutes} min ago`);
        }

        const timeInHours = Math.floor(timeInMinutes / 60);
        if (timeInHours < 24) {
        return setTimeSincePostPublished(`${timeInHours} hr${timeInHours > 1 ? "s" : ""} ago`);
        }

        const timeInDays = Math.floor(timeInHours / 24);
        if (timeInDays < 7) {
        return setTimeSincePostPublished(`${timeInDays} day${timeInDays > 1 ? "s" : ""} ago`);
        }

        const timeInWeeks = Math.floor(timeInDays / 7);
        if (timeInWeeks < 4) {
        return setTimeSincePostPublished(`${timeInWeeks} week${timeInWeeks > 1 ? "s" : ""} ago`);
        }

        const timeInMonths = Math.floor(timeInDays / 30);
        if (timeInMonths < 12) {
        return setTimeSincePostPublished(`${timeInMonths} month${timeInMonths > 1 ? "s" : ""} ago`);
        }

        const timeInYears = Math.floor(timeInDays / 365);
        return setTimeSincePostPublished(`${timeInYears} year${timeInYears > 1 ? "s" : ""} ago`);

    }

    useEffect(() => {
        const getUser = async () => {
            const user = await fetchUser(post.user_id.toString())
            const username = user.name;
            setUsername(username);
            const res = await isFollowing(myId, user.id);
            setIsFollowing(res);
        } 
        getTimeSincePostPublished()
        getUser()
    },[post])

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
                    <div className='font-semibold'>{username}</div>
                    <div className='text-sm text-gray-400'>{timeSincePostPublished}</div>
                </div>
            </div>
            <div className={`px-4 py-2 rounded-3xl ${isFollowingUser ? "bg-white text-black border-1 border-gray-200" : "bg-green-500 text-white"}`}>{isFollowingUser ? "Following" : "Follow"}</div>
        </div>
        {true && <div className='image relative w-full h-90 rounded-xl'>
            <Image 
                src={"/profile-picture.jpg"}
                alt=""
                fill
                className='object-contain p-1 rounded-xl'
                />
        </div>}
        <div className='text-gray-400 w-full pl-2 px-1'>{post.text}</div>
        <div className='flex flex-row justify-between items-center w-full'>
            <div className='flex flex-row items-center gap-2'>
                <ShareIcon />
                <span>{post.shares_count}</span>
            </div>
            <div className='flex flex-row justify-center gap-3'>
                <div className='flex flex-row items-center gap-2'>
                    <div className='w-7'>
                        <ChatIcon />
                    </div>
                    <span>{post.comments_count}</span>
                </div>
                <div className='flex flex-row items-center gap-2'>
                    <div className='w-7'>
                        <HeartIcon />
                    </div>
                    <span>{post.likes_count}</span>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Post
