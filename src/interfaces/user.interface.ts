
export interface IUser {
    id:string;
    name:string;
    email:string;
    contacts:IContact[];
};

export interface IContact {
    _id:string;
    name:string;
    email:string;
}

export interface IConversation {
    _id:string;
    userId:string;
    contactId:string;
};

export interface IMessage {
    id:string;
    text:string;
    date:Date;
    wasReaded:boolean;
};

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

export type ChatMessage = {
    _id:string;
    userId:string;
    conversationId:string;
    text:string;
    wasReaded:boolean;
};
