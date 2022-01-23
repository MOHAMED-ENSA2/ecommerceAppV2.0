import React, {useEffect} from 'react'
import {useHistory} from "react-router"
import { useDispatch } from 'react-redux'

import {CURRENT_USER_REMOVE} from "../store/currentUser"
function Logout() {
    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        dispatch({
            type : CURRENT_USER_REMOVE , 
        })
        history.push("/")
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default Logout
