import React from 'react';
import { ButtonFir } from '../../components/ButtonFir';
import '../../App.css';

export const TaskButton = () => {
	const funcHend1 = (nth: string) => {
		console.log(nth);
	}
	const funcHend2 = (nth: string) => {
		console.log(nth);
	}
	return (
		<div>
			<h2 className='task'>Task 02. Button</h2>
			<ButtonFir name='First Button' callBack={() => funcHend1('First')} />
			<ButtonFir name='Second Button' callBack={() => funcHend2('Second')} />
		</div>
	);
}