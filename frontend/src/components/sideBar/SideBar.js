import React, {useEffect, useState} from 'react'

import "./SideBar.css" ;

function SideBar() {
    const [displayDetails , setDisplayDetails] = useState(
        {
            Category : true ,
            Brand : true ,
            OriginCity : true , 
            Size : true,
            Price : true
        }
    )

    const handleDisplay = (name) => {
        setDisplayDetails({...displayDetails , [name] : !displayDetails[name] })
    }

    return (
        <div className='sideBar' >
            <ul className='ct-ul fa-ul'>
                <li className="ct-item">
                    Category <i onClick={ () =>  handleDisplay("Category") } className="fas fa-minus"></i>
                </li>
                { 
                    displayDetails.Category && 
                    <ul className='ct-item--details'>
                        <li>Fruits</li>
                        <li>Electronics</li>
                        <li>Vegetables</li>
                        <li>Meat & Poultry</li>
                        <li>Dairy</li>
                    </ul>
                }
                <li className="ct-item">
                    Brand <i onClick={ () => handleDisplay("Brand")}  className="fas fa-minus"></i>
                </li>
                { 
                    displayDetails.Brand && 
                    <ul className='ct-item--details'>
                        <li>Apple</li>
                        <li>Samsung</li>
                        <li>Sidi ali</li>
                        <li>Central</li>
                    </ul>
                }
                <li onClick={ () =>  handleDisplay("OriginCity") } className="ct-item">
                        Origin City <i className="fas fa-minus"></i>
                </li>
               { displayDetails.OriginCity && 
                <ul className='ct-item--details'>
                    <li>Agadir</li>
                    <li>Rabat</li>
                    <li>Fes</li>
                    <li>Tanger</li>
                </ul>
               }
                <li className="ct-item" onClick={ () =>  handleDisplay("Size") }  >
                        Size <i className="fas fa-minus"></i>
                </li>
                { displayDetails.Size && 
                    <ul className='ct-item--details'>
                        <li>Size</li>
                    </ul>
                }
                <li className="ct-item" onClick={ () =>  handleDisplay("Price") } >
                        Price <i className="fas fa-minus"></i>
                </li>
                { displayDetails.Price && 
                    <ul className='ct-item--details'>
                        <li>
                            <input onChange={(e) => console.log(e.target.value)} type="range"/>
                        </li>
                    </ul>
                }
            </ul>
        </div>
    )
}

export default SideBar
