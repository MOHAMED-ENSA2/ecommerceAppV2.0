import React, {useState, useEffect} from 'react'
import {  useDispatch} from "react-redux"
import { Redirect } from 'react-router';
import {
  Route ,
  Switch , 
} from 'react-router-dom'
import socketIOClient from "socket.io-client";


import './App.css';
import DownNavBar from './components/navBar/DownNavBar';
import Navbar from './components/navBar/Navbar';
import TopNavBar from './components/navBar/TopNavBar';
import Categories from './pages/Categories';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import Logout from './pages/Logout';
import Products from './pages/Products';
import RegisterPage from './pages/RegisterPage';
import ShoppingCart from './pages/ShoppingCart';
import Promotions from './pages/Promotions';
import Search from './pages/Search';
import Product from './pages/Product';
import Chat from './components/chat/Chat';
import AdminPannel from './pages/admin/AdminPannel';
import Ordre from './pages/Ordre';

import {addLsToCart} from "./store/cart"
import { getProducts } from './store/products';
import {getPromotions} from './store/promotions'
import { getListOfCategories } from './store/listOfCategories';
import {getCurrentUser} from "./store/currentUser"
import Payment from './pages/Payment';

const ENDPOINT = "http://localhost:3007/";

function App() {

  const [mediaWidth , setMediaWidth] = useState(window.matchMedia("(min-width: 600px)").matches)
  const dispatch = useDispatch()

    const [socket , setSocket] = useState()

    useEffect(  () => {
      const newsocket =   socketIOClient(ENDPOINT);
      setSocket(newsocket)
      return () => newsocket.close()
    }, []);
  
  useEffect(() => {
      setMediaWidth(window.matchMedia("(min-width: 768px)").matches)

      const cart = localStorage.getItem("cart")
      const token = localStorage.getItem("token")

      if (cart)
        dispatch(addLsToCart(JSON.parse(cart)))

      if (token)
        dispatch(getCurrentUser(JSON.parse(token)))

      dispatch(getProducts())
      dispatch(getPromotions())
      dispatch(getListOfCategories())

  },  []) 
  
  return (
      
      <div className="App">
      
      <Switch>
        <Route exact path = "/">
            <TopNavBar/>
            <div style={{ position : "sticky" , top : "0" , "zIndex" : "1"}} >
                <Navbar mediaWidth = {mediaWidth} />
            </div>
            <DownNavBar/>
          <Home/>
        </Route>
        
        <Route path = "/cart">
          <TopNavBar/>
          <ShoppingCart/>
        </Route>

        <Route path = "/ordre">
        <TopNavBar/>
          <Ordre/>
        </Route>
        
        <Route path = "/payment">
        <TopNavBar/>
          <Payment/>
        </Route>

        <Route path = "/login">
          <LoginPage/>
        </Route>
        <Route path = "/register">
          <RegisterPage/>
        </Route>
        <Route path = "/logout">
            <Logout/>
        </Route>
        <Route path = "/products" >
          <Products/>
        </Route>
        <Route path = "/promotions">
          <Promotions/>
        </Route>
        <Route path= "/search">
          <Search/>
        </Route>
        <Route path= "/product">
          <Product/>
        </Route>
        <Route path= "/chat">
          <Chat socket={socket}/>
        </Route>
        <Route path="/admin">
          <AdminPannel/>
        </Route>
        <Route path = "/categorie/:name">
            <Categories/>
        </Route>

        <Redirect to = "/" />
      </Switch>
      
      </div>
   
  );
}

export default App;
