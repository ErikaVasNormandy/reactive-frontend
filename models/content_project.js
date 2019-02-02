
/// https://mongoosejs.com/docs/guide.html

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContentProjectSchema = new Schema({
	

	dateStamp: Date,
	title: String,
	basicDescription: String,
	images: Array,
	tags: Array,
	link: String

})

const ContentProject = mongoose.model('content_project', ContentProjectSchema);
module.exports = ContentProject;






