import {configureStore} from '@reduxjs/toolkit'

import { keepSlice } from './slices/keepSlice'
import { postApi } from './services/api'
import { userSlice } from './actions/user'

export const store = configureStore({
    reducer: {
        // Add reducers here
        [postApi.reducerPath]: postApi.reducer,
        user: userSlice,
        keep: keepSlice
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(postApi.middleware);
    },
})