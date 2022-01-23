import React, {useEffect} from 'react'
import Quantity from '../card/Quantity'

import "./CartItem.css"

function CartItem({id ,quantity, title , details, price,totalPrice , image}) {

    return (
        <div className = "cartItem">
            <div className = "img-container">
            {
                image != "no image" &&
                <img className= "img" src= {image} alt="product"/>
            }
            </div>

            { details != "no details" &&
                <div className = "details">
                    {details}
                </div>
            }

            
            <div className = "totalPrice">
              <span style = {{color : "blue"}}>Price : </span>  {totalPrice + "DH"} 

            </div>
            <div className = "quantity-container">
            <Quantity  className = "quantity" id ={id} quantity ={quantity} />

            </div>

        </div>
    )
}

export default CartItem
