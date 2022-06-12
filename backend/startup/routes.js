const express = require("express")
const cors = require("cors")
const path = require("path")

const error = require("../middlewares/error")
const usersRouter = require('../Routes/users')
const authRouter = require('../Routes/auth')
const promoRouter = require('../Routes/promotions')
const productsRouter = require('../Routes/products')
const categoriesRouter = require('../Routes/categories')
const cartRouter = require("../Routes/cart")
const ordreRouter = require("../Routes/ordre")
const paymentRouter = require("../Routes/payment")

module.exports = function(app){
    
    app.use(express.json())
    app.use(cors())
    app.use( "/api/users" , usersRouter)
    app.use( "/api/auth" , authRouter)
    app.use( "/api/products" , productsRouter)
    app.use( "/api/promotions" , promoRouter)
    app.use( "/api/categories" , categoriesRouter)
    app.use('/api/cart' , cartRouter)
    app.use("/api/ordre" , ordreRouter)
    app.use("/api/payment" , paymentRouter)
    
    app.use(error)
    
    // if(process.env.NODE_ENV === "production") {   
    //     app.use(express.static("frontend/build"))

    //     app.get("/*", (req,res) => {
    //         res.sendFile(path.resolve( __dirname , "../" , "frontend" , "build" , "index.html"))
    //     })
    // }
}