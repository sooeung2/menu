import Store from '../src/models/Store'
import chai from 'chai'
import chaiHttp from 'chai-http'
import server from '../server'

const should = chai.should()

chai.use(chaiHttp)

describe('Stores', () => {
	before(done => {
		Store.remove({}, (err) => {
			if (err) console.log(err)
			done()
		})
	})

	it('should GET all the stores', done => {
		chai.request('http://localhost:8888')
		.get('/api/stores')
		.end((err, res) => {
			res.should.have.status(200)
			res.body.should.be.a('array')
			res.body.length.should.be.eql(0)
			done()
		})
	})

	it('should not POST a store without name', done => {
		const store = new Store({email: 'store1@gmail.com'})
		chai.request('http://localhost:8888')
		.post('/api/stores')
		.send(store)
		.end((err, res) => {
			res.should.have.status(200)
			res.body.should.be.a('object')
			res.body.should.have.property('errors')
			done()
		})
	})

	let storeId
	it('should POST a store without name', done => {
		const store = new Store({name: 'store1', email: 'store1@gmail.com'})
		chai.request('http://localhost:8888')
		.post('/api/stores')
		.send(store)
		.end((err, res) => {
			res.should.have.status(200)
			res.body.should.be.a('object')
			res.body.should.have.property('email').eql('store1@gmail.com')
			res.body.should.have.property('name').eql('store1')
			storeId = res.body._id
			done()
		})
	})

	it('should GET a store by id', done => {
		chai.request('http://localhost:8888')
		.get('/api/stores/' + storeId)
		.end((err, res) => {
			res.should.have.status(200)
			res.body.should.be.a('object')
			res.body.should.have.property('name');
			done()
		})
	})

	it('should GET all the stores', done => {
		chai.request('http://localhost:8888')
		.get('/api/stores')
		.end((err, res) => {
			res.should.have.status(200)
			res.body.should.be.a('array')
			res.body.length.should.be.eql(1)
			done()
		})
	})

	it('should PUT a store by storeId', done => {
		chai.request('http://localhost:8888')
		.put('/api/stores/' + storeId)
		.send({name: 'store2'})
		.end((err, res) => {
			res.should.have.status(200)
			res.body.should.be.a('object')
			res.body.should.have.property('name').eql('store2')
			res.body.should.have.property('email').eql('store1@gmail.com')
			done()
		})
	})

	it('should DELETE a store', done => {
		chai.request('http://localhost:8888')
		.delete('/api/stores/' + storeId)
		.send({name: 'store2'})
		.end((err, res) => {
			res.should.have.status(200)
			res.body.should.be.a('object')
			done()
		})
	})

	it('should GET all the stores', done => {
		chai.request('http://localhost:8888')
		.get('/api/stores')
		.end((err, res) => {
			res.should.have.status(200)
			res.body.should.be.a('array')
			res.body.length.should.be.eql(0)
			done()
		})
	})

})
