
/// https://mongoosejs.com/docs/guide.html

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CharsheetSchema = new Schema({
	CharacterName: {
		type: String, 
		required: [true, "the field is required"]
	},
	PreviewPic:{
		type: String,
		required: [true, "the field is required"]
	},

	Roles:{
		type: String, 
		required: [true, "the field is required"]
	},
	tldr: {
		type: String, 
		required: [true, "the field is required"]
	},

	Priority: { 
		type: Number,
		required: [true,"date is required"]

	},
	Alignment: String,
	Age: {
		type: String, 
		required: [true, "the field is required"]
	},	

	Childhood: {
		type: String, 
		required: [true, "the field is required"]
	},

	Goals: {
		type: String, 
		required: [true, "the field is required"]
	},

	Background: {
		type: String, 
		required: [true, "the field is required"]
	},
	CurrentStatus: {
		type: String, 
		required: [true, "the field is required"]
	},
	images: Array, 


})

const CharsheetModel = mongoose.model('charsheet', CharsheetSchema);

module.exports = CharsheetModel;






