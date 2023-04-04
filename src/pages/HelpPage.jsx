// Import React
import React, { Fragment } from "react";

// Import React Router Dom
import { useRouteLoaderData } from "react-router-dom";

// Import Components
import DividerDots from "../components/DividerDots";
import Download from "../components/Download";
import { ListContent, ListLink, ListText, ListTitle } from "../components/Help/ListHelp";

// Init Function
const HelpPage = () => {
    // Get Data Root
    const { dataHelp } = useRouteLoaderData("root");

    return (
        <main className="c-main c-main-help" role="main">
            {dataHelp &&
                dataHelp.map((section, index) => (
                    <Fragment key={index}>
                        {index !== 0 && <DividerDots />}
                        <section className={"c-section c-section-" + section.slug}>
                            <div className="container-md">
                                <div className="row">
                                    <div className="col-12">
                                        <ListTitle title={section.title} />
                                        <ListContent content={section.content} />
                                        {section.list && <ListLink list={section.list} />}
                                        {section.books && <ListText list={section.books} />}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </Fragment>
                ))}
            <Download />
        </main>
    );
};

// Export Function
export default HelpPage;
