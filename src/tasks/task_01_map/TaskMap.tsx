import React from 'react';
import cls from './TaskMap.module.css';

type CarsType = {
	manufacturer: string,
	model: string
}

export function TaskMap() {
	const topCars: CarsType[] = [
		{ manufacturer: 'BMW', model: 'm5cs' },
		{ manufacturer: 'Mercedes', model: 'e63s' },
		{ manufacturer: 'Audi', model: 'rs6' }
	];
	const taskItem: JSX.Element | JSX.Element[] = topCars.map((elem, index) => {
		return (
			<tr>
				<td>{index + 1}</td>
				<td>{elem.manufacturer}</td>
				<td>{elem.model}</td>
			</tr>
		)
	});
	return (
		<>
			<h2>Task 01. Map</h2>
			<table className={cls.table} border={1}>
				<tr>
					<th>№</th>
					<th>Name</th>
					<th>Model</th>
				</tr>
				{taskItem}
			</table>
		</>
	);
}