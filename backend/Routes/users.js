const express = require("express")

const router = express.Router()

const auth = require("../middlewares/auth")
const {User, userValidator} = require("../models/users")
const {encrypt} = require("../utils/passwordEcncypting")


// register a new user 
router.post("/register" , async (req, res) => {
    const newUser = req.body  
    // validation before checking the database
    const validationErrors = userValidator(newUser)
    if(validationErrors) return res.status(400).send(validationErrors.details[0].message)
    // check if a user with same email is already exists 
    const userExists = await User.findOne({ email : newUser.email})
    if (userExists) return res.status(400).send('a user with giving email is already exists')
    // hash the password 
    newUser.password = await encrypt(newUser.password)
    // generate a token 
    const user = await new User(newUser)
    const token = user.generatejwt()
    // save the new user 
    // send the registred user to the client
    user.save()
    res.header("x-auth-token", token).send(token)
})


router.get("/getUsers" , async (req,res) => {
    let users = await User.find() ;
    if(!users)
        return res.status(404).send("no users")
    users = users.map(user => {
        return(
            {   _id : user._id , 
                name : user.name , 
                email : user.email , 
                password : "" , 
                isAdmin : user.isAdmin 
            }
        )
    })
    res.send(users)
})

// get the current user 
router.get("/me" , auth ,  async (req,res, next) => {
    try{    
        const user = req.user
        if(!user)
            return res.status(400).send("no user") 
        res.send(user)
    }
    catch(error) {
        next(error.message)
    }
})

router.delete("/removeUser/:id" , async (req,res,next) => {
    try{
        await User.deleteOne({_id : req.params.id})
        res.send("deleted successfuly")
    }
    catch(ex){
        next(ex)
    }
})

router.put("/updateUser/:id" , async (req,res,next) => {
    const userData = req.body 
    if(userData.password == ""){
        const user = await User.findOne({ _id  : req.params.id})
        if(user)
            userData.password = user.password
    }
    else{
        userData.password = await encrypt(userData.password)
    }
    try{
        const user = await User.findByIdAndUpdate(req.params.id , userData)
        if(!user)
            return res.status(404).send("no product for the giving id")
        res.send("updated successfuly!")
    }
    catch(ex){
        next(ex)
    }
})

// update pessword 



module.exports = router 