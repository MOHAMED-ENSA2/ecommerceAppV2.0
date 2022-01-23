const express = require("express")

const router = express.Router()

const Product = require("../models/products")


router.get("/getPromotions"  , async (req , res) => {
    const promotions =  await Product.find({isPromotion : true})
    if(!promotions) 
        res.status(404).send("there is no promtion")
    res.send(promotions)
})


module.exports = router 

