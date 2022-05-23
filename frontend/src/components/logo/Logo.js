import React from 'react'
import {Link} from 'react-router-dom'

import "./Logo.css"

function Logo() {
    return (

        <Link className="logo-container" to = "/">
                <i class="logo fas fa-shipping-fast  fa-lg"></i>
                <span className='logo--text' >ECOM</span> 
        </Link>
    )
}

export default Logo
