import mongoose from 'mongoose'
// mongoose.Promist = global.Promise
const Schema = mongoose.Schema

const MenuSchema = new Schema({
	name: { type: String, required: true },
	price: { type: Number, required: true },
	_store: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Store'
	}
},
{
	timestamps: true
})

export default mongoose.model("Menu", MenuSchema)
