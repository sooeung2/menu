import mongoose form 'mongoose'
const Schema = mongoose.Schema

const StoreSchema = new Schema({
	name: String,
	email: String,
})
