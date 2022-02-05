import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name:"user",
    initialState:{
        currentUser: null,
        isFetching: false,
        isFetching: false,

    },
    reducers: {
        loginStart: (state) => {
            state.isFetching=true;
        },
        loginSucces: (state, action) => {
            state.isFetching=false;
            state.currentUser=action.payload;
        },
        loginFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    }
})

export const { loginStart, loginSucces, loginFailure } = userSlice.actions
export default userSlice.reducer