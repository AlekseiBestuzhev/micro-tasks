import React, { ChangeEvent, FC, useState } from 'react';

type FullInputType = {
	addMessage: (title: string) => void
}

export const FullInput: FC<FullInputType> = (props): JSX.Element => {
	const [title, setTitle] = useState('');
	const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setTitle(event.currentTarget.value);
	}
	const onClickButtonHendler = () => {
		props.addMessage(title);
	};
	return (
		<div>
			<input onChange={onChangeInputHandler} value={title} />
			<button onClick={onClickButtonHendler}>+</button>
		</div>
	);
}