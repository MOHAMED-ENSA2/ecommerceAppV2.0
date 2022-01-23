import React from 'react'
import { useSelector } from 'react-redux'

import Card from '../components/card/Card'
import Loader from '../components/loader/Loader'
import Navbar from '../components/navBar/Navbar'
import SideBar from '../components/sideBar/SideBar'

import "./pages.css"

function Search() {
    const {loading , products} = useSelector(state => state.search)

    return (
        <div>
            <Navbar />
            <div className='prodcts' >
                <div className="products-display" >
                    {
                        loading && <Loader/>
                    }
                    {
                        products.map((elm) => {
                            return <Card
                                    id = {elm._id}
                                    title = {elm.title}
                                    details = {elm.details}
                                    unitPrice = {elm.unitPrice.toString() + "DH"}
                                    Image = {elm.image}
                                    totalQuantity = {elm.qty}
                                    price = {elm.price.toString() + "DH"}
                                    />
                        })
                    }
                </div>
                <SideBar/>
            </div>
        </div>
    )
}

export default Search
