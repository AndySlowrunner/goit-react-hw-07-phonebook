import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = {
    filter: '',
};

const filterSlice = createSlice({
    name: "fiLter",
    initialState: filterInitialState,
    reducers: {
        setFilter(state, action) {
            state.filter = action.payload;
        }
    }
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;