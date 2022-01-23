import React from 'react'
import Back from '../components/back/Back'
import Logo from '../components/logo/Logo'

import "./Payment.css"

function Payment() {
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
                    <span className='checkout--line line_step1'></span>
                    <span className='checkout--step'>
                        <span className='checkout checkout_step1'></span>
                        <span className='step_name'>Ordre</span>
                    </span>
                    <span className='checkout--line line_step1'></span>
                    <span className='checkout--line line_step1'></span>
                    <span className='checkout--step'>
                        <span className='checkout checkout_step1'></span>
                        <span className='step_name'>Payment</span>
                    </span>
                    <span className='checkout--line line_step1'></span>
                    <span className='checkout--line line_step1'></span>
                    <span className='checkout--step'>
                        <span className='checkout checkout_step1'></span>
                        <span className='step_name'>Done</span>
                    </span>
                </div>           
            </div>
            <Back/>
            <div className='order_done'>
                <Logo/>
                <div className='payment--successfull'>
                    Successfull
                </div>
                <div className='payment--text'>
                    Your order is being prepared. Thanks for choosing ECOMERCE
                </div>
            </div>
        </div>
    )
}


export default Payment
