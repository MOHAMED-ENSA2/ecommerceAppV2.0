import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import SearchBar from '../searchBar/SearchBar'

import "./DownNavBar.css"

function DownNavBar() {

    const [showSideBar , setShowSideBar]  = useState(false)
    const categories = [
        "Fruits",
        "Electronics",
        "Dairy",
        "Vegetables",
        "Meat&Poultry",
        "Oil&Ghee",
        "Herbs&Spices"
    ]
    

    return (
        <div>
            <div className = "downNavBar-container">
                <div className='downNavBar--ctg'>
                    <span className='line-container' onClick={() => setShowSideBar(!showSideBar)}>
                        <div class={!showSideBar ? "line" : "line line-1-active"}></div>
                        <div class={!showSideBar ? "line" : "line line-2-active"}></div>
                        <div class={!showSideBar ? "line" : "line line-3-active"}></div>
                    </span>
                    <span className='downNavBar--title' onClick={() => setShowSideBar(!showSideBar)} >Categories</span>
                
                    <div className={!showSideBar ? "sideBar-ctg" : "sideBar-ctg sideBar-ctg-show"}>
                        <ul className='fa-ul'>
                            { 
                                categories.map(elm => { return (
                                    <Link to = {"/categorie/" + elm}>
                                        <li className="sc-item">
                                            <span><i className="fas fa-carrot"></i> {elm}</span> <i className="fas fa-arrow-right"></i> 
                                        </li>
                                    </Link>
                                )
                                })
                            }

                        </ul>
                    </div>
                </div>
                <Link className='downNavBar--item' to = '/categorie/Electronics'>
                    Electronics
                </Link>
                <Link className='downNavBar--item' to = '/categorie/Foods'>
                    Foods
                </Link>
                <Link className='downNavBar--item' to = '/categorie/Fruits'>
                    Fruits
                </Link>
                <Link className='downNavBar--item' to = "/categorie/Vegetables" >
                    Vegetables
                </Link>
                <Link className='downNavBar--item' to ='/categorie/Meat&Poultry' >
                    Meat & Poultry
                </Link>
            </div>
            <div className="downNavBar--searchBar"><SearchBar/></div>
        </div>
    )
}

export default DownNavBar
