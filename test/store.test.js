import { expect } from 'chai'
import mongoose from 'mongoose'
import Store from '../src/models/Store'

describe('Store', () => {
	describe('model', () => {
		it('should be invalid if name is empty', (done) => {
			const m = new Store()
			m.validate(err => {
				expect(err.errors.name).to.exist
				done()
			})
		})
	})
})
