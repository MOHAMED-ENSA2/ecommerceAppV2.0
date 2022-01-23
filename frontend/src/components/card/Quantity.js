import React, {useState, useEffect} from 'react'
import {useSelector , useDispatch} from 'react-redux'
import * as actions from "../../store/cart"
import "./Quantity.css"

function Quantity({id}) {
    const [cartAction , setCartAction ] = useState(false)
    const dispatch = useDispatch()
    let cart  = useSelector(state => state.cart ) 
    let quantity = cart.filter(elm => elm._id == id)[0]
                 ? cart.filter(elm => elm._id == id)[0].quantity
                 : 0
    useEffect(() => {
        console.log("cart : " , cart) 
    }, [])

    const addToCart = (id) => {
        dispatch(actions.addToCart(id))   
    }
    const removeFromCart = (id) => {
        dispatch(actions.removeFromCart(id))
    }   
    const changeQuantity = (id , Quantity) => {
        dispatch(actions.changeQuantity(id, Quantity))
    }

    return (
        
        <div className = "quantity-component">

            {
                cartAction || quantity >= 1 ? 
                <>
                {
                     quantity > 1
                    ? <i onClick = {() => {changeQuantity(id, quantity - 1)}} class="add-cart fas fa-minus-square fa-lg"></i>
                    : <i onClick = {() => {changeQuantity(id,0);setCartAction(false) ;  removeFromCart(id)}} class="add-cart fas fa-trash-alt fa-lg"></i>
                }
                <span style = {{marginLeft : ".5rem"}} onClick = {() => console.log("quantity" , quantity)} >{quantity}</span>
                <i onClick = {() => { changeQuantity(id, quantity + 1)}} style = {{marginLeft : "1.5rem"}} class="add-cart fas fa-plus-square fa-lg"></i>
                </>
                : 
                <i onClick = {() => {setCartAction(true);  addToCart(id) }} class="add-cart fas fa-shopping-cart fa-lg"></i>
               
            }
        </div>
    )
}

export default Quantity
