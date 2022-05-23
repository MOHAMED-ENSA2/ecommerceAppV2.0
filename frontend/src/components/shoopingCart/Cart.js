import React from 'react'
import {useSelector} from "react-redux"
import { Link } from 'react-router-dom'

import "./Cart.css"
function Cart() {
    const cartItems = useSelector(state => state.cart)
    return (
        <Link to = "/cart">
            <div  className = "cart">
                <i class="cart-icon fas fa-shopping-cart fa-sm">
                {
                    cartItems.length > 0 && 
                    <div className = 'cartQuantity'>{cartItems.length}</div> 
                }
                </i>
                <span>Cart</span>
            </div>
        </Link>
    )
}

export default Cart
