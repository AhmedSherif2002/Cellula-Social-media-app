import Follower from '@/components/Follower'
import Header from '@/components/Header'
import React from 'react'

const  Followers: React.FC = () => {
    return (
        <div className=''>
            <Header>
                <div className="font-semibold w-1/2 text-center -translate-x-1/2">Followers &#40;4K&#41;</div>
            </Header>
            <Follower userId={1} userName={"Marshmello"} userTag={"mershmello"} />
            <Follower userId={1} userName={"Marshmello"} userTag={"mershmello"} />
            <Follower userId={1} userName={"Marshmello"} userTag={"mershmello"} />
            <Follower userId={1} userName={"Marshmello"} userTag={"mershmello"} />
            <Follower userId={1} userName={"Marshmello"} userTag={"mershmello"} />
        </div>
    )
}

export default Followers
