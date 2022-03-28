import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

const main = async () => {
    await mongoose.connect(process.env.MONGO_URL || '')

    app.listen(5000, () => console.log('Server is running on port 5000'))
}

main().catch((error) => {
    console.error(error)
})