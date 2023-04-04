// Import React
import React from "react";

// Import Imgs
import { ReactComponent as ImgDivider } from "../img/section-divider.svg";

// Init Function
const DividerZigZag = () => {
    return (
        <section className="c-section c-section-divider">
            <div className="container-md">
                <div className="row justify-content-center">
                    <div className="col-4 col-md-1">
                        <div className="divider-zigzag block-wide text-primary opacity-50 my-6 mx-auto">
                            <ImgDivider />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Export Function
export default DividerZigZag;
