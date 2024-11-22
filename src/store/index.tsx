import { configureStore } from "@reduxjs/toolkit";
import{
    authSlice,
    userSlice,
    postSlice
} from './feature'
import { useSelector } from "react-redux";
const store = configureStore({
    reducer: {
        auth: authSlice,
        user: userSlice,
        post: postSlice
    }
})

export type XDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export const XUserSelector = useSelector.withTypes<RootState>();
export default store;