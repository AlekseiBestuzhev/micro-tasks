import React from 'react';
import './App.css';
import { TaskMap } from './tasks/task_01_map/TaskMap';

function App() {
	return (
		<div>
			<h1 className='page-title'>Micro-tasks</h1>
			<TaskMap />
		</div>
	);
}

export default App;
