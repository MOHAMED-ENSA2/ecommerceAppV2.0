

module.exports = function(req,res,next){
    const user = req.user 
    if(!user.isAdmin)
        return res.status(403).send("access denied for no admin user!")
    next()
}