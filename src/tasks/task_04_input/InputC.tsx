import React, { ChangeEvent, FC, useState } from 'react';

type InputCtype = {
	setTitle: (title: string) => void,
	title: string
}

export const InputC: FC<InputCtype> = (props): JSX.Element => {
	const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
		props.setTitle(event.currentTarget.value);
	}
	return (
		<input onChange={onChangeInputHandler} value={props.title} />
	);
}