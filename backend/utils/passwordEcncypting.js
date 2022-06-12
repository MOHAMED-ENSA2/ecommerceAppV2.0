const bcrypt = require("bcryptjs")


async function encrypt(password) {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password , salt)
    return hashedPassword
}

async function compare(password , hashedPassword ){
    const result = await bcrypt.compare(password , hashedPassword)
    return result
}


module.exports = {
    encrypt ,
    compare
}

