import { instance } from "../axios"
import config from "../config"
import { UserCredentials } from "../redux/types"


export const signUpRequest = async({name, email, password}:UserCredentials) => {

    try {
        const response = await instance.post(`${config.app.api}auth/register`, {
            name,
            email,
            password
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }

} 


export const signInRequest = async({email, password}:UserCredentials) => {
    try {
        const response = await instance.post(`${config.app.api}auth/login`, {
            email,
            password
        });
        
        if(response.data.accessToken){
            return response.data;
        } else {
            console.log("Authentication Error")
        }
    } catch (error) {
        console.log(error);
    }

} 