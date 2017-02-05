import express from 'express'
import Store from './models/Store'

const router = express.Router()

router.use((req, res, next) => {
	console.log("Time: ", Date.now())
	next()
})

//get all stores
router.get('/stores', (req, res) => {
  Store.find({})
	.then(stores => res.json(stores))
	.catch(err => res.json(err))
})

//get a store by id
router.get('/stores/:id', (req, res) => {
  Store.findById(req.params.id).exec((err, store) => {
    if (err) res.json(err)
    res.json(store)
  })
})

//create a new store
router.post('/stores', (req, res) => {
	const store = new Store({...req.body})
	store.save((err, store) => {
		if (err) res.json(err)
		res.json(store)
	})
})

//update a store
router.put('/stores/:id', (req, res) => {
	Store.findByIdAndUpdate(
		req.params.id,
		{ $set: {...req.body} },
		{ new: true }
	).exec((err, store) => {
		if (err) res.json(404)
		res.json(store)
	})
})

//delete a store
router.delete('/stores/:id', (req, res) => {
	Store.findByIdAndRemove(
		req.params.id,
	).exec((err, store) => {
		if (err) res.json(404)
		res.json(store)
	})
})

export default router
