import { createSlice } from '@reduxjs/toolkit';

export const popularSlice = createSlice({
    name: 'popular',
    initialState: {
        posts: []
    },
    reducers: {
        reddit: (state, action) => {
            state.posts = action.payload
        }
    }
});

export const selectPopular = (state) => state.posts;
export const { reddit } = popularSlice.actions;
export default popularSlice.reducer;