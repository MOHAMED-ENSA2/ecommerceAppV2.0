import React from 'react'

import './Section.css'

function Section({img , title , details, qualityImg , color}) {
    const bgcolorClass = (color == "a" )? "section__a" : color = "b" ? "section__b"  : "section__a"
    console.log(color , "section " +  bgcolorClass)
    return (
        <div className = {"section " +  bgcolorClass}>
            
            <div className="section--text">
                <h2>
                    {title} 
                </h2>
                <p>
                    {details}
                </p>
                <button>
                    SHOP NOW
                </button>
            </div>

            <div className="section--img">
                <img  src={img} alt=""/>
            </div>
            <div className="section--img img_right">
                <img  src={qualityImg} alt=""/>
            </div>
        
        </div>
    )
}

export default Section
