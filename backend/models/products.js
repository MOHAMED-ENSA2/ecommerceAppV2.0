const mongoose = require("mongoose")


const productsSchema = new mongoose.Schema({
    title : { 
        type : String,
        required : true 
    } , 
    details : {
        type : String , 
        maxlength : 1024 
    } ,
    unitPrice  : {
        type : Number 
    } , 
    categories : {
        type : [mongoose.Schema.Types.ObjectId] , 
        ref : "Categorie" ,
    },
    image : String  , 
    qty : String , 
    price : Number , 
    date : {
        type : Date , 
        default : Date.now
    } , 
    isPromotion : {
        type : Boolean , 
        default : false
    }

})

// productsSchema.methods.cheackCategorieExistance = function(categorie){
//     // const isExists = 
//     this.
// }


module.exports = mongoose.model("Product" , productsSchema )