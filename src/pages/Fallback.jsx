// Import React
import React from "react";

// Create Function
const Fallback = () => {
    return (
        <main className="c-main c-main-fallback p-0" role="main">
            <section className="c-section c-section-fallback vh-100">
                <div className="container-md h-100">
                    <div className="row align-items-center justify-content-start h-100">
                        <div className="col-12">
                            <h1 className="display-1 welcome-title fw-bolder m-0">Hola!</h1>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

// Export Function
export default Fallback;
