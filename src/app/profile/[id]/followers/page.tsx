"use client"

import Follower from '@/components/Follower'
import Header from '@/components/Header'
import useUser from '@/hooks/useUser'
import { getFollowers, getFollowings } from '@/utils/api'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const  Followers: React.FC = () => {

    type FollowersType = { follower_id: string, isFollowing: boolean }[]
    type ParamsType = { id: string }

    const [followers, setFollowers] = useState<FollowersType>([]);
    const { myId } = useUser()
    const { id }: ParamsType = useParams()

    useEffect(() => {
        const getMyFollowers = async () => {
            const data = await getFollowers(id);
            console.log(data);
            getMyFollowings(data)
        }
        getMyFollowers();
    }, [id])

    const getMyFollowings = async (followers: FollowersType) => {
        // Getting the followings of the main user to be able to match if those followers are followed by him or not (for UI).
        const followings: { following_id: string }[] = await getFollowings(myId);
        console.log("Followings: ", followings);
        followers.map((follower) => {
            console.log(follower.follower_id, follower.isFollowing)
            console.log(followings.find(({ following_id }) => follower.follower_id === following_id));
            if(followings.find(({ following_id }) => follower.follower_id === following_id)){
                console.log("found", follower)
                follower.isFollowing = true;
            }
        })
        setFollowers(followers)
    }

    return (
        <div className=''>
            <Header>
                <div className="font-semibold w-1/2 text-center -translate-x-1/2">Followers &#40;{followers.length}&#41;</div>
            </Header>
            {followers.map(follower => (
                <Follower key={follower.follower_id} id={follower.follower_id} isFollowing={follower.isFollowing}/>
            ))}
        </div>
    )
}

export default Followers
