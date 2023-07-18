import mongoose from "mongoose"

let isConnected = false // Track the connection status

export const connecToDB = async () => {
    mongoose.set('strictQuery', true)

    if (isConnected) {
        console.log('MongoDB is already conected')
        return
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
            useNewURLParser: true,
            useUnifiedTopology: true
        })

        isConnected = true
        console.log("MongoDB connected")
    } catch (error) {
        console.error(error)
    }
}