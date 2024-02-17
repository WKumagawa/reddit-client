import { configureStore } from '@reduxjs/toolkit';

import redditReducer from '../component/redditSlice';

export default configureStore({
    reducer: {
        reddit: redditReducer,
    },
});