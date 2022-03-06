import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import mockedData from "../data/fakeAPI";
import { setError, setWorkersData } from "../reducers/reducerData";
import { RootState } from "../store";
import { WorkersData } from "../App.d";

const asyncWrapperForPromiseWithConnectedState = async (
    promiseWrapper: { (): Promise<WorkersData[]>; (): any },
    {
        setForError,
        setForResponse,
    }: {
        setForError: any;
        setForResponse: any;
    }
) => {
    try {
        const placeholderData = await promiseWrapper();
        setForResponse(placeholderData);
    } catch ({ message, duringError }) {
        setForError(message);
    }
};

const setForError = (dispatch: Dispatch<any>) => (payload: string) => {
    dispatch(setError(payload));
};
const setForResponse = (dispatch: Dispatch<any>) => (payload: WorkersData[]) => {
    dispatch(setWorkersData(payload));
};

export const useDataFromApi = () => {
    const { imBusy } = useSelector((state: RootState) => state.workersData);
    const dispatch = useDispatch();
    useEffect(() => {
        if (!imBusy) {
            asyncWrapperForPromiseWithConnectedState(() => mockedData(true, 500), {
                setForError: setForError(dispatch),
                setForResponse: setForResponse(dispatch),
            });
        }
    });
};
