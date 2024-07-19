import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import methodOverride from 'method-override'
import passport from 'passport'
import session from 'express-session'
import morgan from 'morgan'

import { adminRoute, postRoute, pageRoute, authRoute } from './routers/index.js'
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
)
app.use(morgan('dev'))

app.use(cors({
	origin: true,
	credentials: true
}))
app.use(session({ secret: process.env.SESSION_KEY, 
	resave: true, 
	saveUninitialized: true 
}))
app.use(passport.session())
app.use(passport.initialize())

app.use('/', pageRoute)
app.use('/api', postRoute)
app.use('/auth', authRoute)
app.use('/admin', adminRoute)

app.listen(process.env.PORT, ()=>{
	console.log(`${process.env.PORT} portunda çalışıyor.`)
})