import { createAsyncThunk } from "@reduxjs/toolkit";
import { AddNewContact, createNewConversation, getContacts, getConversations } from "../../services/user.service";
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

export const getUserConversationsThunk = createAsyncThunk('user/getConversations', 
    async(userId:string, { rejectWithValue }) => {
        try {
            const response = await getConversations(userId);
            return response;
        } catch (error) {
            rejectWithValue(error);
        }
    } 
);

type Ids = {
    userId:string,
    contactId:string;
}

export const createConversationThunk = createAsyncThunk('user/createConversations', 
    async({userId, contactId}:Ids, { rejectWithValue }) => {
        try {
            const response = await createNewConversation(userId, contactId);
            return response;
        } catch (error) {
            rejectWithValue(error);
        }
    } 
);