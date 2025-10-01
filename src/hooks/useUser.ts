import { RootState } from "@/store/store"
import { useSelector } from "react-redux"

function useUser() {
    const user = useSelector((state: RootState) => state.user.userInfo);
    if(!user) throw Error("User isn't logged in");
    return {
        myId: user.id,
        myName: user.name,
        myEmail: user.email
    }
}

export default useUser
