// Import React
import React from "react";

// Import React Router Dom
import { useRouteError } from "react-router-dom";

// Import Icons
import { ReactComponent as IconExclamation } from "../../icons/icon-exclamation.svg";

// Init Function
const ErrorInvalidID = () => {
    const error = useRouteError();

    return (
        <main className="c-main c-main-error p-0" role="main">
            <section className="c-section c-section-error vh-100">
                <div className="container-md h-100">
                    <div className="row align-items-center justify-content-center h-100">
                        <div className="col-12">
                            <div class={"alert c-alert c-alert-error " + (error.data.errorType ? "c-alert-error-" + error.data.errorType : "")} role="alert">
                                <div className="c-alert-icon">
                                    <IconExclamation />
                                </div>
                                {error.data.errorHeading && <h2 className="c-alert-heading">{error.data.errorHeading}</h2>}
                                {error.data.errorMsg && <div className="c-alert-message" dangerouslySetInnerHTML={{ __html: error.data.errorMsg }} />}
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
export default ErrorInvalidID;
