import {useRoutes} from "react-router-dom";
import allRoutes from "./AllRoutes";
import AppContext, {context} from "./components/general/AppContext";
import {useState} from "react";

const App = () => {
    const [mainRoutes, setMainRoutes] = useState(new allRoutes());
    const routing = useRoutes(mainRoutes.allRoutes);

    const userSettings: context = {
        addNewRoute: (path: string, element?: JSX.Element) => {
            setMainRoutes(mainRoutes.addRoute(path, element));
        }
    }

    return (
        <AppContext.Provider value={userSettings}>
            {routing}
        </AppContext.Provider>
    )
};

export default App;
