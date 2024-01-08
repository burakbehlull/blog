import express from 'express'

const app = express()

app.get('/', (req,res)=> {
	res.send('HELLO MERN BLOG')
	
})

app.listen(80, ()=>{
	console.log('80 portunda çalışıyor.')
})