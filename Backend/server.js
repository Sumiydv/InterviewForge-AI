require("dotenv").config()
const app = require("./src/app")
const connectToDB = require("./src/config/database")

async function startServer() {
    try {
        await connectToDB()
        app.listen(3000, () => {
            console.log("Server is running on port 3000")
        })
    } catch (err) {
        console.error("Server startup failed:", err.message)
        process.exit(1)
    }
}

startServer()
