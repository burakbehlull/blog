import express from 'express'
import pageRoute from './routers/pageRoute.js'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

const app = express()
dotenv.config()

mongoose.connect(process.env.MONGODB_URL).then(()=> {
	console.log('Veritabanına bağlandı.')
}).catch((err)=>{
	console.log("Veritabanı hatası: ", err)
})

//middlewares
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/', pageRoute)

app.listen(process.env.PORT, ()=>{
	console.log(`${process.env.PORT} portunda çalışıyor.`)
})