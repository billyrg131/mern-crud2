const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Students = require('./models/Students');

const app = express();
app.use(express.json());
app.use(cors());

const uri =
	'mongodb+srv://admin:admin1234@crudcluster0.jstzcbd.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(uri, {
	useNewUrlParser: true,
});
app.get('/read', (req, res) => {
	Students.find({}, (err, result) => {
		if (err) {
			res.send(err);
		}
		res.send(result);
	});
});
app.post('/insert', async (req, res) => {
	const studentName = req.body.studentName;
	const phoneNumber = req.body.phoneNumber;
	const email = req.body.email;
	const classGroup = req.body.classGroup;
	const dateOfBirth = req.body.dateOfBirth;
	const student = new Students({
		studentName: studentName,
		phoneNumber: phoneNumber,
		email: email,
		classGroup: classGroup,
		dateOfBirth: dateOfBirth,
	});
	try {
		await student.save();
		res.send('inserted data');
	} catch (err) {
		console.log(err);
	}
});
app.put('/update', async (req, res) => {
	const id = req.body.id;
	const newEmail = req.body.newEmail;
	const newPhone = req.body.newPhone;
	const newClass = req.body.newClass;
	try {
		await Students.findById(id, (err, updatedStudent) => {
			updatedStudent.phoneNumber = newPhone;
			updatedStudent.email = newEmail;
			updatedStudent.classGroup = newClass;
			updatedStudent.save();
			res.send('Updated');
		});
	} catch (err) {
		console.log(err);
	}
});

app.delete('/delete/:id', async (req, res) => {
	const id = req.params.id;
	await Students.findByIdAndRemove(id).exec();
	res.send('deleted');
});
app.listen(3001, () => {
	console.log('Server is listening');
});
