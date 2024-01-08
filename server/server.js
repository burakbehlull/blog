import express from 'express'
import pageRoute from './routers/pageRoute.js'
import dotenv from 'dotenv'

const app = express()
dotenv.config()
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/', pageRoute)

app.listen(process.env.PORT, ()=>{
	console.log(`${process.env.PORT} portunda çalışıyor.`)
})