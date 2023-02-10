import React, { ChangeEvent, FC, useState } from 'react';

type InputType = {
	addMessage: (title: string) => void
}

export const FullInput: FC<InputType> = (props): JSX.Element => {
	const [title, setTitle] = useState('');

	return (
		<input />
	);
}