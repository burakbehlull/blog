import express from 'express'
import pageRoute from './routers/pageRoute.js'

const app = express()
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/', pageRoute)

app.listen(80, ()=>{
	console.log('80 portunda çalışıyor.')
})