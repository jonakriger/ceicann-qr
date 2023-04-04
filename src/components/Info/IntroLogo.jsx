// Import React
import React from "react";

// Import Imgs & SVG
import { ReactComponent as LogoCeicann } from "../../img/logo-ceicann.svg";

// Init Function
const IntroLogo = () => {
    return (
        <section className="c-section c-section-logo">
            <div className="container-md">
                <div className="row justify-content-center">
                    <div className="col-9 col-md-3">
                        <div className="flex-column-wide gap-2 text-center">
                            <div className="block-wide">
                                <LogoCeicann />
                            </div>
                            <h1 className="fs-6 fw-semibold m-0 visually-hidden">CEICann</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Export Function
export default IntroLogo;
