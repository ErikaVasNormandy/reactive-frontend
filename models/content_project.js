
/// https://mongoosejs.com/docs/guide.html

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContentProjectSchema = new Schema({
	
	dateStamp: { 
		type: Date,
		required: [true,"date is required"]

	},
	title: String,
	body: {
		type: String, 
		required: [true, "the field is required"]
	},
	images: Array,
	tags: Array,
	link: String

})

const ContentProject = mongoose.model('content_project', ContentProjectSchema);
module.exports = ContentProject;






