import React from 'react'
import { Link } from 'react-router-dom'
import "./Title.css"

function Title({name, title}) {

    return (
        <div class="promo-title">
                <span className = "promo"> {title.toUpperCase()} </span>
                <span className = "hr"></span>
                <Link to = {name}>
                    <span className="all-promo">all {title}</span>
                </Link>
        </div>
    )
}

export default Title