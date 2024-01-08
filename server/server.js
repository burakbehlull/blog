import express from 'express'

const app = express()

app.get('/', (req,res)=> {
	res.send('HELLO MERN BLOG')
	
})

app.listen(8000, ()=>{
	console.log('8000 portunda çalışıyor.')
})