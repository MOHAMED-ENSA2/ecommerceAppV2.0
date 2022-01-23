import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import './Card.css'
import Quantity from './Quantity'

function Card({id , title,details, unitPrice, Image, totalQuantity,price}) {

    return (
        <div className = "card" >
            <Link to = {{pathname : "/product" , state : {id, price,details, title,Image, unitPrice  }}}>
                <div class="prod-details">
                    <div className = "title">
                    {title} 
                    </div>
                    <p className='card-details'>
                    {details}
                    </p>
                    <p className='card-price'>
                    {unitPrice}
                    </p>
                </div>
            </Link>

            <div class="prod-pres">
            <Link to = {{pathname : "/product" , state : {id, price,details, title,Image, unitPrice  }}}>
                <img className = "product_image" src={Image} alt="product image"/>
            </Link>

                <p className = "quantity">
                    {totalQuantity}
                </p>
            </div>
            <div className = "price-cart">
                <div className = "price">
                    {price}
                </div>
                <div>
                    <Quantity id = {id} />
                </div>
            </div>

        </div>
    )
}

export default Card
