export type UserData = {
    id: string, 
    name: string,
    email: string
}

export type ProfileData = UserData & {
    numberOfFollowers: number
    numberOfFollowings: number
    numberOfPosts: number
}