const dotenv = require('dotenv')
dotenv.config()

module.exports = {
    PORT_DEV: process.env.PORT_DEV,
    JWT_KEY: process.env.JWT_KEY,
    MONGODB_URI: process.env.MONGODB_URI
}