import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import userReducer from "../slices/user";
import contactReducer from "../slices/contact";
import appSlice from "../slices/app";
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key: 'root',
    storage,
    sessionStorage
  };

  const reducers = combineReducers({
    user:userReducer,
    contact:contactReducer,
    app:appSlice
  });

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer:{
        app:persistedReducer
    },
    devTools: import.meta.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:false
    })
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
