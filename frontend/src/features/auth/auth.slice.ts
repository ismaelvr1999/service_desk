import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
    name: "auth",
    initialState: {
        value: 0
    },
    reducers: {
        increment: state => {
            state.value += 1;
        }
    },
    selectors:{
        selectCount: state => state.value
    }
});

export const { increment } = authSlice.actions;
export const {selectCount} = authSlice.selectors;
export const authReducer = authSlice.reducer ;

