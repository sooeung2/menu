import mongoose from 'mongoose'
const Schema = mongoose.Schema

const MenuSchema = new Schema({
	name: String,
	price: Number,
})

export default mongoose.model("Menu", MenuSchema)
