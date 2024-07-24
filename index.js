/*
 *              
 *  Glidactyl
 *  (c) 2024 ViktoriaSoftware and contributers
 * 
*/

const config = require("./config.json")
const mongoose = require("mongoose")

async function connectToDb() {
    try{
        await mongoose.connect(config.dbUrl)
        console.log("Connect to DB!")
    } catch (error) {
        console.log("MongoDB connection error:", error)
        process.exit(1);
    }
};

connectToDb();