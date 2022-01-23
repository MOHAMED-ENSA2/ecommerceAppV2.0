const router = require('express').Router() 

const Categorie = require("../models/categories")
const auth = require("../middlewares/auth")
const isAdmin = require("../middlewares/isAdmin")


router.get('/getCategories' , async (req, res) => {
    try{
        const categories = await Categorie.find().select("name")
        if(!categories)
            return res.status(404).send("there is no categorie")
        // categories.map((elm , index) => { categories[index] = elm["name"] })
        res.send(categories)
    }
    catch(ex){
        next(ex)
    }
})



router.post("/addCategorie"  ,async (req, res) => {
    
    try{
        const categorie = new Categorie(req.body)
        await categorie.save()
        res.send("categorie added successfuly")
    }
    catch(ex) {
        res.status(500).send(error)
    }   
    
})

// this endpoint will return all products of a giving categorie "/getCategories/:categorie"
router.get( "/:catgName" , async (req,res) => {
    
    try{
         const categorie = await Categorie.find({ name : req.params.catgName}).populate("products")
         const products = categorie[0].products
         if(!products) 
             return res.status(404).send("there is no products in this categorie")
         res.send(products)
     }   
     catch(ex){
         res.status(500).send(ex)
     }

})


module.exports = router 