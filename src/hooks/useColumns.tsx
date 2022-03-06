import { useMemo } from "react";

export const useColumns = () => {
    const columns = useMemo(
        () => [
            {
                Header: "WO ID",
                accessor: "work_order_id",
            },
            {
                Header: "Description",
                accessor: "description",
            },
            {
                Header: "Received date",
                accessor: "received_date",
            },
            {
                Header: "Assigned to",
                columns: [
                    {
                        Header: "Person Name",
                        accessor: "person_name",
                    },
                    {
                        Header: "Status",
                        accessor: ".status",
                    },
                ],
            },
            {
                Header: "Status",
                accessor: "status",
            },
            {
                Header: "Priority",
                accessor: "priority",
            },
        ],
        []
    );
    return columns;
};
