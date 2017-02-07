import mongoose from 'mongoose'
// mongoose.Promist = global.Promise
const Schema = mongoose.Schema

const StoreSchema = new Schema({
	name: { type: String, required: true },
	email: String,
	_menus: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Menu'
	}]
},
{
	timestamps: true
})

export default mongoose.model("Store", StoreSchema)
