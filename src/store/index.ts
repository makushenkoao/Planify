import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user';
import tasksReducer from './tasks';

export const store = configureStore({
    reducer: {
        user: userReducer,
        tasks: tasksReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
