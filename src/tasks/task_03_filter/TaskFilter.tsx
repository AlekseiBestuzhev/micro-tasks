import React, { useState } from 'react';
import { Filters, moneyType } from '../../components/Filters';

export type FilterMoneyType = 'rubls' | 'dollars' | 'all';

export const TaskFilter = () => {
	const money: moneyType[] = [
		{ banknots: 'dollars', value: 100, number: ' a1234567890' },
		{ banknots: 'dollars', value: 50, number: ' z1234567890' },
		{ banknots: 'rubls', value: 100, number: ' w1234567890' },
		{ banknots: 'dollars', value: 100, number: ' e1234567890' },
		{ banknots: 'dollars', value: 50, number: ' c1234567890' },
		{ banknots: 'rubls', value: 100, number: ' r1234567890' },
		{ banknots: 'dollars', value: 50, number: ' x1234567890' },
		{ banknots: 'rubls', value: 50, number: ' v1234567890' },
	];
	let currentMoney = money;
	let [filter, setFilter] = useState<FilterMoneyType>('all');

	const onClickFilterHendler = (nameButton: FilterMoneyType) => {
		setFilter(nameButton);
	}
	if (filter === 'rubls') {
		currentMoney = money.filter(elem => elem.banknots === 'rubls');
	}
	if (filter === 'dollars') {
		currentMoney = money.filter(elem => elem.banknots === 'dollars');
	}
	return (
		<div>
			<h2 className='task'>Task 03. Filter</h2>
			<Filters array={currentMoney} callBack={onClickFilterHendler} />
		</div>
	);
}