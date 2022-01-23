const mongoose = require("mongoose")


const categorieSchema = new mongoose.Schema({
    name : String , 
    products : {
        type : [mongoose.Schema.Types.ObjectId] , 
        ref : "Product"
    } , 
    date : {
        type : Date , 
        default : Date.now  
    }
})

module.exports = mongoose.model("Categorie" ,categorieSchema )


// ["Electronics" ,"Foods", "Fruits" , "Dairy" ,"Vegetables" , "Meat&Poultry", "Oil&Ghee" , "Herbs&Spices" ]

