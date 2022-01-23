import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import { useHistory } from 'react-router';
import StripeCheckout from 'react-stripe-checkout';


import http from "../services/http"
import configData from "../config/configData.json"
import Footer from "../components/footer/Footer"
import Logo from '../components/logo/Logo'

import "./ShoppingCart.css"
import "./Ordre.css"
import Back from '../components/back/Back';

function Ordre() {
    let history = useHistory()
    let cartItems = useSelector(state => state.cart) 

    const [display , setDisplay] = useState(true)
    const [total, setTotal] = useState(0)
    const [address , setAdress] = useState({
        fullName : "" , 
        phone : "" , 
        address : "" , 
        region : "" ,
        city : "" ,
        zipCode : ""

    })

    useEffect(() => {
        let total = 0 ;
        cartItems.map(elm => {
            total += elm.price * elm.quantity 
        })
        setTotal(total)
        
    }, [cartItems])

    const handleChange = (e) => {
        setAdress({...address , [e.target.name] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(address)
        http.http({
            method : "POST" ,
            url : configData.endpoint + "ordre/addDelevryAddress" ,
            headers : {
                "x-auth-token"  : JSON.parse(localStorage.getItem("token"))
            },
            data : address
        })
        .then(res => {
            console.log("res" , res.data)
            setDisplay(false)
        })
        .catch(err => {
            console.error(err.response);
        })
    }

    const createOrdre = () => {
        http.http({
            method : "POST" , 
            url : configData.endpoint + "ordre/createOrdre"  ,
            headers : {
                "x-auth-token" : JSON.parse(localStorage.getItem("token"))
            } , 
            data : {finalPrice : total}
        })
        .then(res => {
            history.push("/payment")
        })
        .catch(err => console.log(err.response))
    }

    const onToken = (token) => {
        http.post( configData.endpoint + "payment/" , {tokenId : token.id , amount : total * 100})
        .then( () => createOrdre() )
        .catch(err => console.log(err.message))
    }

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
                <div className='order--delivery_info'>
                   { display 
                    ? <form className='delivery--form' onSubmit={(e) => handleSubmit(e)} >
                        <div className='delivery--title'>
                            DELIVERY ADRESS
                        </div>
                        <div>
                            <input type="text" placeholder='Full name' name = 'fullName' onChange={e => handleChange(e)} />
                            <input type="text" placeholder='Phone' name = "phone"  onChange={e => handleChange(e)}/>
                        </div>
                        <div>
                            <input type="text" placeholder='Adress' name = 'address'  onChange={e => handleChange(e)}/>
                            <input type="text" placeholder='Region' name = "region"  onChange={e => handleChange(e)}/>
                        </div>
                        <div>
                            <input type="text" placeholder='City' name = 'city'  onChange={e => handleChange(e)}/>
                            <input type="text" placeholder='Zip code' name = "zipCode" onChange={e => handleChange(e)} />
                        </div>
                        <div className='btn-container'>
                            <button type = "submit" className='btn btn--secondary btn_dim'>
                                Save
                            </button>
                        </div>
                    </form> 
                    : 
                        <div style={{marginTop : "1.5rem"}}>
                            {address.fullName+ ", " + address.phone } <br/> <br/>
                            {address.address } <br/> <br/>
                            {address.city + ", " + address.region + ", " + address.zipCode}
                            <div className='btn-container'>
                            <button onClick={() => setDisplay(true)} className='btn btn--secondary btn_dim'>
                                Change
                            </button>
                            </div>
                         </div>
                                            
                    }
                </div>
                <div className='order--summary'>
                    <h3 className = 'summary--title'>
                        ORDER SUMMARY
                    </h3>
                    <div className='summary--card summary--card_dim'>
                        <div className='coupon'>
                            <input className='coupon--input' type="text" placeholder='Enter a coupon code' name = 'coupon' />
                            <button className='coupon--btn'>
                                Apply
                            </button>
                        </div>                        
                        <div className='summarycard--total'>
                            <div>{cartItems.length} items</div>
                            <div>{total} DH </div>
                        </div>
                        <p className='summary--delivery'>Delivery fees will be calculated at checkout</p>
                        <div className='final_price'>
                            <div>Final price</div>
                            <div>{total + " DH"}</div>
                        </div>
                        <StripeCheckout
                                token={onToken}
                                stripeKey= {configData.stripeKey}
                                currency="USD"
                                amount={total * 100} 
                        >
                            <button className='btn btn--primary' >
                                Make the order
                            </button>
                        </StripeCheckout>
                    </div>
                </div>
            
            </div>
            <Footer/>
        </div>
    )
}

export default Ordre
