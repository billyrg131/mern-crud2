import React from 'react';

function UpdateForm({
	newEmail,
	setNewEmail,
	newPhone,
	setNewPhone,
	newClass,
	setNewClass,
}) {
	return (
		<div>
			<input
				type="text"
				placeholder="Update Email"
				onChange={(e) => setNewEmail(e.target.value)}
			/>
			<input
				type="number"
				placeholder="Update Phone No"
				onChange={(e) => setNewPhone(e.target.value)}
			/>
			<input
				type="text"
				placeholder="Update Class"
				onChange={(e) => setNewClass(e.target.value)}
			/>
		</div>
	);
}

export default UpdateForm;
