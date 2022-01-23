require("express-async-errors")

const app = require("express")()

// connecting to the database 
require("./startup/db")()
// add routes and other middlewares
require("./startup/routes")(app)
// add configuration 
require("./startup/config")()
// add logging 
const {getLogger , handleExceptions} = require("./startup/logging")
const logger = getLogger()
handleExceptions(logger)
// add socket 
// require("./startup/chat")()

const port = process.env.PORT || 3003
const server = app.listen(port , () => logger.info("server listnening at port" + port) )

module.exports = server 




