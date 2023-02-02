import React from 'react';

type ButtonFirType = {
	name: string,
	callBack: () => void
}

export const ButtonFir = (props: ButtonFirType) => {
	const onClickHendler = () => {
		props.callBack();
	}
	return (
		<button onClick={onClickHendler}>{props.name}</button>
	)
}