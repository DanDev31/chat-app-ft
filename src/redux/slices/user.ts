import { createSlice } from "@reduxjs/toolkit";
import { AuthUser } from "../../interfaces/user.interface";
import { signUp, signIn } from "../thunks/auth-thunk";  
import { getUserContactsThunk } from "../thunks/user-thunk";


const initialState:AuthUser = {
    userInfo:{
        id:"",
        name:"",
        email:"",
        contacts:[] 
    },
    userToken:"",
    loading:false,
    success:false,
    error:null
}


const authSlice = createSlice({
    name:"authUser",
    initialState,
    reducers:{
        logout(state){
            // Optimizar
            state.userInfo={
                id:"",
                name:"",
                email:"",
                contacts:[] 
            },
            state.userToken=""
            state.loading=false
            state.success=false
            state.error=null
        }
    },
    extraReducers: (builder) => {
        // Register  Handlers
        builder.addCase(signUp.pending, (state) => {
            state.loading = true;
            state.error  =null;
        })
        builder.addCase(signUp.fulfilled, (state) => {
            state.loading = false;
            state.success = true;
        })
        builder.addCase(signUp.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        })
        // Login Handlers
        builder.addCase(signIn.pending, (state) => {
            state.loading = true;
            state.error  =null;
        })
        builder.addCase(signIn.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.success = true;
            state.userInfo = payload.userInfo;
            state.userToken = payload.accessToken;
        })
        builder.addCase(signIn.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        })

        //Get user contacts
        builder.addCase(getUserContactsThunk.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(getUserContactsThunk.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.success = true;
            state.userInfo.contacts = payload.contacts;
        })
        builder.addCase(getUserContactsThunk.rejected, (state, { payload }) => {
            state.loading = false;
            state.userInfo.contacts = [];
            state.error = payload;
        })
    }

})

export const { logout } = authSlice.actions;
export default authSlice.reducer;