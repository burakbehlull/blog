import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import methodOverride from 'method-override'

import pageRoute from './routers/pageRoute.js'
import postRoute from './routers/postRoute.js'
import dbconn from './config/db.js'
const app = express()
dotenv.config()

dbconn()

//middlewares
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(
	methodOverride('_method', {
	  methods: ['POST', 'GET'],
	})
  );
app.use(cors({
	origin: true,
	credentials: true
}))

app.use('/', pageRoute)
app.use('/api', postRoute)

app.listen(process.env.PORT, ()=>{
	console.log(`${process.env.PORT} portunda çalışıyor.`)
})