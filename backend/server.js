import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'

// App Config
const app = express()
const port = process.env.PORT || 4000
connectDB()


// Add middleware
app.use(express.json())
app.use(cors())

// Api endpoint

app.get('/', (req,res)=> {
    res.send("API working")
})

app.listen(port, ()=> console.log('Server started on PORT : ' + port))