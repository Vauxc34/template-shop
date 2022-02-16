import { configureStore, combineReducers } from "@reduxjs/toolkit"
import cartReducer from './CartRedux'
import userReducer from './UserSlice.js'
import storage from 'redux-persist/lib/storage'
import persistReducer from "redux-persist/es/persistReducer"
import { 
    FLUSH, 
    PAUSE, 
    PERSIST, 
    REGISTER, 
    REHYDRATE, 
    PURGE } from "redux-persist/es/constants"
import persistStore from "redux-persist/es/persistStore"


const persistConfig = {
    key: 'root',
    version: 1,
    storage
}

const rootReducer = combineReducers({user: userReducer, cart: cartReducer})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
     getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        },
    }),
})

export let persistor = persistStore(store)
export default store