const winston = require("winston/lib/winston/config")

module.exports = function(ex , req, res ,next){

    // winston.error(ex)
    res.status(500).send(ex.message)
}

