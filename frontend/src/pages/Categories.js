import React, {useEffect, useState} from 'react'
import { useSelector ,  useDispatch } from 'react-redux'
import { useParams } from 'react-router'

import Card from '../components/card/Card'
import Loader from '../components/loader/Loader'
import Navbar from '../components/navBar/Navbar'
import TopNavBar from '../components/navBar/TopNavBar'
import SideBar from '../components/sideBar/SideBar'
import {getCategories} from "../store/categories"
import "./pages.css"

function Categories() {
    const {loading , products} = useSelector(state => state.categories)
    const dispatch = useDispatch()
    const {name} = useParams()

    useEffect(() => {
        dispatch(getCategories(name))
    }, [])

    return (
        <div>
            <TopNavBar/>
            <Navbar/>
            <div className='categoriesPage'>
                <div className='categories--display'>
                {
                    loading && <Loader/>
                }
                {
                    products && products.map((elm) => {
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

export default Categories
