const mongoose = require('mongoose')

mongoose.Promise = global.Promise
const connectToMongo = () => {
   mongoose.connect(process.env.MONGO_URL)
      .then(() => console.log("Connection Successful!"))
      .catch((err) => console.log(err))
}

module.exports = connectToMongo
