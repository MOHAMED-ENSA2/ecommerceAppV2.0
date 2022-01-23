import React from 'react'
// import "PopularSearch.css"
import "./SearchBar.css"


function PopularSearch(props) {

    const showpopSearch = props.showpopSearch
    const popularSearch = ["lenovo" , "dell" , "xps" , "nvidea" , "thinkpadd"]

    return (
        <div>
            <ul
                className = "popularSearch"
                style = {{ color : "#999999" , display : showpopSearch ? "block" : "none" }}
            >
                <div className = "word main-color"> Popular search </div>
                { popularSearch.map( elm  =>  {return(<li>{elm}</li>)}  )}
            </ul>
        </div>
    )
}

export default PopularSearch
