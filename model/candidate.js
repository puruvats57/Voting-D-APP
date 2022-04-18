const mongoose = require('mongoose')

const CanSchema = new mongoose.Schema(
	{
	
		candidate: { type: String, required: true },
        vote: { type: Number, required: true }
        
		
	},
	{ collection: 'candidate' }
)

const model = mongoose.model('CanSchema', CanSchema)

module.exports = model
