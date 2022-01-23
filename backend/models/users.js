const mongoose = require("mongoose")
const Joi = require("joi")
const jwt = require("jsonwebtoken")
const config = require("config")


const userSchema = new mongoose.Schema({
    name : {
        type : String , 
        maxlength : 25, 
        minlength : 3
    } , 
    email : {
        type : String , 
        required : true, 
        unique : true ,
        minlength : 5 ,  
        maxlength : 255 ,
    } , 
    password :  {
        type : String , 
        required : true , 
        minlength : 5 ,  
        maxlength : 1024 ,
    } , 
    isAdmin : {
        type : Boolean
    } ,
    // deliveryAddress : {
    //     type : mongoose.Schema.Types.ObjectId , 
    //     ref : "DeliveryAdress"
    // }

})


userSchema.methods.generatejwt = function(){
    const token = jwt.sign({ id : this._id ,  name : this.name , email : this.email , isAdmin : this.isAdmin} 
                                , config.get("jwtPrivateKey"))
    return token 
}


const User = mongoose.model("User" , userSchema)

const userValidator = (user) => {
    const schema = Joi.object({

        name : Joi.string().min(3).max(25) , 
        email : Joi.string().required().min(5).max(255),
        password : Joi.string().required().min(5).max(1024) , 
        isAdmin : Joi.boolean()
    })

    return schema.validate(user).error
}


module.exports = { User , userValidator}