// Import React
import React from "react";

// Init Function
const DividerDots = () => {
    return (
        <section className="c-section c-section-divider">
            <div className="container-md">
                <div className="row justify-content-center">
                    <div className="col-4 col-md-1">
                        <div className="divider-dot d-flex align-items-center justify-content-between w-100 my-6 mx-auto">
                            <span className="dot d-block bg-primary rounded-circle opacity-50"></span>
                            <span className="dot d-block bg-primary rounded-circle opacity-50"></span>
                            <span className="dot d-block bg-primary rounded-circle opacity-50"></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Export Function
export default DividerDots;
