import { configureStore } from '@reduxjs/toolkit'

import { setupListeners } from '@reduxjs/toolkit/query'
// my build api add 
import {userAuthApi} from '../services/userAuthApi'
// Redex Toolkit userSlice
import authReducer from '../features/authSlice'
import useReducer from '../features/userSlice'


export const store = configureStore({
  reducer: {
    [userAuthApi.reducerPath]: userAuthApi.reducer,
    auth:authReducer,
    user:useReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userAuthApi.middleware),
})

setupListeners(store.dispatch)