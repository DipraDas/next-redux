import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import homeSlice from '../features/home/homeSlice'

export const store = configureStore({
    reducer: {
        home: homeSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
})