import React, { useState } from 'react';

export const TaskFilter = () => {
	const [money, setMoney] = useState([
		{ banknots: 'Dollars', value: 100, number: ' a1234567890' },
		{ banknots: 'Dollars', value: 50, number: ' z1234567890' },
		{ banknots: 'RUBLS', value: 100, number: ' w1234567890' },
		{ banknots: 'Dollars', value: 100, number: ' e1234567890' },
		{ banknots: 'Dollars', value: 50, number: ' c1234567890' },
		{ banknots: 'RUBLS', value: 100, number: ' r1234567890' },
		{ banknots: 'Dollars', value: 50, number: ' x1234567890' },
		{ banknots: 'RUBLS', value: 50, number: ' v1234567890' },
	]);

	return (
		<div>
			<h2 className='task'>Task 03. Filter</h2>
			<ul>
				{money.map((elem, index) => {
					return (
						<li key={index}>
							<span>{elem.banknots} </span>
							<span>{elem.value} </span>
							<span>{elem.number}</span>
						</li>
					)
				})}
			</ul>
		</div>
	);
}