import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthState, User } from "./auth.types";
const initialState: AuthState = {
    isUserAuth: false,
    user: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
        setIsUserAuth: (state, action: PayloadAction<boolean>) => {
            state.isUserAuth = action.payload;
        },
    },
    selectors: {
        selectUser: state => state.user,
        selectIsUserAuth: state => state.isUserAuth
    }
});

export const { setIsUserAuth, setUser } = authSlice.actions;
export const { selectUser, selectIsUserAuth } = authSlice.selectors;
export const authReducer = authSlice.reducer;

