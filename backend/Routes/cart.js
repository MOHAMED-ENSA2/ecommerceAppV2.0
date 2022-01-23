const express = require("express")
const router =  express.Router()

const auth = require("../middlewares/auth")
const CartItem = require("../models/cart")
const Product = require('../models/products')
const {User} = require("../models/users")

router.get("/getCart" , auth , async (req,res) => {
    const cart = await CartItem.find({user : req.user.id })
    if(!cart)
        return res.status(404).send("there is no cart for this user")
    res.send(cart)
})

router.post('/addCartItem' , auth ,  async (req,res) => {

    const userId = req.user.id
    const {productId , quantity } = req.body

    const user = await User.findById(userId)
    const product = await Product.findById(productId)

    if(!user)
        return res.status(404).send("no user with the giving id")
    
    if(!product)
        return res.status(404).send("no product with the giving id")
    
    const checkExistance = await CartItem.find({user , product})
    if(checkExistance.length >  0 ){
        console.log(checkExistance)
        return res.status(400).send("this item is already exists")
    }

    const cartItem = new CartItem({user , product , quantity })

    cartItem.save()
    res.send(cartItem)

})

router.put('/updateQuantity:id' , auth, async (req,res) => {
    const quantity = req.body.quantity
    const id = req.params.id
    const item = await CartItem.findById(id)
    if(!item) 
        return res.status(400).send("no item with the giving id")
    item.quantity = quantity
    item.save()
    res.send(item)

})

router.delete('/deleteCartItem:id' , auth , async (req,res) => {
    const id = req.params.id  
    const item = await CartItem.deleteOne({_id : id})
    if(!item)
        return res.status(400).send("no cart item with the giving id")
    res.send(item)
})

router.delete('/clearCart' , auth , async (req,res) => {
    const user = req.user 

    const cartItems = await CartItem.deleteMany({user : user}) 
    if(!cartItems)
        return res.status(400).send("no items for this user")
    res.send(cartItems)

})

module.exports = router 