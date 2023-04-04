// Import React
import React from "react";

// Import React Router Dom
import { Link } from "react-router-dom";

// Import Icons
import { ReactComponent as IconArrowRight } from "../../icons/icon-arrow-right.svg";

// Init Function
export function ListTitle({ title }) {
    if (!title) return null;
    return <h4 className="c-section-heading" dangerouslySetInnerHTML={{ __html: title }} />;
}

export function ListContent({ content }) {
    if (!content) return null;
    return <div className="c-section-content" dangerouslySetInnerHTML={{ __html: content }} />;
}

export function ListLink(list) {
    if (!list) return null;
    return (
        <ul class="list-group list-group-links">
            {list.list.map((item, key) => (
                <li class="list-group-item d-flex align-items-start gap-2" key={key}>
                    <div className="list-group-item-icon flex-shrink-0 d-flex align-items-center justify-content-center text-primary opacity-75">
                        <IconArrowRight />
                    </div>
                    <div className="d-flex flex-column align-items-start gap-1">
                        {item.url && (
                            <Link className={"btn btn-link"} to={item.url} title={item.title ? item.title : "ir a: " + item.label} target={item.target ? item.target : "_blank"} rel={item.rel ? item.rel : "noopener noreferrer"}>
                                {item.label}
                            </Link>
                        )}
                        {item.desc && <p className="list-group-item-desc" dangerouslySetInnerHTML={{ __html: item.desc }} />}
                    </div>
                </li>
            ))}
        </ul>
    );
}

export function GetAuthors({ authors }) {
    if (authors.length <= 2) {
        return authors.join(" y ") + ".";
    } else {
        const lastAuthor = authors.pop();
        return authors.join(", ") + " y " + lastAuthor + ".";
    }
}

export function ListText({ list }) {
    if (!list) return null;
    return (
        <ol class="list-group list-group-numbered list-group-text">
            {list.map((item, key) => (
                <li class="list-group-item d-flex align-items-baseline" key={key}>
                    <small>
                        <strong className="fw-semibold">"{item.title}".</strong>
                        <span className="text-muted fw-semibold">({item.year})</span>
                        <br />
                        <em className="fs-italic">
                            <GetAuthors authors={item.authors} />
                        </em>
                    </small>
                </li>
            ))}
        </ol>
    );
}
