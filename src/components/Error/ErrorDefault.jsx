import React from "react";

import { ReactComponent as IconLightbulbOff } from "../../icons/icon-light-off.svg";

const ErrorDefault = () => {
    return (
        <main className="c-main c-main-error" role="main">
            <section className="c-section c-section-error">
                <div className="container-md">
                    <div className="row">
                        <div className="col-12">
                            <div class="alert c-alert c-alert-error c-alert-error-default" role="alert">
                                <div className="c-alert-icon">
                                    <IconLightbulbOff />
                                </div>
                                <h2 className="c-alert-heading">Algo salió mal!</h2>
                                <div className="c-alert-message">
                                    <p>Algo sucedio mientras se cargaba el sitio. Por Favor, intenta en unos instantes.</p>
                                </div>
                                <div className="c-alert-status">
                                    <p>Error 000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ErrorDefault;
