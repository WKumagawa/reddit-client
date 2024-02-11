import { createSlice } from '@reduxjs/toolkit';
import { popular } from '../util/reddit';

export const popularSlice = createSlice({
    name: 'popular',
    initialState: popular(),
    reducer: {
        refresh: (state, action) => {
            state = action.payload;
        }
    }
});

export const selectPopular = (state) => state;
export const { refresh } = popularSlice.actions;
export default popularSlice.reducer;