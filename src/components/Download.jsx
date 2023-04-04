// Import React
import React, { Fragment } from "react";

// Import Components
import DividerZigZag from "./DividerZigZag";

// Import Icons
import { ReactComponent as IconFile } from "../icons/icon-file.svg";
import { ReactComponent as IconDownload } from "../icons/icon-download.svg";

// Init Function
const Download = () => {
    return (
        <Fragment>
            <DividerZigZag />
            <section className="c-section c-section-download">
                <div className="container-md">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-auto">
                            <div className="alert alert-primary c-alert c-alert-download d-flex align-items-center px-md-4" role="alert">
                                <span className="c-alert-icon flex-shrink-0 d-block me-2">
                                    <IconFile />
                                </span>
                                <div>
                                    Puedes descargar este archivo en pdf con toda la información{" "}
                                    <a className="icon-link" href="/#">
                                        Aqui
                                        <IconDownload />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

// Export Function
export default Download;
