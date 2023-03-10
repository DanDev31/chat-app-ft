import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IContact } from "../../interfaces/user.interface";


const initialState:IContact = {
    _id:"",
    name:"",
    email:""
};

const contactSlice = createSlice({
    name:'contact',
    initialState,
    reducers:{
        setContactInfo(state, {payload}:PayloadAction<IContact>){
            state._id=payload._id;
            state.name=payload.name;
            state.email=payload.email;
        }
    }
});

export const { setContactInfo } = contactSlice.actions;
export default contactSlice.reducer;

