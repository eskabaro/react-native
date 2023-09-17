import AsyncStorage from "@react-native-async-storage/async-storage"
import CartReducer from './slices/cartSlice'
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { persistReducer, persistStore } from "redux-persist"

const persistConfig = {
   key: 'foody',
   storage: AsyncStorage,
}

const rootReducer = combineReducers({
   CartReducer
})

export const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
   reducer: persistedReducer,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: false
      }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
export const persistor = persistStore(store)