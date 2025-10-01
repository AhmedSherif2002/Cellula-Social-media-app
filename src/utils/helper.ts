import { getFollowings } from "./api";

export const isFollowing = async (userId: string, following_id: string): Promise<boolean> => {
    const followings = await getFollowings(userId);
    const result = followings.some(following => following.following_id === following_id);    
    console.log("Following result: ", result);
    return result;
}