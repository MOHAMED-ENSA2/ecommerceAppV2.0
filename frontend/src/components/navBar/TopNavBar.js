import React from 'react'
import "./TopNavBar.css"

function TopNavBar() {
    return (
        <div className = "topNavBar-container">
            <div className = "topNavBar-left">
                <div>
                Free shipping
                </div> 
                <div>
                Free return
                </div> 
            </div>
            <div className = "topNavBar-right" >
                <div>
                Contact
                </div>
                <div>
                <i class="fas fa-phone"></i> 0762357814
                </div>
            </div>
        </div>
    )
}

export default TopNavBar
