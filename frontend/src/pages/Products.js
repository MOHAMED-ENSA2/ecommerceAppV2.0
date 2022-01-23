import React, {useEffect} from 'react'
import { useSelector ,  useDispatch } from 'react-redux'

import Card from '../components/card/Card'
import Loader from '../components/loader/Loader'
import Navbar from '../components/navBar/Navbar'
import TopNavBar from '../components/navBar/TopNavBar'
import SideBar from '../components/sideBar/SideBar'
import {getProducts} from "../store/products"

import "./pages.css"

function Products() {
    const {loading , products} = useSelector(state => state.products )

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getProducts())
        console.log("products" )
    }, [])

    return (
        <div>
            <TopNavBar/>
            <Navbar/>
            <div className='prodcts'>
                <div className='products-display'>
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

export default Products
