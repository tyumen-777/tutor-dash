import { createBrowserRouter } from "react-router-dom";
import { MainScreen } from "../screens/MainScreen/MainScreen";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainScreen/>,
    }
])