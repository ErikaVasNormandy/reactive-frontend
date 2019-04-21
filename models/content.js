
/// https://mongoosejs.com/docs/guide.html

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContentSchema = new Schema({
	
	action: {
		type: String, 
		required: [true, "the field is required"]
	},
	dateStamp: { 
		type: String,
		required: [true,"date is required"]

	},
	title: String,
	body: {
		type: String, 
		required: [true, "the field is required"]
	},
	images: Array,
	comments: Array
	

})

const Content = mongoose.model('content', ContentSchema);
module.exports = Content;






