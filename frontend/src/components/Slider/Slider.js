import React from 'react'
import {useSelector} from "react-redux"
import Carousel from 'react-elastic-carousel'

import Card from '../card/Card'
import Title from '../title/Title'
import "./Slider.css"
import Loader from '../loader/Loader'

function Slider(props) {
    

    const screenWith =  window.visualViewport.width
    const itemsToShow = screenWith > 1024 ? 4 : screenWith > 800 ? 3  : screenWith > 600 ? 2 : 1

    const {loading , promotions} = useSelector(state => state.promotions)

    return (
        <div className = "slider-container">
            <Title title = "promotions" name = "/promotions" />
            <Carousel itemsToShow={itemsToShow}>
                {
                    loading && <Loader/>
                }
              {
                  promotions.map((elm) => {
                      return <Card 
                                id = {elm._id}  
                                title = {elm.title} 
                                details = {elm.details}
                                unitPrice = {elm.unitPrice.toString() + "DH"} 
                                Image = {elm.image} 
                                totalQuantity = {elm.qty} 
                                price = {elm.price.toString() + "DH"}       
                             />
                  })
              }  
            </Carousel>

        </div>
    )
}

export default Slider

