import { createAsyncThunk } from "@reduxjs/toolkit";
import { signUpRequest, signInRequest } from "../../services/auth.service";
import { UserCredentials } from "../types";


export const signUp = createAsyncThunk("auth/userSignUp",

    async({name, email, password}:UserCredentials, thunkApi) => {
        
        try {
            const response = await signUpRequest({name, email, password});
            return response;
        } catch (error) {
            thunkApi.rejectWithValue(error);
        }
    }
)


export const signIn = createAsyncThunk("auth/userSignIn",

    async({email, password}:UserCredentials, thunkApi) => {
        
        try {
            const response = await signInRequest({email, password});
            return response;
        } catch (error) {
            thunkApi.rejectWithValue(error);
        }
    }
)