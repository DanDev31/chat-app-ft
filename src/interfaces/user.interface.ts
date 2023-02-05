
export interface IUser {
    id:string;
    name:string;
    email:string;
    contacts:IContact[];
};

export interface IContact extends Omit<IUser, 'contacts'>{}; 

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