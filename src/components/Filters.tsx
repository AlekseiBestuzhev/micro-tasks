import React from 'react';
import { FilterMoneyType } from '../tasks/task_03_filter/TaskFilter';

export type moneyType = {
	banknots: string,
	value: number,
	number: string
}

type FiltersType = {
	array: moneyType[],
	callBack: (nameButton: FilterMoneyType) => void
}

export const Filters = (props: FiltersType) => {
	const showList: JSX.Element | JSX.Element[] = props.array.map((elem, index) => {
		return (
			<li key={index}>
				<span>{elem.banknots} </span>
				<span>{elem.value} </span>
				<span>{elem.number}</span>
			</li>
		)
	});
	return (
		<>
			<ul>
				{showList}
			</ul>
			<button onClick={() => { props.callBack('all') }}>all</button>
			<button onClick={() => { props.callBack('rubls') }}>rubls</button>
			<button onClick={() => { props.callBack('dollars') }}>dollars</button>
		</>
	);
}