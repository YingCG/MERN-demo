const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

const connectDB = async () => {
    try{
        console.log(dotenv);
        const conn = await mongoose.connect(dotenv.parsed.MONGO_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`);

    } catch(error){
        console.log(error);
        process.exit(1)
    }
}

module.exports = connectDB
