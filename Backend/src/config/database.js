const mongoose = require("mongoose")



async function connectToDB() {
    const mongoUri = process.env.MONGO_URI
    if (!mongoUri) {
        throw new Error("MONGO_URI is not set in .env")
    }

    try {
        await mongoose.connect(mongoUri, {
            serverSelectionTimeoutMS: 10000
        })
        console.log("Connected to Database")
    } catch (err) {
        console.error("Failed to connect to MongoDB:", err.message)
        throw err
    }
}

module.exports = connectToDB
