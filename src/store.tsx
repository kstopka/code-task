import { configureStore } from "@reduxjs/toolkit";
import workersData from "./reducers/reducerData";

export const store = configureStore({
    reducer: {
        workersData,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
