import {createSlice}  from "@reduxjs/toolkit"

const appSlice = createSlice({
    name:"app",
    initialState: {
        isExploreOpen : false
    },
    reducers:{
        exploreOpen :(state)=>{
            state.isExploreOpen = true;
        }

    }

 })
 export const {exploreOpen} = appSlice.actions;
 export default appSlice.reducer;