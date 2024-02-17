import { createSlice } from '@reduxjs/toolkit';
import { revertAll } from '../util/reset';

export const redditSlice = createSlice({
    name: 'reddit',
    initialState: {
        posts: []
    },
    reducers: {
        addPosts: (state, action) => {
            state.posts = action.payload
        }
    },
});

export const selectPosts = (state) => state.posts;
export const { addPosts } = redditSlice.actions;
export default redditSlice.reducer;