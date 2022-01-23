import React, { useState , useEffect } from 'react'
import { Redirect } from 'react-router'
import {useDispatch} from "react-redux"


import Login from '../../components/login/Login'
import { getUsers } from '../../store/users'
import { getOrdres } from '../../store/ordres'
import Users from './Users'
import Products from './Products'
import Ordres from './Ordres'

import "./Admin.css"

function AdminPannel() {
    const [choice , setChoice] = useState("")
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers())
        dispatch(getOrdres())
    } ,[])

    if(!localStorage.getItem("user"))
        return <Login/>
    if(!JSON.parse(localStorage.getItem("user")).isAdmin)
        return <Redirect to="/"/>

    return (
        <div className='admin'>
          <div className='admin--sidebar'>
            <ul>
                <li onClick={() => setChoice("Home")} className='admin-item'><i class="fas fa-home"></i>  <span>  Home </span> </li>
                <li onClick={() => setChoice("Users")} className='admin-item'><i class="fas fa-user"></i> <span>  Users </span></li>
                <li onClick={() => setChoice("Products")} className='admin-item'><i class="fas fa-home"></i> <span> Products  </span> </li>
                <li onClick={() => setChoice("Ordres")} className='admin-item'><i class="fas fa-home"></i> <span>  Ordres </span> </li>
                <li onClick={() => setChoice("Coupons")} className='admin-item'><i class="fas fa-comment-dots"></i> <span>  Coupons </span> </li>
            </ul>    
          </div> 
          {
           choice === "Products"
           ? <Products/>
           : choice === "Users" 
           ? <Users/>
           : choice === "Ordres"
           ? <Ordres/>
           : <Products/> 
          }
              
        </div>
    )
}

export default AdminPannel
