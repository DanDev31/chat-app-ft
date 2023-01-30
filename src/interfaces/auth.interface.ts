
export interface IUser {
    id:string;
    name:string;
    email:string;
    contacts:UserContacts[];
};

export type UserContacts = {
    id:string;
    email:string;
}

export interface AuthUser {
    userInfo:IUser;
    userToken:string;
    loading:boolean;
    success:boolean;
    error:unknown;
};

export interface IFormValues {
    name?:string;
    email:string;
    password:string;
};