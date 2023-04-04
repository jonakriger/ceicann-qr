// Import React
import React from "react";

// Import React Router Dom
import { useParams, useRouteLoaderData } from "react-router-dom";

// Import Components
import Download from "../components/Download";

// Import Icons
import { CardImg, CardListGroup, CardSubtitle, CardText, CardTitle } from "../components/Feature/CardSeed";

// Init Function
const FeaturePage = () => {
    // Get Seed ID
    const { seedID } = useParams();

    // Get Data Root
    const { dataSeed } = useRouteLoaderData("root");

    // Select Seed
    const seedData = dataSeed.find((s) => s.id === seedID);

    return (
        <main className="c-main c-main-feature" role="main">
            {seedData && (
                <section className="c-section c-section-seed">
                    <div className="container-md">
                        <div className="row">
                            <div className="col-12">
                                <div className="card card-seed">
                                    <div className="row gx-5">
                                        <div className="col-12 col-md-4">
                                            <CardImg seedImg={seedData.image} />
                                        </div>
                                        <div className="col-12 col-md-8">
                                            <div className="card-body">
                                                <CardTitle seedName={seedData.name} />
                                                <CardSubtitle seedSubtitle={seedData.labels} />
                                                <CardText SeedText={seedData.content} />
                                            </div>
                                            <CardListGroup SeedFeature={seedData.features} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
            <Download />
        </main>
    );
};

// Export Function
export default FeaturePage;
