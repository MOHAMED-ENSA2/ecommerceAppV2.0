import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import "./AcountIcon.css"

function AcountIcon() {
    const {user} = useSelector(state => state.currentUser)
    const [isAuthentificated, setIsAuthentificated] = useState(false)

    useEffect(() => {
        const user = localStorage.getItem("user") 
        if (user)
            setIsAuthentificated(true)
    }, [])

    return (
        <div className='acount'>
            <Link  className = {(user && user.isAdmin) ?  "AcountIcon AcountIcon_logout" : "AcountIcon" } to = {isAuthentificated ? '/logout' : '/login' } >
                <i className="acountIcon fas fa-user fa-sm"></i>
                {
                    !isAuthentificated 
                    ? <span className='acount-text' >SIN IN</span>
                    : <span className='acount-text' >LOGOUT</span>
                }  
            </Link>
            {
                user && user.isAdmin &&  
                <Link  className = "AcountIcon AcountIcon_admin" to = "/admin" >
                    <span className='acount-text acount-text_admin' >ADMIN BOARD</span>
                </Link>
            }
        </div>

    )
}

export default AcountIcon
