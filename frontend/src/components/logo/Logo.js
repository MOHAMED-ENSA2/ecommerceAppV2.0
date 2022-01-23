import React from 'react'
import {Link} from 'react-router-dom'

import "./Logo.css"

function Logo() {
    return (

    <div className="logo-container">
        <Link to = "/">
                <i class="logo fas fa-shipping-fast fa-2x"></i>
        </Link>
    </div>
    )
}

export default Logo
