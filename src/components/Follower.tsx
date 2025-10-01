import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { fetchUser, follow, unfollow } from '@/utils/api'
import { UserData } from '@/types/User';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

interface followersProps {
    id: string,
    isFollowing: boolean
}

const Follower: React.FC<followersProps> = ({ id, isFollowing }) => {

    const [user, setUser] = useState<UserData>();
    const [following, setFollowing] = useState(isFollowing);
    const myId = useSelector((state: RootState) => state.user.userInfo?.id) as string;

    useEffect(() => {
        const getUser = async ()=> {
            const user: UserData = await fetchUser(id);
            setUser(user);
        }
        getUser();
    }, [id])

    const followHandler = async () => {
        if(!myId) return;
        if(!following){
            try{
                await follow(myId, id);
                setFollowing(true)
            }catch(error){
                console.log("Error requesting to follow a user");
            }
        }else{
            try{
                await unfollow(myId, id);
                setFollowing(false);
            }catch(error){
                console.log("Failed to unfollow a user");
            }
        }
    }
    return user && (
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
                <span className='font-semibold'>{user.name}</span>
                <span className='text-sm text-gray-400'>@{user.name}</span>
            </div>
        </div>
        <button className={`px-7 py-2 rounded-3xl  ${following ? "bg-white text-black border-1 border-gray-300" : "bg-green-500 text-white"}`} onClick={followHandler}>{following ? "Following" : "Follow"}</button>
    </div>
    )
}

export default Follower


