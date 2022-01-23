const router = require("express").Router()
const config = require("config")
const stripe = require("stripe")(config.get("stripeKey"))


router.post("/" , async (req,res,next) => {
    try{
        const stripeRes = await stripe.charges.create({
            source : req.body.tokenId ,
            amount : req.body.amount  , 
            currency : "usd"  
        })

        res.send(stripeRes)
    }
    catch (ex) {
        next(ex)
    }
})

module.exports = router 