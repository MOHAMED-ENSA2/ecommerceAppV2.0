const mongoose = require("mongoose")


const ordreSchema = new mongoose.Schema({
    user : { 
        type : mongoose.Schema.Types.ObjectId ,
        ref : "User" 
    } , 
    deleveryAdress : {
        type : mongoose.Schema.Types.ObjectId , 
        ref : "DeliveryAddress"
    },
    cartItems : {
        type : [mongoose.Schema.Types.ObjectId] , 
        ref : "CartItem"
    } ,
    payment_status  : {
        type : String , 
        enum :  ["processed" ,"pending" , "complete" , "failed"]
    } , 
    finalPrice : Number ,
    
    placed_at : {
        type : Date , 
        default : Date.now,
    }

})


module.exports = mongoose.model("Ordre" , ordreSchema )