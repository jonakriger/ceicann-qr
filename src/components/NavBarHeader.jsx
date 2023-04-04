// Import React
import React from "react";

// Import React Router Dom
import { useMatches, useParams, useRouteLoaderData } from "react-router-dom";

// Import React Helmet Async
import { Helmet, HelmetProvider } from "react-helmet-async";

// Init Function
const NavBarHeader = () => {
    // Get Seed ID
    const { seedID } = useParams();

    // Get Handle - Title Tag
    const getMatches = useMatches();
    const titleHandle = getMatches.find((m) => m.handle?.titleTag);
    const pageTitle = titleHandle.handle.titleTag ? titleHandle.handle.titleTag : "";

    // Get Seed Name
    const { dataSeed } = useRouteLoaderData("root");
    const seedName = dataSeed.find((s) => s.id === seedID).name;

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>
                        {pageTitle} | {seedName} | CEICann
                    </title>
                </Helmet>
            </HelmetProvider>
            <nav className="c-navbar c-navbar-header navbar navbar-expand fixed-top bg-body-tertiary">
                <div className="container-md">
                    <div className="collapse navbar-collapse justify-content-between" id="navbarHeader">
                        <div className="col col-md-6 offset-md-3 text-md-center">
                            <span className="navbar-text fw-600 py-0">{pageTitle}</span>
                        </div>
                        <div className="col-auto col-md-3 text-md-end">
                            <button type="button" className="btn btn-sm btn-primary" disabled>
                                #{seedID}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

// Export Function
export default NavBarHeader;
