const mongoose = require("mongoose")


const addressSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId , 
        ref : "User"
    },
    fullName : {
        type : String , 
        required : true 
    } , 
    phone : {
        type : String , 
        required : true 
    },
    address : {
        type : String , 
        required : true 
    },
    city :{
        type : String , 
        required : true 
    },
    region : {
        type : String , 
        required : true 
    },
    zipCode : {
        type : String , 
        required : true 
    },


})

module.exports = mongoose.model("DeliveryAddress" ,  addressSchema)