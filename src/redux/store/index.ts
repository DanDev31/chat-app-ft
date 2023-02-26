import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/user";
import contactReducer from "../slices/contact";
import appSlice from "../slices/app";


export const store = configureStore({
    reducer:{
      user:userReducer,
      contact:contactReducer,
      app:appSlice
    }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
