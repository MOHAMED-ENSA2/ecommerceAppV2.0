import React from 'react'

import Cart from '../shoopingCart/Cart';
import SearchBar from "../searchBar/SearchBar"
import AcountIcon from '../login/AcountIcon';
import Menu from '../menu/Menu';
import Logo from '../logo/Logo';
import "./Navbar.css"

function Navbar() {

    return (
        <div className = "navbar">
            <Logo/>
            <div className="navbar--searchBar"><SearchBar/></div>
            <div className="navBar-menu"><Menu/></div>
            <div className="navBar--acountIcon"><AcountIcon/></div>
            <div className="navBar--cart"><Cart/></div>
        </div>
    )
}

export default Navbar
