import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import StudentList from './components/List';

function App() {
	const [name, setName] = useState('');
	const [phone, setPhone] = useState(0);
	const [email, setEmail] = useState('');
	const [classSet, setClassSet] = useState('');
	const [birthDay, setBirthDay] = useState('');
	const addStudents = () => {
		axios.post('http://localhost:3001/insert', {
			studentName: name,
			phoneNumber: phone,
			email: email,
			classGroup: classSet,
			dateOfBirth: birthDay,
		});
	};
	useEffect(() => {
		axios.get('http://localhost:3001/read').then((res) => console.log(res));
	}, []);
	return (
		<div className="App">
			<h1> MERN CRUD</h1>
			<label>Student Name</label>
			<input
				type="text"
				placeholder="Name.."
				onChange={(event) => setName(event.target.value)}
			/>
			<label>Phone No</label>
			<input
				type="number"
				placeholder="Phone.."
				onChange={(event) => setPhone(event.target.value)}
				min="0"
				max="9000000000000"
			/>
			<label>Email</label>
			<input
				type="text"
				placeholder="Email.."
				onChange={(event) => setEmail(event.target.value)}
			/>
			<label>Class</label>
			<input
				type="text"
				placeholder="Class.."
				onChange={(event) => setClassSet(event.target.value)}
			/>
			<label>Date of Birth</label>
			<input
				type="text"
				placeholder="DD/MM/YY"
				onChange={(event) => setBirthDay(event.target.value)}
			/>
			<button onClick={addStudents} id="addBtn">
				Add Student to List
			</button>
			<StudentList />
		</div>
	);
}

export default App;
