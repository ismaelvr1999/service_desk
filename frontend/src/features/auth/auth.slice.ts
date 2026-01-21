import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthState, User } from "./auth.types";
const initialState: AuthState = {
    isUserAuth: false,
    loading: true,
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
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
    },
    selectors: {
        selectUser: state => state.user,
        selectIsUserAuth: state => state.isUserAuth,
        selectLoading: state => state.loading

    }
});

export const { setIsUserAuth, setUser,setLoading } = authSlice.actions;
export const { selectUser, selectIsUserAuth, selectLoading } = authSlice.selectors;
export const authReducer = authSlice.reducer;

