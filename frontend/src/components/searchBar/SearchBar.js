import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import {useHistory} from 'react-router'

import {search} from "../../store/search"
import "./SearchBar.css"


function SearchBar() {
    const history = useHistory()
    const dispatch = useDispatch()
    const [searchValue , setSearchValue] = useState()

    const submitSearch = (e) => {
        e.preventDefault()
        dispatch(search(searchValue))
        history.push("/search")
    }

    return (
        
        <form className = "search" onSubmit={e => submitSearch(e)} >

                <input
                    className = "searchInput"
                    type="text"
                    placeholder= "Search for a product..."
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <button
                    type="submit"
                    className = "searchBtn"
                    value= "search"
                >
                    <i class="fas fa-search"></i>
                </button>
        
        </form>
    )
}

export default SearchBar
