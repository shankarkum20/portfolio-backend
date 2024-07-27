const express=require('express')
const sendmessage = require('../controller/appcontroller')
const sendmess =require('../controller/appcontroller')
const router =express.Router()


router.post('/user/sendmessage',sendmess)

module.exports=router