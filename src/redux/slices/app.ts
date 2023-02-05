import { createSlice } from "@reduxjs/toolkit";

export interface IApp {
    toggleChat:boolean;
};

const initialState:IApp = {
    toggleChat:false
};

const appSlice = createSlice({
    name:'contact',
    initialState,
    reducers:{
        setToggleChat(state){
            state.toggleChat=!state.toggleChat;
        }
    }
});

export const { setToggleChat } = appSlice.actions;
export default appSlice.reducer;