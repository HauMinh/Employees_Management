import React from 'react';
import {NavLink} from "react-router-dom";


function Header(props) {
    return (
        <header className="header" style={{backgroundColor:'gainsboro'}}>
            <span >
                 đây là header
            </span>
            <NavLink to="/employees">Employee</NavLink>
            <NavLink to="/createemployee">create employee</NavLink>
            <NavLink to="#">register</NavLink>
        </header>
    );
}

export default Header;