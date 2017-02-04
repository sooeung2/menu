import express from 'express'
import Menu from './Models/Menu'
const router = express.Router()

router.use((req, res, next) => {
	console.log("Time: ", Date.now())
	next()
})

router.get('/', (req, res) => {
  Menu.find({}, (err, menu) => {
    if (err) res.send('something went wrong')
    res.send(menu)
  })
})

export default router
