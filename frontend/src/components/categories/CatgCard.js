import React from 'react'
import {useHistory} from "react-router"

import "./CatgCard.css"

function CatgCard(props) {
    const history = useHistory()
    
    const showCategories = (name) => {
        history.push("/categorie/" + name)
    }

    return (
            <img onClick={() => showCategories(props.name)} className = "catgCard" src={props.src} alt=""/>
    )
}

export default CatgCard
