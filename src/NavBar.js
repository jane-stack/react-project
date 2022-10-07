import React from "react";
import { NavLink } from "react-router-dom";


export default function NavBar() {
    return (
        <div className="link-styles">
            <h5>HELLO FROM NAVBAR!</h5>
            <NavLink to="/"></NavLink>
        </div>
    )
}