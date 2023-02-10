import React, { FC } from 'react';

type ButtonCtype = {
	name: string,
	callback: () => void
}

export const ButtonC: FC<ButtonCtype> = (props): JSX.Element => {
	const onClickButtonHandler = () => {
		props.callback();
	}
	return (
		<button onClick={onClickButtonHandler}>{props.name}</button>
	);
}