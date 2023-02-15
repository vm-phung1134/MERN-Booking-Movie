const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.DB_URI
    )
    console.log('Connected to mongoDB')
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = {connectDB}
