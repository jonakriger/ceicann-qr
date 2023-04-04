// Import React
import React, { Fragment } from "react";

// Import Icons
import { ReactComponent as IconSeedType } from "../../icons/icon-seed-type.svg";
import { ReactComponent as IconSeedVariety } from "../../icons/icon-seed-variety.svg";
import { ReactComponent as IconSeedBloom } from "../../icons/icon-seed-bloom.svg";
import { ReactComponent as IconSeedHeight } from "../../icons/icon-seed-height.svg";
import { ReactComponent as IconSeedHardest } from "../../icons/icon-seed-harvest.svg";
import { ReactComponent as IconSeedZones } from "../../icons/icon-seed-zones.svg";
import { ReactComponent as IconSeedUses } from "../../icons/icon-seed-uses.svg";

// Init Function
export function CardImg({ seedImg }) {
    if (!seedImg) return null;

    return (
        <div className="card-img">
            <div className="ratio ratio-1x1">
                <img className="img-cover" src={seedImg.source_url} alt={seedImg.alt_text} />
            </div>
        </div>
    );
}

export function CardTitle({ seedName }) {
    if (!seedName) return null;

    return (
        <h2 className="card-title fw-medium text-center text-md-start">
            Características de la Variedad Genetica <strong className="text-primary fw-bold">{seedName}</strong>
        </h2>
    );
}

export function CardSubtitle({ seedSubtitle }) {
    if (!seedSubtitle) return null;

    return (
        <h3 className="card-subtitle d-flex align-items-baseline justify-content-center justify-content-md-start gap-2 fw-normal text-center mt-0">
            {Object.entries(seedSubtitle).map(([name, level], key) => (
                <Fragment key={key}>
                    {key !== 0 && <span className="d-flex align-items-baseline gap-1">&#8212;</span>}
                    <span className="d-flex align-items-baseline gap-1">
                        {name.toUpperCase()}: <span className="text-body fw-semibold">{level ? level : "--%"}</span>
                    </span>
                </Fragment>
            ))}
        </h3>
    );
}

export function CardText({ SeedText }) {
    if (!SeedText) return null;

    return <p className="card-text text-center text-md-start" dangerouslySetInnerHTML={{ __html: SeedText }} />;
}

export function CardListIcon({ IconType }) {
    if (!IconType) return null;

    const Icon = () => {
        if (IconType === "type") {
            return <IconSeedType />;
        } else if (IconType === "variety") {
            return <IconSeedVariety />;
        } else if (IconType === "bloom") {
            return <IconSeedBloom />;
        } else if (IconType === "height") {
            return <IconSeedHeight />;
        } else if (IconType === "hardest") {
            return <IconSeedHardest />;
        } else if (IconType === "zones") {
            return <IconSeedZones />;
        } else if (IconType === "uses") {
            return <IconSeedUses />;
        } else {
            return null;
        }
    };

    return <div className="list-group-item-icon flex-shrink-0 d-flex align-items-center justify-content-center">{Icon()}</div>;
}

export function CardListGroup({ SeedFeature }) {
    if (!SeedFeature) return null;

    return (
        <ul className="list-group list-group-card list-group-horizontal-md flex-wrap">
            {SeedFeature.map((item, key) => (
                <li className="list-group-item col-12 col-md-6 d-flex align-items--start gap-2 border-0" key={key}>
                    <CardListIcon IconType={item.slug} />
                    <div class="d-flex flex-column pe-md-5">
                        {item.label && <h6 className="list-group-item-label" dangerouslySetInnerHTML={{ __html: item.label }} />}
                        {item.title && <h4 className="list-group-item-title" dangerouslySetInnerHTML={{ __html: item.title }} />}
                        {item.content && <p className="list-group-item-desc" dangerouslySetInnerHTML={{ __html: item.content }} />}
                    </div>
                </li>
            ))}
        </ul>
    );
}
