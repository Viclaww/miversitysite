import { configureStore } from "@reduxjs/toolkit";
import { generalApiSlice } from "./api/generalApiSlice";
export const makeStore = () => {
    return configureStore({
        reducer: {
            [generalApiSlice.reducerPath]: generalApiSlice.reducer
        },
        middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(generalApiSlice.middleware),
    });
};

export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']