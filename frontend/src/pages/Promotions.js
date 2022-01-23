import React, {useEffect} from 'react'
import { useSelector ,  useDispatch } from 'react-redux'

import Card from '../components/card/Card'
import Loader from '../components/loader/Loader'
import Navbar from '../components/navBar/Navbar'
import TopNavBar from '../components/navBar/TopNavBar'
import SideBar from '../components/sideBar/SideBar'
import { getPromotions } from '../store/promotions'
import "./pages.css"

function Promotions() {
    const {loading , promotions} = useSelector(state => state.promotions )

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getPromotions())
        console.log("promotions" , promotions )
    }, [])

    return (
        <div>
            <TopNavBar/>
            <Navbar/>
            <div className= "prodcts">
                <div className='products-display'>
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
                
                </div>
                <SideBar/>
            </div>
        </div>
    )
}

export default Promotions
