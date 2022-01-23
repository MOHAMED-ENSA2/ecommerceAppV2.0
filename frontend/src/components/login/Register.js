import React, {useState} from 'react'
import {Link} from "react-router-dom"
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'
import decode from "jwt-decode"

import Logo from '../logo/Logo'
import configData from "../../config/configData.json" 
import http from "../../services/http"
import {CURRENT_USER_REQUEST_SUCCESS} from "../../store/currentUser"

import './Login.css'
import Back from '../back/Back'

function Register() {
    const dispatch = useDispatch()
    const history = useHistory()
    const [registrationData, setRegistrationData] = useState({}) 

    const handleChange = (e) => {
        setRegistrationData({...registrationData , [e.target.name]  : e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        
        http.post(configData.endpoint + "users/register" , {...registrationData , isAdmin : false})
        .then(response => {
            const user = decode(response.data)
            localStorage.setItem("user" , JSON.stringify(user))
            localStorage.setItem("token" , JSON.stringify(response.data))
            // register the current user
            dispatch({
                type : CURRENT_USER_REQUEST_SUCCESS , 
                payload : {
                    user : user
                }
            })
        })
        .then( () => history.push("/"))
        .catch(error => {
            console.log(error.message)
        })
    }
    
    return (
        <div>
            <Back/>
            <div className='login-container'>
            <div class="login">
                <Logo/>
                <h2 className='login--title'>
                    Register a new account
                </h2>
                <form className='login--form' onSubmit={(e) => handleSubmit(e)} >
                    <input  type="text" placeholder='Full name'  name = "name" onChange={e => handleChange(e)}/>
                    <input  type="text" placeholder='Email address' name ="email" onChange={e => handleChange(e)}/>
                    <input  type="text" placeholder='Password' name ="password" onChange={e => handleChange(e)}/>
                    <input  type="text" placeholder='Confirm password'/>
            
                    <button type ='submit' className='btn btn--primary'>
                        REGISTER
                    </button>
                    <div className='login--text'>
                        <hr/>
                        <span> already have an acount ? </span>
                        <hr/>
                    </div>
                    <Link to = "/login">
                        <button class="btn btn--secondary">
                            SIGN IN
                        </button>
                    </Link>
                </form>
            </div>
                </div>
        </div>
    )
}

export default Register
