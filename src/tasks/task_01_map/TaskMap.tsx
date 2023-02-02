import React from 'react';
import cls from './TaskMap.module.css';

export type CarsType = {
	manufacturer: string,
	model: string
}

type TaskType = {
	top: CarsType[]
}

export function TaskMap(props: TaskType) {
	const taskItem: JSX.Element | JSX.Element[] = props.top.map((elem, index) => {
		return (
			<tr key={index}>
				<td>{index + 1}</td>
				<td>{elem.manufacturer}</td>
				<td>{elem.model}</td>
			</tr>
		)
	});
	return (
		<div className='task'>
			<h2>Task 01. Map</h2>
			<table className={cls.table} border={1}>
				<tbody>
					<tr>
						<th>№</th>
						<th>Name</th>
						<th>Model</th>
					</tr>
					{taskItem}
				</tbody>
			</table>
		</div>
	);
}