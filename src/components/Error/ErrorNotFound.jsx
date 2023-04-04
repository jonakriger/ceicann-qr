import React from "react";

const ErrorNotFound = () => {
    return (
        <main className="c-main c-main-error p-0" role="main">
            <section className="c-section c-section-error vh-100">
                <div className="container-md h-100">
                    <div className="row align-items-center justify-content-center h-100">
                        <div className="col-12">
                            <div class="alert c-alert c-alert-error c-alert-error-404" role="alert">
                                <h2 className="c-alert-heading">
                                    <span className="c-alert-status">Error 404</span> <span className="c-alert-divider">|</span> <span className="c-alert-message">Página no encontrada.</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ErrorNotFound;
