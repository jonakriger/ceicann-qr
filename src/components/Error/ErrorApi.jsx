import React from "react";

import { ReactComponent as IconApi } from "../../icons/icon-api-error.svg";

const ErrorApi = () => {
    return (
        <main className="c-main c-main-error p-0" role="main">
            <section className="c-section c-section-error vh-100">
                <div className="container-md h-100">
                    <div className="row align-items-center justify-content-center h-100">
                        <div className="col-12">
                            <div class="alert c-alert c-alert-error c-alert-error-api" role="alert">
                                <div className="c-alert-icon">
                                    <IconApi />
                                </div>
                                <h2 className="c-alert-heading">Parece que la API está caída!</h2>
                                <div className="c-alert-message">
                                    <p>Algo sucedio mientras se cargaba el sitio. Por Favor, intenta en unos instantes.</p>
                                </div>
                                <div className="c-alert-status">
                                    <p>Error 503</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ErrorApi;
