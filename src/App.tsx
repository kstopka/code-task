import { FunctionComponent } from "react";
import { Provider } from "react-redux";
import WorkTable from "./components/WorkTable";
import { store } from "./store";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
    return (
        <div className="App">
            <Provider store={store}>
                <WorkTable />
            </Provider>
        </div>
    );
};

export default App;
