import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from "react-redux"

import http from '../../services/http'
import configData from "../../config/configData.json"
import {getOrdres} from "../../store/ordres"

import "./Products.css"

function Ordres() {
    const dispatch = useDispatch()
    const {ordres} = useSelector(state => state.ordres)
    // const [display , setDisplay] = useState({add  : false , update : false})

    return (
        <div className='admin--body'>
     
        <table className='admin--table'>
            <tr>
                <th>Id</th>
                <th>Client</th>
                <th>Email</th>
                <th>Delivery address</th>
                <th>Products</th>
                <th>Final price</th>
                <th>placed at</th>
                <th>payment status</th>
                <th>Delete</th>
            </tr>
            {
            ordres.map(elm => {
                return (
                    <tr>
                        <td>{elm._id}</td>
                        {/* <td className='admin--product_image'  >
                            <img src={elm.image} alt="product image"/>                                 
                        </td> */}
                        <td>{elm.user.name}</td>
                        <td>{elm.user.email}</td>
                        <td>{elm.deleveryAdress.address}</td>
                        <td>
                            x
                        </td>
                        <td>
                            {elm.finalPrice}
                        </td>
                        <td>
                            {elm.placed_at}
                        </td>
                        <td>
                            {elm.payment_status}
                        </td>
                        <td ><i style={{cursor : "pointer"}}  class="fas fa-trash-alt"></i></td>
                    </tr>
                )
            })
            }
        </table>           
        </div>
    )
}

export default Ordres
