import React, { useState } from 'react';
import { TaskType, Todolist } from './Todolist';
import { v1 } from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";

export type TodolistsType = {
	id: string,
	title: string,
	filter: FilterValuesType
}

function TDLApp() {

	// let [tasks, setTasks] = useState([
	//     {id: v1(), title: "HTML&CSS", isDone: true},
	//     {id: v1(), title: "JS", isDone: true},
	//     {id: v1(), title: "ReactJS", isDone: false},
	//     {id: v1(), title: "Rest API", isDone: false},
	//     {id: v1(), title: "GraphQL", isDone: false},
	// ]);
	// let [filter, setFilter] = useState<FilterValuesType>("all");

	let todolistID1 = v1();
	let todolistID2 = v1();

	let [todolists, setTodolists] = useState<Array<TodolistsType>>([
		{ id: todolistID1, title: 'What to learn', filter: 'active' },
		{ id: todolistID2, title: 'What to buy', filter: 'all' },
	])

	let [tasks, setTasks] = useState({
		[todolistID1]: [
			{ id: v1(), title: "HTML&CSS", isDone: true },
			{ id: v1(), title: "JS", isDone: true },
			{ id: v1(), title: "ReactJS", isDone: false },
			{ id: v1(), title: "Rest API", isDone: false },
			{ id: v1(), title: "GraphQL", isDone: false },
		],
		[todolistID2]: [
			{ id: v1(), title: "HTML&CSS2", isDone: true },
			{ id: v1(), title: "JS2", isDone: true },
			{ id: v1(), title: "ReactJS2", isDone: false },
			{ id: v1(), title: "Rest API2", isDone: false },
			{ id: v1(), title: "GraphQL2", isDone: false },
		]
	});



	function removeTask(todolistID: string, id: string) {
		setTasks({ ...tasks, [todolistID]: tasks[todolistID].filter(task => task.id !== id) })
		// let filteredTasks = tasks.filter(t => t.id != id);
		// setTasks(filteredTasks);
	}

	function addTask(todolistID: string, title: string) {
		let task = { id: v1(), title: title, isDone: false };
		setTasks({ ...tasks, [todolistID]: [task, ...tasks[todolistID]] })
		// let task = { id: v1(), title: title, isDone: false };
		// let newTasks = [task, ...tasks];
		// setTasks(newTasks);
	}

	function changeStatus(todolistID: string, taskId: string, newIsDone: boolean) {
		setTasks({ ...tasks, [todolistID]: tasks[todolistID].map(task => task.id === taskId ? { ...task, isDone: newIsDone } : task) })
		// 	let task = tasks.find(t => t.id === taskId);
		// 	if (task) {
		// 		task.isDone = isDone;
		// 	}

		// 	setTasks([...tasks]);
	}

	function changeFilter(todolistID: string, value: FilterValuesType) {
		setTodolists(todolists.map(list => list.id === todolistID ? { ...list, filter: value } : list));
		// setFilter(value);
	}


	return (
		<div className="TDLApp">
			{todolists.map(list => {
				let tasksForTodolist = tasks[list.id];
				if (list.filter === "active") {
					tasksForTodolist = tasks[list.id].filter(t => t.isDone === false);
				}
				if (list.filter === "completed") {
					tasksForTodolist = tasks[list.id].filter(t => t.isDone === true);
				}
				return (
					<Todolist
						key={list.id}
						todolistID={list.id}
						title={list.title}
						tasks={tasksForTodolist}
						removeTask={removeTask}
						changeFilter={changeFilter}
						addTask={addTask}
						changeTaskStatus={changeStatus}
						filter={list.filter}
					/>
				)
			})}
		</div>
	)

}
export default TDLApp;