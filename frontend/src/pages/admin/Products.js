import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from "react-redux"

import http from '../../services/http'
import configData from "../../config/configData.json"
import {getProducts} from "../../store/products"

import "./Products.css"

function Products() {
    const dispatch = useDispatch()
    const {products} = useSelector(state => state.products)
    const {categories} = useSelector(state => state.listOfCategories)
    const [display , setDisplay] = useState({add  : false , update : false})
    const [productToModify, setproductToModify] = useState({
        title : "" , 
        details : "" , 
        qty : "" , 
        price : "" , 
        unitPrice : "" ,
        isPromotion : "" ,
        categories : []
    })    

    const [isPromotion, setIsPromotion] = useState()

    useEffect( () => {
        setIsPromotion((state) => {
            products.map(elm => {
                let promotion = elm.isPromotion ? true : false
                state  = {...state ,  [elm._id] : promotion}  ;
            })
            return state 
        })
    }, [products])

    const updateIsPromotion = async (id, e) => {
        const value = JSON.parse(e.target.value)
        try{
            await http.put(configData.endpoint + "products/updateProduct/" + id , {isPromotion : value} )
            dispatch(getProducts())
            setIsPromotion({...isPromotion , [id] : value })
        }
        catch(ex){
            console.log(ex.message)
        }  
    }  
    const  handleCategories =  (e) => {   
        const options = e.target.options
        let value = []
        for(let i = 0 ; i < options.length ; i++){
            if(options[i].selected)
                value.push(options[i].value)
        }

        console.log(value)
        setproductToModify({...productToModify , categories : value })

    }

    const  handleUpdate =  (e) => {   
        const value = (e.target.name === "isPromotion" ) ? JSON.parse(e.target.value) : e.target.value
        console.log("value" , value)
        setproductToModify({...productToModify , [e.target.name] : value })
    }

    const handleAddSubmition = async(e) => {
        e.preventDefault()
        try{
            await http.post(configData.endpoint + "products/addProduct" , productToModify )
            dispatch(getProducts())
            setproductToModify({
                title : "" , 
                details : "" , 
                qty : "" , 
                price : "" , 
                unitPrice : "" ,
                isPromotion : "" ,
                categories : []
            })
            setDisplay({...display , add : false })

        }
        catch(ex){
            console.log(ex.message)
        }
    }

    const handleUpdateSubmition = async(e) => {
        e.preventDefault()
        try{
            await http.put(configData.endpoint + "products/updateProduct/" + productToModify._id , productToModify )
            dispatch(getProducts())
            setproductToModify({
                name : "" , 
                email : "" , 
                password : "" ,
                isAdmin : "" , 
                isPromotion : "" , 
                categories : []
            })
            // update isPromotion localy 
            setIsPromotion({...isPromotion , [productToModify._id] : productToModify.isPromotion })
            // back to display all users
            setDisplay({...display , update : false })
        }
        catch(ex){
            console.log(ex.message)
        }  
    }


    // delete a product
    const deleteProduct = async (id) => {
        try{
            await http.delete(configData.endpoint + "products/removeProduct/" + id )
            dispatch(getProducts())
        }
        catch(ex){
            console.log(ex.message)
        }
        
    }

    return (
        <div className='admin--body'>
        { !display.add && !display.update &&
        <div>

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
                        <td>
                        
                            <select className='admin--select' value = {(isPromotion && isPromotion[elm._id]) ? "true" : "false"}  onChange={(e) => updateIsPromotion(elm._id,e) } >
                                <option value="true">true</option>
                                <option value="false">false</option>
                            </select>
                        </td>
                        <td className='admin--product_update'><i onClick={() => {setproductToModify(elm); setDisplay({...display , update : true})}} style={{cursor : "pointer"}} class="fas fa-edit"></i></td>
                        <td ><i style={{cursor : "pointer"}} onClick={() => deleteProduct(elm._id)} class="fas fa-trash-alt"></i></td>
                    </tr>
                )
            })
            }
            </table>
            <div className='btn-container_product'>
                <button onClick = {() => setDisplay({...display , add : true})} className='btn btn--secondary btn--dimentions_prodduct'>
                    New product
                </button>
            </div>
                        
            </div>
            }

            {(display.add || display.update )  &&
              <div className='add_user--container' >
                <form className='add_user'  onSubmit={(e) => {display.update ? handleUpdateSubmition(e) : handleAddSubmition(e)}}>
                    <table>
                        <tr>
                            <td>title </td>
                            <td><input name = "title" type="text" value={productToModify.title} onChange={(e) => handleUpdate(e)}/></td>
                        </tr>
                        <tr>
                            <td>details </td>
                            <td><input name = "details" type="text" value = {productToModify.details}  onChange={(e) => handleUpdate(e)} /> </td>
                        </tr>
                        <tr>
                            <td>unitPrice </td>
                            <td><input name = "unitPrice" type="text" value = {productToModify.unitPrice}   onChange={(e) => handleUpdate(e)}/></td>
                        </tr>
                        <tr>
                            <td>price </td>
                            <td><input name = "price" type="text" value = {productToModify.price}   onChange={(e) => handleUpdate(e)}/></td>
                        </tr>
                        <tr>
                            <td>quantity </td>
                            <td><input name = "qty" type="text" value = {productToModify.qty}   onChange={(e) => handleUpdate(e)}/></td>
                        </tr>
                        <tr>
                            <td>categorie </td>
                            <td>
                                <select 
                                    name = 'categories'
                                    className='admin--select admin--select__dim2' 
                                    value = {productToModify.categories}   
                                    onChange={(e) => handleCategories(e)} 
                                    multiple
                                >
                                    {categories.map((elm,index) => { return (<option key = {index} value={elm._id} >{elm.name}</option>) })}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>isPromotion </td>
                            <td>
                                <select name = "isPromotion" className='admin--select admin--select__dim' value = {productToModify.isPromotion ? "true" : "false"}  onChange={(e) => handleUpdate(e)} >
                                    <option value="true">true</option>
                                    <option value="false">false</option>
                                </select>
                            </td>
                        </tr>
                    </table>

                    <div className='btn-container'><button className='btn btn--secondary btn--dimentions' type='submit'>Submit</button></div>
                    
                </form>
            </div>}
        </div>
    )
}

export default Products
