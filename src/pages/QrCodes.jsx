import { QRCodeCanvas, QRCodeSVG } from "qrcode.react";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import canvasToImage from "canvas-to-image";

export default function QrCodes() {
    // Get Data Root
    const { dataSeed } = useLoaderData();

    return (
        <main className="c-main c-main-qrcodes pt-0" role="main">
            <section className="c-section c-section-qrcodes">
                <div className="c-section-title block-wide bg-primary pt-6 pb-5 px-0 mb-6 border-5 border-bottom border-success">
                    <div className="container-md">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="text-light fw-bolder m-0 text-center">Codigos QR</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="c-section-cards block-wide">
                    <div className="container-md">
                        <div className="row row-cols-1 row-cols-md-3 justify-content-center">{dataSeed && dataSeed.map((seed, index) => <SeedQr {...seed} key={index} />)}</div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export function SeedQr({ ...seed }) {
    // Set Location
    const CurrentLocation = window.location.origin;

    // Get Current Path
    const SeedPath = "/caracteristica/" + seed.id;

    // Set Path ID
    const PathID = "qr-" + seed.id;

    // Set Link To
    const LinkTo = SeedPath;

    // Set Link Title
    const LinkTitle = "Visita la pagina de " + seed.name;

    // Set Link Target
    const LinkTarget = "_blank";

    // Set Link rel
    const LinkRel = "noopener noreferrer";

    // Set Link Label
    const LinkLabel = CurrentLocation + SeedPath;

    // Download Canvas
    const handleDownload = async () => {
        canvasToImage(PathID, {
            name: "qr-" + seed.id,
            type: "png",
            quality: 1,
        });
    };

    return (
        <div className="col">
            <div className="card card-qr">
                <div className="card-header fs-6 fw-bold text-center">{seed.name}</div>
                <div className="card-img card-img-svg d-block">
                    <div className="ratio ratio-1x1">
                        <QRCodeSVG className="img-fluid img-svg" value={CurrentLocation + SeedPath} size={512} bgColor={"#453490"} fgColor={"#00ab6c"} level={"L"} includeMargin={true} />
                    </div>
                </div>
                <div className="card-body d-flex flex-column gap-2">
                    <p className="card-text card-text-id d-flex flex-column align-items-center text-center lg-sm m-0">
                        <span className="card-label small text-uppercase letter-spacing-4">ID variedad:</span>
                        <span className="card-value fw-medium">{seed.id}</span>
                    </p>
                    <p className="card-text card-text-guid d-flex flex-column align-items-center text-center lg-sm m-0">
                        <span className="card-label small text-uppercase letter-spacing-4">Enlace Variedad:</span>
                        <Link className="card-link fw-medium text-center text-decoration-none" to={LinkTo} title={LinkTitle} target={LinkTarget} rel={LinkRel}>
                            {LinkLabel}
                        </Link>
                    </p>
                    <p className="card-text card-text-btn d-flex flex-column align-items-center text-center lg-sm m-0 mt-2">
                        <button className="btn btn-sm btn-primary rounded-pill fw-medium" onClick={handleDownload}>
                            Descargar Imagen
                        </button>
                    </p>
                </div>
                <div className="card-img card-img-canvas invisible d-none">
                    <div className="ratio ratio-1x1">
                        <QRCodeCanvas className="img-fluid img-canvas" id={PathID} value={CurrentLocation + SeedPath} size={512} bgColor={"#ffffff"} fgColor={"#000000"} level={"L"} includeMargin={true} />
                    </div>
                </div>
            </div>
        </div>
    );
}
