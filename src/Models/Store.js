import mongoose from 'mongoose'
const Schema = mongoose.Schema

const StoreSchema = new Schema({
	name: String,
	email: String,
})

export default mongoose.model("Store", StoreSchema)
