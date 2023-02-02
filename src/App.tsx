import React from 'react';
import './App.css';
import { CarsType, TaskMap } from './tasks/task_01_map/TaskMap';

function App() {
	const topCars: CarsType[] = [
		{ manufacturer: 'BMW', model: 'm5cs' },
		{ manufacturer: 'Mercedes', model: 'e63s' },
		{ manufacturer: 'Audi', model: 'rs6' }
	];
	return (
		<div>
			<h1 className='page-title'>Micro-tasks</h1>
			<TaskMap top={topCars} />
		</div>
	);
}

export default App;
