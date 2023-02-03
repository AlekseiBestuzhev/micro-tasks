import React, { useState } from 'react';

export const Counter = () => {
	let [counter, setCounter] = useState(0);
	const setHendler = () => {
		setCounter(++counter)
	};
	const resetHendler = () => {
		setCounter(0)
	};
	return (
		<div>
			<h3>{counter}</h3>
			<button onClick={setHendler}>+</button>
			<button onClick={resetHendler}>0</button>
		</div>
	)
}