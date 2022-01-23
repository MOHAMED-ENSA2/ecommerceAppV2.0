import React from 'react'

import "./SubCatgCard.css"

function SubCatgCard(props) {
    return (
        <div className = {props.type == "b" ? "SubCatgCard-b" : "SubCatgCard-a"} >
            <div className="catg-text">{props.text}</div>
            <img className="catg-img" src={ props.src} alt=""/>
        </div>
    )
}
    
export default SubCatgCard
