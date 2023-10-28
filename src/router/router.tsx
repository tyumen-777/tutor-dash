import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layout/Layout";
import { MainScreen } from "../screens/MainScreen/MainScreen";

export const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <MainScreen />
            }
        ]
    }
])