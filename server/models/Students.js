const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
	studentName: {
		type: String,
		required: true,
	},
	phoneNumber: {
		type: Number,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	classGroup: {
		type: String,
		required: true,
	},
	dateOfBirth: {
		type: String,
		required: true,
	},
});

const Students = mongoose.model('Student', StudentSchema);

module.exports = Students;
