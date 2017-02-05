import Store from '../src/models/Store'
import chai from 'chai'
import chaiHttp from 'chai-http'
import server from '../server'

const should = chai.should()

chai.use(chaiHttp)

describe('Stores', () => {
	before(done => {
		Store.remove({}, err => {
			done()
		})
	})
	it('should GET all the stores', (done) => {
		chai.request('http://localhost:8888')
		.get('/api/stores')
		.end((err, res) => {
			res.should.have.status(200)
			res.body.should.be.a('array')
			// res.body.length.shoud.be.eql(0)
			done()
		})
	})

	it('should not POST a store without name', (done) => {
		const store = new Store({email: 'store1@gmail.com'})
		chai.request('http://localhost:8888')
		.post('/api/stores')
		.send(store)
		.end((err, res) => {
			res.should.have.status(200)
			res.body.should.be.a('object')
			res.body.should.have.property('email')
			// res.body.errors.should.have.property('name')
			done()
		})
	})

	it('should POST a store without name', (done) => {
		const store = new Store({name: 'store1', email: 'store1@gmail.com'})
		chai.request('http://localhost:8888')
		.post('/api/stores')
		.send(store)
		.end((err, res) => {
			res.should.have.status(200)
			res.body.should.be.a('object')
			res.body.should.have.property('name')
			// res.body.errors.should.have.property('name')
			done()
		})
	})

})
