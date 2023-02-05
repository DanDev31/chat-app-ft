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