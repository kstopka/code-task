export interface AssignedTo {
    person_name: string;
    status: string;
}

export interface WorkersData {
    work_order_id: number;
    description: string;
    received_date: string;
    assigned_to: AssignedTo[];
    status: string;
    priority: string;
}

export interface DataFromApi {
    imBusy: boolean;
    workersData: WorkersData[];
    error: boolean;
    errorMessage: string;
}
