import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UpdateForm from './Update';

function StudentList() {
	const [students, setStudents] = useState([]);
	const [ifUpdate, showUpdate] = useState(false);
	const [newName, setNewName] = useState('');
	const [newPhone, setNewPhone] = useState(0);
	const [newEmail, setNewEmail] = useState('');
	const [newClass, setNewClass] = useState('');
	useEffect(() => {
		axios
			.get('http://localhost:3001/read')
			.then((res) => setStudents(res.data))
			.catch((err) => console.log(err));
	}, []);
	const updateStudent = (id) => {
		axios.put('http://localhost:3001/update', {
			id: id,
			newEmail: newEmail,
			newPhone: newPhone,
			newClass: newClass,
		});
	};
	const deleteStudent = (id) => {
		axios.delete(`http://localhost:3001/delete/${id}`);
	};

	console.log(setStudents);
	return (
		<div>
			<h1>Students</h1>

			{students.map((student, index) => {
				return (
					<div
						key={index}
						style={{
							margin: '26px',
							fontSize: '17px',
							border: '1px solid black',
							padding: '10px',
						}}
					>
						<p>Name: {student.studentName}</p>
						<p>Email: {student.email}</p>
						<p>Phone: +254{student.phoneNumber}</p>
						<p>Class: {student.classGroup}</p>
						<p>D.O.B: {student.dateOfBirth}</p>
						<div className="btnDiv">
							{ifUpdate === true ? (
								<div>
									<UpdateForm
										newEmail={newEmail}
										setNewEmail={setNewEmail}
										newPhone={newPhone}
										setNewPhone={setNewPhone}
										newClass={newClass}
										setNewClass={setNewClass}
									/>
									<button onClick={() => updateStudent(student._id)}>
										Update
									</button>
								</div>
							) : (
								<div>
									<button onClick={() => showUpdate(true)} className="edit">
										<i className="fa fa-edit fa-2x"></i>
									</button>
								</div>
							)}
							<button
								onClick={() => deleteStudent(student._id)}
								className="delete"
							>
								<i className="fa fa-trash fa-2x"></i>
							</button>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default StudentList;
