import React from 'react'
import { Link } from 'react-router-dom'

import "./Menu.css"

function Menu() {
    return (
            <ul className = "menu">
                <Link className='menu-item' to = "/promotions">Promotions</Link>
                <Link className='menu-item' to ='' >Trending</Link>
            </ul>
    )
}

export default Menu
