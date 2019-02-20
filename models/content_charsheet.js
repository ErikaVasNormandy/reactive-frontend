
/// https://mongoosejs.com/docs/guide.html

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CharSheetSchema = new Schema({
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


	priority: { 
		type: Number,
		required: [true,"date is required"]

	},
	Alignment: String,
	Age: {
		type: String, 
		required: [true, "the field is required"]
	},	

	Gender: {
		type: String, 
		required: [true, "the field is required"]
	},

	Tier: {
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
	images: Array


})

const CharSheetModel = mongoose.model('charsheet', CharSheetSchema);

module.exports = CharSheetModel;






