// Import React
import React, { Fragment } from "react";

// Import React Router Dom
import { useRouteLoaderData } from "react-router-dom";

// Import Components
import IntroLogo from "../components/Info/IntroLogo";
import DividerDots from "../components/DividerDots";
import CardLogo from "../components/Info/CardLogo";
import Download from "../components/Download";

// Init Function
const InfoPage = () => {
    // Get Data Root
    const { dataInfo } = useRouteLoaderData("root");

    return (
        <main className="c-main c-main-info" role="main">
            <IntroLogo />
            {dataInfo &&
                dataInfo.map((item, index) => (
                    <Fragment key={index}>
                        <DividerDots />
                        <section className={"c-section " + (item.slug ? " c-section-" + item.slug : "")}>
                            <div className="container-md">
                                <div className="row">
                                    <div className="col-12">
                                        {item.title && <h4 className="c-section-heading">{item.title}</h4>}
                                        {item.content && <div className="c-section-content" dangerouslySetInnerHTML={{ __html: item.content }}></div>}
                                        {item.logos && (
                                            <div className="block-wid mt-4">
                                                <div class="row align-items-center justify-content-around">
                                                    {item.logos.map((logo, key) => (
                                                        <CardLogo key={key} {...logo} />
                                                    ))}
                                                </div>
                                            </div>
                                        )}
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
export default InfoPage;
