import { instance } from "../axios";
import config from "../config";

export const getContactInfo = async(userId:string, email:string) => {
    try {
        const response = await instance.get(`${config.app.api}users/getContactInfo?userId=${userId}&email=${email}`);
        return response.data;
    } catch (error) {
        console.log('Error in getting contact info. ' + error);
    }
};


export const AddNewContact = async(userId:string, contactEmail:string) => {
    try {
        const response = await instance.post(`${config.app.api}users/addContact`,{
            userId,
            contactEmail
        });
        return response.data;
    } catch (error) {
        console.log('Error adding a new contact. ' + error);
    }
};

export const getContacts = async(userId:string) => {
    try {
        const response = await instance.get(`${config.app.api}users/getUserContacts/${userId}`);
        return response.data;
    } catch (error) {
        console.log('Error adding a new contact. ' + error);
    }
}; 


export const getConversations = async(userId:string) => {
    try {
        const response = await instance.get(`${config.app.api}conversation/getConversations?userId=${userId}`);
        return response.data;
    } catch (error) {
        console.log('Error getting user conversations. ' + error);
    }
}; 

export const createNewConversation = async(userId:string, contactId:string) => {
    try {
        const response = await instance.post(`${config.app.api}conversation/createconversation`, {userId, contactId});
        return response.data;
    } catch (error) {
        console.log('Error creating a new conversation. ' + error);
    }
}; 

// export const postNewMessage = async()

