const express=require('express')
const dotenv=require('dotenv')
const cors =require('cors')
const router = require('./routes/routes')
dotenv.config()



const app=express()
const Port =process.env.PORT || 5000

app.use(express.json());
app.use(cors())
app.use('/api',router)

app.listen(Port,()=>{
    console.log('server is started...!')
})