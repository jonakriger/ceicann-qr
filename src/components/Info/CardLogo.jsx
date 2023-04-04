// Import React
import React from "react";

// Import React Router Dom
import { Link } from "react-router-dom";

// Init Function
const CardLogo = ({ name, url, target, title, rel, source_url, alt_text }) => {
    return (
        <div class="col col-md-auto">
            <div class="card d-card-logo">
                {source_url && (
                    <div className="card-img d-flex align-items-center justify-content-center">
                        {source_url.light && <img className="img-fluid img-light" src={source_url.light} alt={alt_text} />}
                        {source_url.dark && <img className="img-fluid img-dark" src={source_url.dark} alt={alt_text} />}
                        {url && <Link class="stretched-link" to={url} title={title ? title : "Ir a: " + url} target={target ? target : "_blank"} rel={rel ? rel : "noopener noreferrer"} />}
                    </div>
                )}
                {name && (
                    <div class="card-body">
                        <h6 class="card-title mt-2 visually-hidden">{name}</h6>
                    </div>
                )}
            </div>
        </div>
    );
};

// Export Function
export default CardLogo;
