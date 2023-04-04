// Import React
import React from "react";

// Import React Router Dom
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import ErrorDefault from "../components/Error/ErrorDefault";
import ErrorNotFound from "../components/Error/ErrorNotFound";
import ErrorID from "../components/Error/ErrorID";
import ErrorInvalidID from "../components/Error/ErrorInvalidID";
import ErrorAuthorized from "../components/Error/ErrorAuthorized";
import ErrorApi from "../components/Error/ErrorApi";

// Create Function
const ErrorBoundary = () => {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        if (error.status === 401) {
            if (error.data.errorType === "errorID") {
                return <ErrorID />;
            }
            if (error.data.errorType === "InvalidID") {
                return <ErrorInvalidID />;
            }
            return <ErrorAuthorized />;
        }
        if (error.status === 404) {
            if (error.data.errorType === "errorAPI") {
                return <ErrorApi />;
            }
            return <ErrorNotFound />;
        }
        if (error.status === 503) {
            return <ErrorApi />;
        }
    }
    return <ErrorDefault />;
};

// Export Function
export default ErrorBoundary;
