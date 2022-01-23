import React,{useState} from 'react'
import {useLocation} from 'react-router'
import { useSelector } from 'react-redux'

import Quantity from '../components/card/Quantity'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navBar/Navbar'
import TopNavBar from '../components/navBar/TopNavBar'

import "./Product.css"
import Card from '../components/card/Card'
import Carousel from 'react-elastic-carousel'

function Product() {
    const location  = useLocation()
    const products = useSelector(state => state.products.products)

    const {id , title,details, unitPrice, Image ,price} =  location.state
    window.scrollTo(0, 0);


    return (
        <div class="product-container">
                <TopNavBar/>
                <Navbar/>
            <div className='product'>
                <div class="product--img">
                    <img src= {Image} alt="" />
                </div>
                <div class= "product--text">
                    <div>
                        <mark className='product--promotion'>
                            Promotion
                        </mark>
                    </div>
                    <p className='product--title'>
                        {title}
                    </p>
                    <p className='product--details'>
                    {details}
                    </p>
                    <div className='product--card'>
                        <div class="product--prices">
                            <mark className='product--price'>{price}</mark>
                            <p className='product--unitprice'>{unitPrice + " /unit"}</p>
                        </div>
                        <Quantity className = 'product--quantity' id = {id} />
                    </div>
                    <p className='product-delivery'>
                    FREE DELIVERY for orders above 1000 DH
                    </p>

                </div>

                <div className='lg-details'>
                    <h3 className='lg-details--title'>DESCRIPTION</h3>
                    <p className='lg-details--p'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia odio accusamus numquam officiis. Quis reprehenderit, et mollitia molestiae omnis ex atque, illo sequi assumenda magni totam ab obcaecati, repudiandae dolor.
                    Facilis soluta impedit corrupti ipsa ducimus ut saepe autem labore doloremque natus veritatis consequatur velit vero eaque sint laboriosam ad quasi accusantium alias officia, quas necessitatibus. Sapiente iste architecto reiciendis!
                    </p>
                    <h3 className='lg-details--title'>DESCRIPTION</h3>
                    <p className='lg-details--p' >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia odio accusamus numquam officiis. Quis reprehenderit, et mollitia molestiae omnis ex atque, illo sequi assumenda magni totam ab obcaecati, repudiandae dolor.
                    Facilis soluta impedit corrupti ipsa ducimus ut saepe autem labore doloremque natus veritatis consequatur velit vero eaque sint laboriosam ad quasi accusantium alias officia, quas necessitatibus. Sapiente iste architecto reiciendis!
                    </p>
                    <h3 className='lg-details--title'>RECOMONDED PRODUCTS</h3>
                    <Carousel className="product--recomnadations" itemsToShow={window.visualViewport.width > 1024 ? 2 : 1}>

                        {
                          products.map((elm) => {
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

                    <h3 className='lg-details--title'>DESCRIPTION</h3>
                    <p className='lg-details--p' >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia odio accusamus numquam officiis. Quis reprehenderit, et mollitia molestiae omnis ex atque, illo sequi assumenda magni totam ab obcaecati, repudiandae dolor.
                    Facilis soluta impedit corrupti ipsa ducimus ut saepe autem labore doloremque natus veritatis consequatur velit vero eaque sint laboriosam ad quasi accusantium alias officia, quas necessitatibus. Sapiente iste architecto reiciendis!
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Product
