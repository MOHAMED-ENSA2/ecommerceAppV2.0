import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {Link} from "react-router-dom"
import Carousel from 'react-elastic-carousel'

import CartItem from '../components/shoopingCart/CartItem'
import Footer from "../components/footer/Footer"
import Card from '../components/card/Card'

import "./ShoppingCart.css"
import Logo from '../components/logo/Logo'
import Back from '../components/back/Back'

function ShoppingCart() {
    let cartItems = useSelector(state => state.cart) 
    let {products} = useSelector(state => state.products) 
    const [total, setTotal] = useState(0)

    useEffect(() => {
        let total = 0 ;
        cartItems.map(elm => {
            total += elm.price * elm.quantity 
        })
        setTotal(total)
        console.log(total)
        
    }, [cartItems])
    
    
    return (
        <div>
            <div className="cart-nav" >
                <Logo/>
                <div className='cart--process'>
                    <span className='checkout--step'>
                        <span className='checkout checkout_step1'></span>
                        <span className='step_name'>Cart</span>
                    </span>
                    <span className='checkout--line line_step1'></span>
                    <span className='checkout--line line_step2'></span>
                    <span className='checkout--step'>
                        <span className='checkout checkout_step2'></span>
                        <span className='step_name'>Ordre</span>
                    </span>
                    <span className='checkout--line line_step2'></span>
                    <span className='checkout--line line_step3'></span>
                    <span className='checkout--step'>
                        <span className='checkout checkout_step3'></span>
                        <span className='step_name'>Payment</span>
                    </span>
                    <span className='checkout--line line_step3'></span>
                    <span className='checkout--line line_step4'></span>
                    <span className='checkout--step'>
                        <span className='checkout checkout_step4'></span>
                        <span className='step_name'>Done</span>
                    </span>
                </div>
            </div>

            <Back/>
            <div className='order'>
                <div className='order--products'>
                    {
                      cartItems.map(elm => {
                          return (
                                <CartItem
                                    id = {elm._id}
                                    image = {elm.image}
                                    quantity = {elm.quantity}
                                    title = {elm.title}
                                    details = {elm.details}
                                    price = {elm.price}
                                    totalPrice = {elm.price * elm.quantity}
                                />
                          )
                      })
                    }
                </div>
                <div className='order--summary'>
                    <h3 className = 'summary--title'>
                        ORDER SUMMARY
                    </h3>
                    <div className='summary--card'>
                        <div className='summarycard--total'>
                            <div>{cartItems.length} items</div>
                            <div>{total} DH </div>
                        </div>
                        <p className='summary--delivery'>Delivery fees will be calculated at checkout</p>
                        <Link to = "/ordre"> 
                            <button className='btn btn--primary'>
                                Process to checkout
                            </button>
                        </Link>
                    </div>
                </div>
            
            </div>
            <div className="order--recomondation" >
                <h3 style = {{textAlign : "center" , marginBottom : "1.7rem"}}>RECOMONDED PRODUCTS</h3>
                <Carousel itemsToShow={window.visualViewport.width > 1024 ? 2 : 1}>

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
                </Carousel>
                </div>
            <Footer/>
        </div>
    )
}

export default ShoppingCart
