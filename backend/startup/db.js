const config = require("config")
const {getLogger} = require("./logging")
const mongooose = require("mongoose")

const logger = getLogger()
module.exports = function(){

    let db = config.get("db")
    if(process.env.NODE_ENV  === "production"){
        db = process.env.MONGODB_URI
    }
    mongooose.connect(db)
            .then(() => {logger.info("connecting to" + db)})
            .catch((error) => logger.error(error))
}

