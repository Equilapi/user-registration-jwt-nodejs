const mongoose = require('mongoose')
const { MONGODB_URI } = require('../config')

const NAME_BD = `/user-registration-api-nodejs`

mongoose.connect(`${MONGODB_URI}${NAME_BD}`, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(db => console.log(`Database connect!`))
    .catch(error => console.log(error))

module.exports = mongoose