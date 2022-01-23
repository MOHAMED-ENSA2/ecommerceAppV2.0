import React from 'react'

import "./Table.css"

function Table({products}) {
    return (
        <div className='admin--body'>
            <table className='admin--table'>
            <tr>

                <th>Id</th>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Promotion</th>
                <th>Update</th>
                <th>Delete</th>
            </tr>
            {
                products.map(elm => {
                    return (
                        <tr>
                            <td>{elm._id}</td>
                            <td className='admin--product_image'  >
                                <img src={elm.image} alt="product image"/>                                 
                            </td>
                            <td>{elm.title}</td>
                            <td>{elm.price + " DH"}</td>
                            <td>{elm.qty}</td>
                            <td>{elm.isPromotion && "oui"}</td>
                            <td className='admin--product_update'><i class="fas fa-edit"></i></td>
                            <td ><i class="fas fa-trash-alt"></i></td>
                        </tr>
                    )
                })
            }
            </table>
        </div>
    )
}

export default Table
