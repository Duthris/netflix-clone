import React, { useEffect, useState } from 'react'
import './Nav.css'

export default function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                className="nav__logo"
                src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
                alt="Netflix Logo"
            />

            <img
                className="nav__avatar"
                src="https://i.hizliresim.com/b1ti51x.gif"
                alt="Netflix Avatar"
            />
        </div>
    )
}
