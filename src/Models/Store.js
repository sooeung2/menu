import mongoose from 'mongoose'
const Schema = mongoose.Schema

const StoreSchema = new Schema({
	name: { type: String, required: true },
	email: String,
})

export default mongoose.model("Store", StoreSchema)
