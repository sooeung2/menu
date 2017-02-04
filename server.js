import express from 'express'
import mongoose from 'mongoose'
import router from './src/router'
const app = express()

mongoose.connect('mongodb://localhost/test', () => {
	console.log("mongoose connected")
})

app.use('/test', router)

app.listen(8888, () => {
  console.log('listening on port 8888')
})
