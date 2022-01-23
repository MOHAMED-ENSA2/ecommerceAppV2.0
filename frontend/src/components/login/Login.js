import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import {Link} from "react-router-dom"
import { useHistory } from 'react-router'
import decode from "jwt-decode"

import  configData from "../../config/configData.json" 
import http from "../../services/http"
import Logo from '../logo/Logo'
import {CURRENT_USER_REQUEST_SUCCESS} from  "../../store/currentUser"
import './Login.css'
import Back from '../back/Back'

function Login() {
    const dispatch = useDispatch()
    const history = useHistory()
    const [loginData, setLoginData] = useState({}) 

    const handleChange = (e) => {
        setLoginData({...loginData , [e.target.name]  : e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        http.post(configData.endpoint + "auth/login" , loginData)
        .then(response => {
            const user = decode(response.data)
            localStorage.setItem("user" , JSON.stringify(user))
            localStorage.setItem("token" , JSON.stringify(response.data))
            dispatch({
                type : CURRENT_USER_REQUEST_SUCCESS , 
                payload : {
                    user : user
                }
            })
        })
        .then(() => history.push("/") )
        .catch(error => {
           console.log(error)
        })
    }

    return (
        <div>
            <Back/>
            <div className='login-container'>
                <div class="login">
                    <Logo/>
                    <h2 className='login--title'>
                        Login to your account
                    </h2>
                    <form className='login--form' onSubmit={(e) => handleSubmit(e)} >
                        <input className='login--email' type="text" placeholder='Email address' name = 'email' onChange={handleChange}/>
                        <input className='login--password' type="text" placeholder='Password' name = "password" onChange={handleChange}/>
                        <button type = "submit" class="btn btn--primary">
                            SIGN IN
                        </button>
                        <div className='login--text'>
                            <hr/>
                            <span>Don't have an accout </span>
                            <hr/>
                        </div>
                        <Link to = "/register">
                            <button className='btn btn--secondary'>
                                REGISTER
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
