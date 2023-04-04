// Import React
import React, { Fragment } from "react";

// Import React Router Dom
import { Outlet, ScrollRestoration } from "react-router-dom";

// Import React Helmet Async
import { Helmet, HelmetProvider } from "react-helmet-async";

// Import Components
import NavBarHeader from "./NavBarHeader";
import NavBarFooter from "./NavBarFooter";

// Init Function
const Layout = () => {
    return (
        <Fragment>
            <HelmetProvider>
                <Helmet>
                    <link rel="apple-touch-icon" sizes="180x180" href="/img/favicons/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/img/favicons/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="194x194" href="/img/favicons/favicon-194x194.png" />
                    <link rel="icon" type="image/png" sizes="192x192" href="/img/favicons/android-chrome-192x192.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/img/favicons/favicon-16x16.png" />
                    <link rel="manifest" href="/img/favicons/site.webmanifest" />
                    <link rel="mask-icon" href="/img/favicons/safari-pinned-tab.svg" color="#453490" />
                    <link rel="shortcut icon" href="/img/favicons/favicon.ico" />
                    <meta name="msapplication-TileColor" content="#453490" />
                    <meta name="msapplication-TileImage" content="/img/favicons/mstile-144x144.png" />
                    <meta name="msapplication-config" content="/img/favicons/browserconfig.xml" />
                    <meta name="theme-color" content="#453490" />
                </Helmet>
            </HelmetProvider>
            <NavBarFooter />
            <NavBarHeader />
            <Outlet />
            <ScrollRestoration />
        </Fragment>
    );
};

// Export Function
export default Layout;
