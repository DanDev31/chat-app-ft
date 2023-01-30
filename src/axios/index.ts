import axios from "axios";
import config from "../config";

export const instance = axios.create({
    baseURL: config.app.api
});


axios.interceptors.request.use(
    config => {

        
        return config
    }
)