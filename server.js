import express from 'express'
import mongoose from 'mongoose'
import router from './src/router'
import bodyParser from 'body-parser'
const app = express()

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost/test', () => {
	console.log("mongoose connected")
})

app.use('/api', router)

app.listen(8888, () => {
  console.log('listening on port 8888')
})

export default app
