import React, { useState } from 'react';
import { ButtonC } from './ButtonC';
import { InputC } from './InputC';

export const TaskInput = () => {
	const [message, setMessage] = useState([
		{ message: 'message 1' },
		{ message: 'message 2' },
		{ message: 'message 3' },
	]);
	// const addMessage = (title: string) => {
	// 	const newMessage = { message: title };
	// 	setMessage([newMessage, ...message]);
	// }
	const messageRender = message.map((elem, index) => {
		return (
			<div key={index}>{elem.message}</div>
		)
	})

	const [title, setTitle] = useState('');
	return (
		<div>
			<h2 className='task'>Task 04. Input</h2>
			{/* <FullInput addMessage={addMessage} /> */}
			<InputC setTitle={setTitle} title={title} />
			<ButtonC name='+' callback={() => { }} />
			{messageRender}
		</div>
	);
}