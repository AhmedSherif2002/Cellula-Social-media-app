import { createSlice } from "@reduxjs/toolkit";

interface UserState {
    isLoggedIn: boolean;
    userInfo: {
        id: string;
        name: string;
        email: string;
    } | null;
}

const initialState: UserState = {
    isLoggedIn: false,
    userInfo: null
}

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        login: (state: UserState, action) => {
            console.log(action.payload);
            state.isLoggedIn = true;
            state.userInfo = action.payload;
        },
        logout: state => {
            state.isLoggedIn = false;
            state.userInfo = null;
        }
    }
})

export const {login, logout } = userSlice.actions;
export type { UserState};
export default userSlice.reducer;