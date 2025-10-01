import { UserData } from "@/types/User";

    export const signup = async (name: string, email: string, password: string) => {
    const res = await fetch(`http://127.0.0.1:8000/sign-up/?name=${name}&email=${email}&password=${password}`, {
        method: "POST",
    }) 
    if(!res.ok) throw new Error("Signup failed");
    const data = await res.json();
    return data.id;
}

export const signin = async (email: string, password: string) => {
    const res = await fetch(`http://127.0.0.1:8000/sign-in/?email=${email}&password=${password}`, {
        method: "GET",
    }) 
    if(!res.ok) throw new Error("Login failed");
    const data = await res.json();
    console.log(data)
    const userData = await fetchUser(data);
    console.log(userData)
    return userData;
}

export const getProfile = async (id: string) => {
    const [user, followers, followings, posts]: [UserData, ... {}[][]] = await Promise.all([fetchUser(id), getFollowers(id), getFollowings(id), getUserPosts(id)]);
    console.log([user, followers, followings, posts])
    return { ...user, numberOfFollowers: followers.length, numberOfFollowings: followings.length, numberOfPosts: posts.length }
}

export const fetchUser = async (id: string) => {
    const res = await fetch(`http://127.0.0.1:8000/get-user_data/?user_id=${id}`);
    if(!res.ok){
        throw new Error ("Fetching user data failed");
    }
    const data = (await res.json())[0];
    return data;
}


export const getFollowers = async (id: string): Promise<{ follower_id: string, isFollowing: boolean  } []> => {
    const res = await fetch(`http://127.0.0.1:8000/get-followers/?user_id=${id}`);
    if(!res.ok) throw new Error ("Failed getting followers");
    const data = await res.json();
    return data; 
}

export const getFollowings = async (id: string): Promise<{ following_id: string } []> => {
    const res = await fetch(`http://127.0.0.1:8000/get-followings/?user_id=${id}`);
    if(!res.ok) throw new Error ("Failed getting followings");
    const data = await res.json();
    return data; 
}

export const getUserPosts = async (id: string): Promise<{} []> => {
    const res = await fetch(`http://127.0.0.1:8000/get-user-posts/?user_id=${id}`);
    if(!res.ok) throw new Error ("Failed getting Posts");
    const data = await res.json();
    return data; 
}

export const follow = async (senderId: string, receiverId: string) => {
    const res = await fetch(`http://127.0.0.1:8000/follow/?sender_id=${senderId}&receiver_id=${receiverId}`, {
        method: "POST"
    })
    if(!res.ok) throw new Error("Failed to follow a user");
    const data = await res.json();
    return data;
}

export const unfollow = async (senderId: string, receiverId: string) => {
    const res = await fetch(`http://127.0.0.1:8000/unfollow/?sender_id=${senderId}&receiver_id=${receiverId}`, {
        method: "DELETE"
    })
    if(!res.ok) throw new Error("Failed to unfollow a user");
    const data = await res.json();
    return data;
}

export const uploadPost = async (uploaderId: string, postContent: string) => {
    const res = await fetch(`http://127.0.0.1:8000/create-post?user_id=${uploaderId}&content=${postContent}`, {
        method: "POST"
    });
    if(!res.ok) throw new Error("Error creating a post");
    const daat = await res.json();
}

export const getPosts = async () => {
    const res = await fetch(`http://127.0.0.1:8000/get-all-posts`);
    if(!res.ok) throw new Error ("Failed to fetch posts");
    const data = await res.json();
    return data;
}