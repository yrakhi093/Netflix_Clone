import { createSlice } from "@reduxjs/toolkit";

const genreSlice = createSlice({

    name:"genre",
    initialState:{
        value: null
    },
    reducers:{
        genreFeatured:(state, action)=>{
            state.value = action.payload
        },
        genreHome:(state, action)=>{
            state.value = null
        }
    }

})


export const {genreFeatured, genreHome} = genreSlice.actions

export default genreSlice.reducer