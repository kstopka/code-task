import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DataFromApi, WorkersData } from "../App.d";

const initialState: DataFromApi = {
    imBusy: false,
    workersData: [],
    error: false,
    errorMessage: "",
};

const dataSlice = createSlice({
    name: "workersData",
    initialState,
    reducers: {
        setError: (state, action: PayloadAction<string>) => {
            state.imBusy = true;
            state.error = true;
            state.errorMessage = action.payload;
        },
        setWorkersData: (state, action: PayloadAction<WorkersData[]>) => {
            state.imBusy = true;
            state.workersData = action.payload;
        },
    },
});
export const { setError, setWorkersData } = dataSlice.actions;
export default dataSlice.reducer;
