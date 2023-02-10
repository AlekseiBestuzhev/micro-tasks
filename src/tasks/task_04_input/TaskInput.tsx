import React, { useState } from 'react';

export const TaskInput = () => {
	const [message, setMessage] = useState([
		{ message: 'message 1' },
		{ message: 'message 2' },
		{ message: 'message 3' },
	])

	return (
		<div>
			<h2 className='task'>Task 04. Input</h2>
			<div>
				<input type="text" />
				<button>+</button>
			</div>
			{message.map((elem, index) => {
				return (
					<div key={index}>{elem.message}</div>
				)
			})}
		</div>
	);
}