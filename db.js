const mongoose = require('mongoose')

// 1. connect to our database

async function connectToDatabase(){
    try{
    await mongoose.connect(process.env.DATABASE_URI)
    console.log("connected to DB")
    }
    catch(err){
        console.log("ERROR:", err)
    }
}


module.exports = connectToDatabase