import React from "react";
import { NavLink } from "react-router-dom";

import './styles.scss';

const NavBar = () => {
    return (
      <section className="navigator">  
        <nav className="nav">
            <NavLink to="/" className="navLink">Home</NavLink>
            <NavLink to="/uebermich" className="navLink">Über mich</NavLink>
            <NavLink to="/beratung_privat" className="navLink">Beratung Privat</NavLink>
            <NavLink to="/beratung_beruf" className="navLink">Beratung Beruf</NavLink>
            <NavLink to="/kontakt" className="navLink">Kontakt</NavLink>
            <NavLink to="/anfahrt" className="navLink">Anfahrt</NavLink>
            <NavLink to="/impressum" className="navLink">Impressum / Datenschutz</NavLink>
        </nav>
       </section>
    )
}

export default NavBar;