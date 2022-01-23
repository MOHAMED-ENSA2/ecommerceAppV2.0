const router = require("express").Router()

const auth = require("../middlewares/auth")
const {User} = require("../models/users")
const CartItem = require("../models/cart")
const Ordres = require("../models/ordres")
const Address = require("../models/address")

router.get("/getOrdres" , auth , async (req , res , next ) => {
    try{
        const ordres = await Ordres.find().populate("user").populate("deleveryAdress").populate("cartItems")
        if(!ordres)
            return res.status(404).send("there is no ordres!")
        res.send(ordres)
    }
    catch(ex){
        next(ex)
    }
}) 

router.post("/createOrdre" , auth ,  async(req,res,next) => {
    try {
        const user = req.user.id
        const address = await Address.findOne({user})
        if(!address)
            return res.status(404).send("there is no delivery address for this ordres")

        let cart = await CartItem.find({user})
        if(!cart)
            return res.status(404).send("there is no cart for this user")

        cart = cart.map(item => {
            return item._id
        })
        
        const order = await new Ordre({
                                        user ,
                                        cartItems : cart,
                                        deleveryAdress : address._id, 
                                        payment_status : "processed" 
                                    })
        order.save()
        res.send("ordrer added successfuly!")
    } catch (error) {
        next(error)
    }
})

router.put("/changePayStatus/:id" , async (req,res,next) => {
    try{
        const orderId = req.params.id
        const paymentStatus = req.body.Paymentstatus
        let order = await Ordre.findByIdAndUpdate(orderId , {payment_status : paymentStatus})
        order = await order.save()
        if(!order)
            res.status(404).send("no order with the giving id")
        res.send(order)
    }
    catch(ex){
        next(ex)
    }
})

// add the delivery information 
router.post("/addDelevryAddress" , auth ,  async (req, res, next) => {
    try{
        const userData = req.body 
        userData.user = req.user.id
        const checkExistance = await Address.findOne({ user : req.user.id})
        if(checkExistance){
            await Address.findByIdAndUpdate(checkExistance._id , userData)
            return res.send(checkExistance)
        }
        const address = await new Address(userData)
        address.save()
        res.send(address)
    }
    catch(err){
        next(error)
    }

})

module.exports = router