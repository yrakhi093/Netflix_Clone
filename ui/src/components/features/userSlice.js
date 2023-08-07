import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {

    isFetching: false,
    error: false,
    user:null,
    userDp:null
}

const userSlice = createSlice({
    name:"user",
    initialState:{
        value: initialStateValue
    },
    reducers:{
        loginStart:(state)=>{
            state.value = {
                isFetching: true,
                error: false,
                user:null,
                userDp:null
            }
        },
        loginStartDp:(state,action)=>{
            state.value = {
                isFetching: true,
                error: false,
                user:null,
                userDp:action.payload
            }
        },
        loginSuccess:(state, action)=>{
            state.value = {
                isFetching: false,
                error: false,
                user:action.payload,
                userDp: null
            }
        },
        loginFailure:(state, action)=>{
            state.value = {
                isFetching: false,
                error: action.payload,
                user:null,
                userDp:null
            }
        },
        logOut:(state)=>{
            state.value = {
                isFetching: false,
                error: false,
                user:null,
                userDp:null
            }
        },

    }
})

export default userSlice.reducer

export const {loginStart, loginSuccess, loginFailure, logOut, loginStartDp} = userSlice.actions