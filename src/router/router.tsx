import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { MainScreen } from "../screens/MainScreen/MainScreen";

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <MainScreen/>
            }
        ]
    }
])