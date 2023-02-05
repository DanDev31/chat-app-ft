import { createAsyncThunk } from "@reduxjs/toolkit";
import { AddNewContact, getContacts } from "../../services/user.service";
import { NewContact } from "../types";


export const AddNewContactThunk = createAsyncThunk('user/addNewContact', 
    async({userId, contactEmail}:NewContact, { rejectWithValue }) => {
        try {
            const response = await AddNewContact(userId, contactEmail);
            return response;
        } catch (error) {
            rejectWithValue(error);
        }
    } 
);

export const getUserContactsThunk = createAsyncThunk('user/getContacts', 
    async(userId:string, { rejectWithValue }) => {
        try {
            const response = await getContacts(userId);
            return response;
        } catch (error) {
            rejectWithValue(error);
        }
    } 
);