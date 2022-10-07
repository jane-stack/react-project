import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    width: "auto",
    padding: "12px",
    margin: "0 6px 6px",
    background: "pink",
    textDecoration: "none",
    color: "white",
};

export default function NavBar() {
    return (
        <div>
            <NavLink to="/" exact style={linkStyles}>HOME</NavLink>
            <NavLink to="/contacts" exact style={linkStyles}>CONTACTS</NavLink>
            <NavLink to="/createNew" exact style={linkStyles}>CREATE</NavLink>
        </div>
    )
}