const winston = require("winston")


getLogger = function(){
    const logger = winston.createLogger({
        level : "info" , 
        format : winston.format.json() , 
        transports : [
            new winston.transports.File({filename : "logging/error.log" , level : "error"}) , 
            new winston.transports.File({filename : "logging/combined.log" }),
            new winston.transports.Console()
        ]
        })
        

    return logger
}


handleExceptions = function(logger){
    process.on("uncaughtException" , (ex) => {
        logger.error(ex.message)
        // process.exit(1)
    })

}

module.exports = {getLogger , handleExceptions}