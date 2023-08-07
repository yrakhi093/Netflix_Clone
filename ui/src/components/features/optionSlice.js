import { createSlice } from "@reduxjs/toolkit";


const optionSlice = createSlice({

    name:"option",
    initialState: {
        value:["Genre", "Documentries", "Comedy", "Action", "Horror", "Crime Thriller"]
        // value: "a"
    },
    reducers:{
      finalValue: (state, action)=>{
        state.value = action.payload
      }
    }

})

export default optionSlice.reducer

export const {finalValue} = optionSlice.actions