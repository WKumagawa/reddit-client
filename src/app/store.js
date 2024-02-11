import { configureStore } from '@reduxjs/toolkit';

import popularReducer from '../component/popularSlice';

export default configureStore({
    reducer: {
        popular: popularReducer,
    },
});