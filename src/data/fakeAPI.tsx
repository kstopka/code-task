import data from "./data.json";
import { WorkersData } from "../App.d";

const mockedData = (success: boolean, timeout?: number): Promise<WorkersData[]> =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve(data.response.data);
            }

            reject({ error: true, message: "failed fetch" });
        }, timeout);
    });

export default mockedData;
