// Import React
// Import React DOM
// Import React Router Dom
// Import React Helmet Async
// Import Components
// Import Imgs
// Import Icons
// Import Styles
// Init Function
// Export Function

import React, { Fragment, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

import { ReactComponent as IconInfo } from "../icons/icon-information.svg";
import { ReactComponent as IconFeature } from "../icons/icon-weed.svg";
import { ReactComponent as IconHelp } from "../icons/icon-question.svg";
import { ReactComponent as IconMoon } from "../icons/icon-moon.svg";
import { ReactComponent as IconSunny } from "../icons/icon-sunny.svg";

const NavBarFooter = () => {
    // Get Seed ID
    const { seedID } = useParams();

    // Set Theme Modes
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    // Set useEffect
    useEffect(() => {
        // Button Color Mode
        const ToggleBtn = document.querySelector("[data-theme-active]");
        if (ToggleBtn) {
            ToggleBtn.addEventListener("click", (e) => {
                e.preventDefault();
                if (theme === "light") {
                    setTheme("dark");
                    document.body.classList.add("dark");
                    document.body.classList.remove("light");
                } else {
                    setTheme("light");
                    document.body.classList.add("light");
                    document.body.classList.remove("dark");
                }
            });

            localStorage.setItem("theme", theme);

            // Set HTML Attr
            document.querySelector("html").setAttribute("data-bs-theme", theme);
            document.body.classList.add(theme);

            // Set Btn Attr
            const BtnText = ToggleBtn.getAttribute("data-theme-text-" + theme);

            // Set Text Attr
            ToggleBtn.querySelector(".nav-link-text").innerHTML = BtnText;
        }
    }, [theme]);

    // Set Navbar Links
    const Navbar = [
        {
            path: "/" + (seedID ? seedID : ""),
            label: "Información",
            icon: [<IconInfo />],
        },
        {
            path: "/caracteristica/" + (seedID ? seedID : ""),
            label: "Característica",
            icon: [<IconFeature />],
        },
        {
            path: "/ayuda/" + (seedID ? seedID : ""),
            label: "Ayuda",
            icon: [<IconHelp />],
        },
        {
            path: "/#",
            label: "Modo Oscuro",
            icon: [<IconMoon />, <IconSunny />],
            data: {
                "data-theme-active": theme,
                "data-theme-text-light": "Modo Oscuro",
                "data-theme-text-dark": "Modo Claro",
            },
        },
    ];

    return (
        <nav className="c-navbar c-navbar-menu navbar navbar-expand fixed-bottom bg-body-tertiary">
            <div className="container-md">
                <div className="collapse navbar-collapse justify-content-center" id="navbarMenu">
                    {Navbar && (
                        <ul className="navbar-nav align-items-center justify-content-between gap-4 w-100">
                            {Navbar.map((item, index) => (
                                <li className="nav-item text-center" key={index}>
                                    <NavLink className="nav-link" to={item.path ? item.path : "#"} {...(item.data ? item.data : "")}>
                                        <span className="nav-link-icon">
                                            {item.icon.map((icon, key) => (
                                                <Fragment key={key}>{icon}</Fragment>
                                            ))}
                                        </span>
                                        <span className="nav-link-text d-none d-md-block">{item.label}</span>
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default NavBarFooter;
