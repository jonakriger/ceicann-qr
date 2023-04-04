// Import React
import React from "react";

// Import React Router Dom
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

// Import Components
import RootLoader, { QrLoader } from "./router/RootLoader";
import Layout from "./components/Layout";

// Import Pages
import InfoPage from "./pages/InfoPage";
import FeaturePage from "./pages/FeaturePage";
import HelpPage from "./pages/HelpPage";
import ErrorBoundary from "./pages/ErrorBoundary";

// Import Styles
import "./App.scss";
import QrCodes from "./pages/QrCodes";

// Create Router
let router = createBrowserRouter([
    {
        path: "/",
        id: "root",
        element: <Layout />,
        errorElement: <ErrorBoundary />,
        loader: RootLoader,
        children: [
            {
                path: "",
                element: <Outlet />,
                children: [
                    {
                        path: ":seedID",
                        element: <InfoPage />,
                        handle: { titleTag: "Información" },
                    },
                    {
                        path: "caracteristica/:seedID",
                        element: <FeaturePage />,
                        handle: { titleTag: "Características" },
                    },
                    {
                        path: "ayuda/:seedID",
                        element: <HelpPage />,
                        handle: { titleTag: "Ayuda" },
                    },
                ],
            },
        ],
    },
    {
        path: "/codigosQR",
        caseSensitive: true,
        id: "qr-code",
        loader: QrLoader,
        element: <QrCodes />,
    },
]);

// Dispose Router
if (import.meta.hot) {
    import.meta.hot.dispose(() => router.dispose());
}

// Init Function
const App = () => {
    return <RouterProvider router={router} fallbackElement="" />;
};

// Export Function
export default App;
