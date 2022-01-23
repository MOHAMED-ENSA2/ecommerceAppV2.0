const express = require("express")
const router = express.Router() 

const auth = require("../middlewares/auth")
const isAdmin = require("../middlewares/isAdmin")
const Categorie = require("../models/categories")
const Product = require("../models/products")


router.get("/getProducts" , async(req, res, next) => {
    const products = await Product.find() 
    if(!products) 
        res.status(404).send("there is no products in the db")
    res.send(products)
})

router.get("/getProduct/:id" , async (req, res) => {
    const id = req.params.id

    const product = await Product.findById(id)
    if(!product) 
        return res.status(400).send("no product with the giving id")
    return res.send(product) 
})

router.get("/search" , async (req, res) => {
    const searchValue = req.query.value
    const resultOfSearch = await Product.find().or([{title : new RegExp(`.*${searchValue}.*` , "i")} , {details : new RegExp(`.*${searchValue}.*`, "i")} ])

    if(!resultOfSearch)
        return res.status(400).send("no result for this input")
    res.send(resultOfSearch)
})

router.post("/addProduct" , async (req, res) => {
    const userData = req.body
    const ctgId = req.body.categories

    try{
        const product = await  new Product(userData)
        product.save()
    
        const categories = await Categorie.find({ _id : {$in : ctgId}})
        categories.forEach(elm => {
            elm.products.push(product)
            elm.save()
        })
        res.send(" product added successfuly!")

    }
    catch(ex){
        res.status(500).send(ex)
    }

})

router.delete("/removeProduct/:id" , async (req,res,next) => {
    try{
        await Product.deleteOne({ _id : req.params.id})
        res.send("product deleted successfuly")
    }
    catch(ex) {
        next(ex)
    }

})

router.put("/updateProduct/:id" , async (req,res,next) => {
    try{
        const product = await Product.findByIdAndUpdate(req.params.id , req.body)
        if(!product)
            return res.status(404).send("no product for the giving id")
        res.send("updated successfuly!")
    }
    catch(ex){
        next(ex)
    }
})

module.exports  = router 


