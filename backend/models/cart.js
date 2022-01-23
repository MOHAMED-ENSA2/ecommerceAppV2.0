const mongoose = require("mongoose")


const cartItemSchema = new mongoose.Schema({

    user : {
        type : mongoose.Schema.Types.ObjectId , 
        ref : "User"   
    },
    product : {
        type : mongoose.Schema.Types.ObjectId , 
        ref : "Product"
    } , 
    quantity : {
        type : Number , 
        default : 1
    }

})

module.exports =  mongoose.model("CartItem" , cartItemSchema)


// const cartSchema = new mongoose.Schema({

//     user : {
//         type : mongoose.Schema.Types.ObjectId , 
//         ref : "User"   
//     },
//     item : {
//         type : [mongoose.Schema.Types.ObjectId] , 
//         ref : "CartItem"
//     } , 
    
// })



// const Cart = mongoose.model("Cart" , cartSchema)

// module.exports = {Cart , CartItem}