import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

import "./AcountIcon.css"

function AcountIcon() {

    const [isAuthentificated, setIsAuthentificated] = useState(false)

    useEffect(() => {
        const user = localStorage.getItem("user") 
        if (user)
            setIsAuthentificated(true)
    }, [])

    return (
    
        <div>
                {!isAuthentificated 
                ?   <Link  className = "acount" to = '/login'>
                        <i className="acountIcon fas fa-user fa-lg"></i>  
                        <span className='acount-text' >Login & register</span>
                    </Link>
                :   <Link  className = "acount" to = '/logout'>
                        <i className="acountIcon fas fa-user fa-lg"></i>  
                        <span className='acount-text' >Logout</span>
                    </Link>
                }        
        </div>
    )
}

export default AcountIcon
