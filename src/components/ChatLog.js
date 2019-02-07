import React from 'react';
import * as uuid from 'uuid/v4';

const ChatLog = ({log}) => {
	if (log.length <= 0){
		return <li id='chatDisplay'> Start a conversation</li>;
	}

	const logs = log.map((msg) => { return(<ul className='chatLog' key={uuid()}> {msg} </ul>) } );

	return (
		<div id='chatDisplay'>
			{logs}
			<div id='scrollBottom'></div>
		</div>
	);
};

export default ChatLog;