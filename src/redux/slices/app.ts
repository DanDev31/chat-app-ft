import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IApp {
    toggleChat:boolean;
    startChat:boolean;
    conversationId:string;
};

const initialState:IApp = {
    toggleChat:false,
    startChat:false,
    conversationId:""
};

const appSlice = createSlice({
    name:'contact',
    initialState,
    reducers:{
        setToggleChat(state){
            state.toggleChat=!state.toggleChat;
        },
        startChat(state, {payload}:PayloadAction<string | undefined>){
            state.startChat = true;
            if(payload){
                state.conversationId=payload;
            }
        }
    }
});

export const { setToggleChat, startChat } = appSlice.actions;
export default appSlice.reducer;