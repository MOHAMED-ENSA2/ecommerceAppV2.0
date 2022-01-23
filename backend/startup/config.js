const config = require("config")



module.exports = function(){

    if(!config.get("jwtPrivateKey")){
        console.error("FATAL :  jwtPrivateKey is not defined!")
        process.exit(1)
    }

}