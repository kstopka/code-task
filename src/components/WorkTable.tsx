import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { useColumns, useDataFromApi } from "../App.hooks";
import { RootState } from "../store";
import Loading from "./Loading";
import Table from "./Table";

interface WorkTableProps {}

const WorkTable: FunctionComponent<WorkTableProps> = () => {
    useDataFromApi();
    const { workersData, imBusy, errorMessage, error } = useSelector((state: RootState) => state.workersData);
    const columns = useColumns();

    if (!imBusy) {
        return <Loading />;
    }

    if (error) {
        return <h1>{errorMessage}</h1>;
    }

    return <Table columns={columns} data={workersData} />;
};

export default WorkTable;
