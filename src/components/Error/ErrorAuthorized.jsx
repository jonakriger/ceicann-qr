// Import React
import React from "react";

// Import React Router Dom
import { useRouteError } from "react-router-dom";

// Import Icons
import { ReactComponent as IconExclamation } from "../../icons/icon-lock.svg";

// Init Function
const ErrorAuthorized = () => {
    const error = useRouteError();

    return (
        <main className="c-main c-main-error p-0" role="main">
            <section className="c-section c-section-error vh-100">
                <div className="container-md h-100">
                    <div className="row align-items-center justify-content-center h-100">
                        <div className="col-12">
                            <div class="alert c-alert c-alert-error c-alert-error-autorized" role="alert">
                                <div className="c-alert-icon">
                                    <IconExclamation />
                                </div>
                                <h2 className="c-alert-heading">No tienes autorización para ver esto.</h2>
                                <div className="c-alert-status">
                                    <p>Error {error.status}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

// Export Function
export default ErrorAuthorized;
