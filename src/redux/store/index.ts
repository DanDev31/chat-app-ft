import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import authReducer from "../slices/auth";
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key: 'root',
    storage,
    sessionStorage
  };

const persistedReducer = persistReducer(persistConfig, authReducer)

export const store = configureStore({
    reducer:{
        auth:persistedReducer
    },
    devTools: import.meta.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:false
    })
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
